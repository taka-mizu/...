import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'

/**
 * チャンネル全件取得
 * @returns {{target, request: Promise}}
 */
export const getChannels = () => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/channels`;

    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
}
