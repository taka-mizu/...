import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * ジャンル全件取得
 * @returns {{target, request: Promise}}
 */
export const getGenres = () => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/genres`;

    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}

/**
 * サブジャンル取得
 * @returns {{target, request: Promise}}
 */
export const getSubGenre = (genreId) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/genres/${genreId}/sub_genres`;

    return {
        target: EXCUEZ,
        request: client
            .get(endpoint)
            .then((subGenres)=>({
                subGenres,
                genreId
            }))
    }
}
