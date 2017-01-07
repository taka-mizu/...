import qs from 'qs'
import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * AdGroup取得
 * @param account
 */
export function getAdGroups({startAt, endAt, agencyId, advertiserId, next}) {
    const params = qs.stringify({
        limit: 100,
        startAt,
        endAt,
        agencyId,
        advertiserId,
        next,
    })
    const endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/adgroups?${params}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}

/**
 * アカウントに紐付いたAdGroup取得
 * @param account
 */
export const getAdGroupsByAccount = (agency_id, advertiser_id, next = "") => {
    let params = (typeof next !== "undefined" && next !== "") ? `?next=${next}` : "";
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${agency_id}/${advertiser_id}/adgroups${params}`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

/**
 * AdGroup取得
 * @param id
 */
export function getAdGroupById(id){
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/adgroups/${id}`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}

/**
 * AdGroup登録
 * @param {string} name
 * @param {number} clusterOption
 * @param {string} campaignId
 */
export const createAdGroup = (name, clusterOption, campaignId) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/campaigns/${campaignId}/adgroups`;
    let postData = {
        name : name,
        clusterOption: clusterOption,
        campaignId : campaignId
    };

    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};
