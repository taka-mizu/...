import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * 広告取得
 *
 * @param adgroupId
 * @returns {{target, request: Promise}}
 */

export const getAds = (adgroupId, next = "") => {
    let params = (typeof next !== "undefined" && next !== "") ? `?next=${next}` : "";
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/adgroups/${adgroupId}/ads${params}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

/**
 * 広告作成
 *
 * @param {string} host
 * @param {number} adgroupId
 * @param {string} adName
 * @param {number} creativeId
 * @returns {Promise}
 */

export const createAd = (creativeId) => {
    let endpoint =  `http://${Settings.AVA_ADMIN_API_HOST}/ads`
    let postData = {
        mediaId: Settings.MEDIA_ID,
        creativeId
    };

    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};