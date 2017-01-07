import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * 編成枠取得
 *
 * @param {string} host
 * @param {string} slotId
 * @returns {Promise}
 */
export const getSlot = (slotId, uid) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slots/${slotId}`
    return {
        target: EXCUEZ,
        request: client
            .get(endpoint)
            .then((res)=>Object.assign({uid}, res))
    }
};

/**
 * 編成枠複数取得
 * @param startAt
 * @param endAt
 * @returns {{target, request: Promise}}
 */

export const getSlots = (startAt, endAt) => {
    let endpoint =  `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slots?startAt=${startAt}&endAt=${endAt}`;

    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
};
