import * as client from './../ApiClient'
import * as Settings from '../../../env'
import { AVA_ADMIN } from '../../../constants/ApiTarget'

export const getAccounts = (next = "") => {
    let params = (typeof next !== "undefined" && next !== "") ? `?next=${next}` : "";
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts${params}`

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

export const getAccountsAll = () => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts?limit=-1`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

export const getAgencyAll = () => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/agencies?limit=1000`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

export function getAgencyById(id) {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/agencies/${id}`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}

export const getAdvertiserAll = () => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/advertisers?limit=1000`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
};

export function getAdvertiserById(id) {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/advertisers/${id}`;

    return {
        target: AVA_ADMIN,
        request: client.get(endpoint)
    }
}

export const createAccount = (agency_id, advertiser_id) => {
    let endpoint = `http://${Settings.AVA_ADMIN_API_HOST}/accounts`;
    let postData = {
        agencyId: agency_id,
        advertiserId: advertiser_id
    };

    return {
        target: AVA_ADMIN,
        request: client.post(endpoint, postData)
    }
};
