import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * 広告グループID指定での広告枠リスト取得
 *
 * @param {number} adGroupId : Long
 * @param {string}
 */
export function getAdspotsByAdgroupId (adGroupId) {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/adgroups/${adGroupId}/monopolies`
    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}


/**
 * 広告枠作成
 *
 * @param {string} mediaId
 * @param {string} name
 * @param {string} creativeFormatId
 */
export const createAdspot = (mediaId, name, creativeFormatId) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/media/${mediaId}/adspots`
    let postData = {
        mediaId : mediaId,
        name : name,
        creativeFormatId : creativeFormatId
    };

    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};


/**
 * 広告枠-広告グループモノポリー設定
 *
 * @param {number} adSpotId
 * @param {number} adGroupId : Long
 * @param {string} monopolyRate (0.0 ~ 1.0)
 */
export const createAdspotAdgroupMonopoly = (adSpotId, adGroupId, monopolyRate) =>  {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/adspots/${adSpotId}/monopolies`
    let postData = {
        adSpotId : adSpotId,
        adGroupId: adGroupId,
        monopolyRate: monopolyRate
    };

    return {
        target: AVA_ADMIN,
        request: client.put(endpoint, postData)
    }
};
