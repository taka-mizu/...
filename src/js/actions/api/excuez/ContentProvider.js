import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * コンテンツホルダ全件取得
 * @returns {{target, request: Promise}}
 */
export const getContentProviders = () => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/content_providers`;
    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}
