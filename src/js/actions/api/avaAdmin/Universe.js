import qs from 'qs'
import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * Universe取得
 */
export function getUniverses ({limit = 100, startAt, endAt, agencyId, advertiserId, next, creativeFormatId}) {
    const params = qs.stringify({
        limit,
        startAt,
        endAt,
        agencyId,
        advertiserId,
        next,
        creativeFormatId
    })
    const endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/universe?${params}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}
