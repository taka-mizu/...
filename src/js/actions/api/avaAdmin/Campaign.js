import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

/**
 * キャンペーン作成
 * @param {string} name
 * @param {boolean} sponsored
 */

export const createCampaign = (account, name, sponsored) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts/${account.agency_id}/${account.advertiser_id}/campaigns`
    let postData = {
        name : name,
        sponsored : sponsored
    };
    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};