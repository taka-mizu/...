import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * クリエイティブメタデータプリセット全件取得
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function getCreativePresetMetaData() {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_data`
    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}

/**
 * クリエイティブメタデータプリセット新規作成
 *
 * @param {string} name
 * @param {{}} data
 * @returns {Promise}
 */
export function createCreativeMetaData(dataName, data) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_data`
    const postData = {
        dataName,
        data
    }
    return {
        target: EXCUEZ,
        request: client.post(endpoint, postData)
    }
}

/**
 * クリエイティブメタデータプリセット更新
 *
 * @param {number} id
 * @returns {Promise}
 */
export function updateCreativeMetaData(id, dataName, viewFlag, data) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_data/${id}`
    const postData = {
        dataName,
        viewFlag,
        data
    }
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}

/**
 * クリエイティブメタデータプリセット削除
 *
 * @param {number} id
 * @returns {Promise}
 */
export function updateViewFlagCreativeMetaData(id, viewFlag) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_data/${id}/view_flag`
    const postData = {
        viewFlag
    }
    console.log();
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}
