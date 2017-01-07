import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * クリエイティブスケジュールプリセット全件取得
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function getCreativePresetAppeal() {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_appeals`
    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}

/**
 * クリエイティブスケジュールプリセット新規作成
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function createCreativeAppeal(appealName) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_appeals`
    const postData = {
        appealName
    }
    return {
        target: EXCUEZ,
        request: client.post(endpoint, postData)
    }
}

/**
 * クリエイティブスケジュールプリセット更新
 *
 * @param {number} id
 * @returns {Promise}
 */
export function updateCreativeAppeal(id, appealName, viewFlag) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_appeals/${id}`
    const postData = {
        appealName,
        viewFlag
    }
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}

/**
 * クリエイティブスケジュールプリセットviewFlag更新
 *
 * @param {number} id
 * @returns {Promise}
 */
export function updateViewFlagCreativeAppeal(id, viewFlag) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_appeals/${id}/view_flag`
    const postData = {
        viewFlag
    }
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}
