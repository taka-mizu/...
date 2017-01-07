import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * シリーズの属性を取得する
 * @returns {{target, request: Promise}}
 */
export const getContentSeriesAttrs = (genreId) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/content_series_attrs/${genreId}/genre`;

    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}

/**
 * シリーズの属性を更新する
 * @returns {{target, request: Promise}}
 */
export const updateContentSeriesAttrs = ({ seriesId, gender, youthFlag }) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/content_series_attrs`;
    let params = { seriesId, gender, youthFlag };

    return {
        target: EXCUEZ,
        request: client.post(endpoint, params)
    }
}