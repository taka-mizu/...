import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'
import { SLOT_FILTER_VERSION } from '../../../constants/SlotFilter'

/**
 * 放送枠フィルタプリセット全件取得
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function getSlotFilters(name, data) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slot_filters`
    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}

/**
 * 放送枠フィルタプリセット新規作成
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function createSlotFilter(name, data) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slot_filters`
    const postData = {
        version: SLOT_FILTER_VERSION,
        name,
        data
    }
    return {
        target: EXCUEZ,
        request: client.post(endpoint, postData)
    }
}

/**
 * 放送枠フィルタプリセット更新
 *
 * @param {number} id
 * @returns {Promise}
 */
export function updateSlotFilter(id, name, data) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slot_filters/${id}`
    const postData = {
        version: SLOT_FILTER_VERSION,
        name,
        data
    }
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}

/**
 * 放送枠フィルタプリセット削除
 *
 * @param {number} id
 * @returns {Promise}
 */
export function removeSlotFilter(id) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/slot_filters/${id}`
    return {
        target: EXCUEZ,
        request: client.remove(endpoint)
    }
}
