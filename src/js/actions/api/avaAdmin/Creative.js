import qs from 'qs'
import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * クリエイティブ取得
 * @param {number} creativeId
 * @returns {{target, request: Promise}}
 */
export const getCreative = (creativeId) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/creatives/${creativeId}`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

/**
 * クリエイティブ複数取得
 * @param account
 * @returns {{target, request: Promise}}
 */
export const getCreatives = ({startAt, endAt, agencyId, advertiserId, next, limit}) => {
    const params = qs.stringify({
        limit: limit || 100,
        startAt,
        endAt,
        agencyId,
        advertiserId,
        next,
    })
    const endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/creatives?${params}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

/**
 * アカウントに紐付いたクリエイティブ複数取得
 * @param account
 * @returns {{target, request: Promise}}
 */
export const getCreativesByAccount = (agency_id, advertiser_id, next) => {
    const nextParam = next ? `&next=${next}` : ''
    const endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${agency_id}/${advertiser_id}/creatives?limit=100${nextParam}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

/**
 * クリエイティブ削除
 */
export const deleteCreative = ({creativeId}) => {
    const endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/creatives/${creativeId}`

    return {
        target: AVA_ADMIN,
        request: client.remove(endpoint)
    }
};

/**
 * create creative
 *
 * @param {string} name
 * @param {number} formatId
 * @param {string} jobId
 */
export const createCreative = (account, name, formatId, jobId, slotId ,startAt, endAt, creativeMetaDataId, creativeMetaScheduleId, creativeMetaAppealId, notCleanFlag) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${account.agency_id}/${account.advertiser_id}/creatives`;
    let postData = {name, formatId, jobId, mediaId: Settings.MEDIA_ID, notCleanFlag};
    if(startAt) {
        postData.startAt = startAt;
        postData.endAt = endAt;
    }
    if(slotId.length > 0) {
        postData.abemaTv = {};
        postData.abemaTv.reserve = {};
        postData.abemaTv.reserve.slotId = slotId;
    }

    if(creativeMetaDataId) postData.creativeMetaDataId = creativeMetaDataId;
    if(creativeMetaScheduleId) postData.creativeMetaScheduleId = creativeMetaScheduleId;
    if(creativeMetaAppealId) postData.creativeMetaAppealId = creativeMetaAppealId;

    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};

/**
 * update slotId
 *
 * @param {number} creativeId
 * @param {number} slotId
 */
export const updateSlotId = (creativeId, slotId) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/material/${creativeId}/jsondata`
    let postData = {
        abemaTv : {
            reserve: {
                slotId: slotId
            }
        }
    };

    return {
        target: AVA_ADMIN,
        request: client.put(endpoint, postData)
    }
};

/**
 * update creative
 *
 * @param {number} creativeId
 * @param {number} slotId
 */
export const updateCreative = (agencyId, advertiserId, creativeId , startAt, endAt, creativeMetaScheduleId, creativeMetaDataId, creativeMetaAppealId, creativeName, notCleanFlag) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${agencyId}/${advertiserId}/creatives/${creativeId}/creative`
    let postData = {agencyId, advertiserId, startAt, endAt, creativeName, notCleanFlag};

    if(creativeMetaScheduleId) postData.creativeMetaScheduleId = creativeMetaScheduleId;
    if(creativeMetaDataId) postData.creativeMetaDataId = creativeMetaDataId
    if(creativeMetaAppealId) postData.creativeMetaAppealId = creativeMetaAppealId

    return {
        target: AVA_ADMIN,
        request: client.put(endpoint, postData)
    }
};

/**
 * 分割アップロード & トランスコード
 * @param {object} account
 * @param {FormData} formData
 * @param {number}sequence 分割アップロードのシークエンス(0~)
 * @param {string} uuid アップロードしているファイルを識別するためのUUID
 * @returns {{target, request: Promise, sequence: *}}
 */
export const transcode = (account, file, sequence, uuid) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${account.agency_id}/${account.advertiser_id}/creatives/x/jobs`

    // 20MiBで区切ってアップロードする
    const chunkSize = 20 * 1000 * 1000;

    let start = sequence * chunkSize;
    let end = (sequence + 1) * chunkSize;
    if(end >= file.size){
        end = file.size;
        sequence = -1; //最後の目印として-1にする
    }
    let blob = file.slice(start, end);
    let formData = new FormData();
    formData.append('data', blob);
    let headers = {
        "Content-Range": `bytes ${start}-${end - 1}/${file.size}`,
        "Content-Disposition": `attachement; filename="${uuid}.mp4"`
    };

    return {
        target: AVA_ADMIN,
        request: client.upload(endpoint, formData, headers),

        account: account,
        file: file,
        sequence: sequence,
        uuid: uuid,
        sequenceLast: parseInt(file.size / chunkSize)
    }
}

export const progressTranscode = (account, jobId) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${account.agency_id}/${account.advertiser_id}/creatives/x/jobs/${jobId}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}
