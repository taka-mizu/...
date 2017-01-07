import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { EXCUEZ } from '../../../constants/ApiTarget'
import { CuepointHelper } from '../../../reducer/helpers/CuepointHelper'

export const registAdspotsToCuepoint = (cue, adSpotsHash, adspots, isRepeated) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/cuepoints/${cue.cuePointId}/adspots`;

    let postData = {
        beforeAdSpotsHash: adSpotsHash,
        adSpots: CuepointHelper.cueAdspots(cue, adspots, isRepeated, false)
    };

    return {
        target: EXCUEZ,
        request: client.post(endpoint, postData)
    }
};


export const fetchCuepointAdspots = (cuepointId) => {
    let endpoint = `http://${Settings.EXCUEZ_INTERNAL_API_HOST}/cuepoints/${cuepointId}/adspots`;
    return {
        target: EXCUEZ,
        request: client.get(endpoint)
    }
};