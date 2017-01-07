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
export function getCreativePresetSchedule() {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_schedules`
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
export function createCreativeSchedule(scheduleName, scheduleData) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_schedules`
    const postData = {
        scheduleName,
        scheduleData
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
export function updateCreativeSchedule(id, scheduleName, scheduleData, viewFlag) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_schedules/${id}`
    const postData = {
        scheduleName,
        scheduleData,
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
export function updateViewFlagCreativeSchedule(id, viewFlag) {
    const endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/creative_meta_schedules/${id}/view_flag`
    const postData = {
        viewFlag
    }
    return {
        target: EXCUEZ,
        request: client.put(endpoint, postData)
    }
}
