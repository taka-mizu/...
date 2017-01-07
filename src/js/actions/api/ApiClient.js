import client from 'superagent';
import $ from 'jquery';

/**
 *
 *
 * @param endpoint
 * @returns {Promise}
 */
export const get = (endpoint) => {
    return new Promise(
        (resolve, reject)=> {
            client.get(endpoint)
                .end((err, res)=> {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(res.text));
                    }
                });
        }
    )
}

// TODO : superagentでファイルアップロードできることを検証したらjquery自体の依存関係をはずす
/**
 *
 * @param endpoint
 * @param formData
 * @param headers
 * @returns {Promise}
 */
export const upload = (endpoint, formData, headers) => {
    return new Promise(
        (resolve, reject)=> {
            $.ajax({
                url: endpoint,
                type: "POST",
                data: formData,
                headers: headers,
                processData: false,
                contentType: false,
                success : function(res) {
                    resolve(res)
                },
                error : function(err) {
                    reject(err)
                },
                timeout : 300000
            });
        }
    )
}

/**
 * 指定したEndpointにpostData.toJsonをPOSTします。
 *
 * @param endpoint : String
 * @param postData : Object
 * @returns {Promise}
 */
export const post = (endpoint, postData) => {
    return new Promise(
        (resolve, reject)=> {
            $.ajax({
                url: endpoint,
                type: "POST",
                data: JSON.stringify(postData),
                dataType :'JSON',
                contentType: 'application/json',
                processData: false,
                success : function(res) {
                    resolve(res)
                },
                error : function(err) {
                    reject(err)
                }
            });
        }
    )
}

/**
 * 指定したEndpointにpostData.toJsonをPUTします。
 *
 * @param endpoint : String
 * @param postData : Object
 * @returns {Promise}
 */
export const put = (endpoint, postData) => {
    return new Promise(
        (resolve, reject)=> {
            $.ajax({
                url: endpoint,
                type: "PUT",
                data: JSON.stringify(postData),
                dataType :'JSON',
                contentType: 'application/json',
                processData: false,
                success : function(res) {
                    resolve(res)
                },
                error : function(err) {
                    reject(err)
                }
            });
        }
    )
}

/**
 * 指定したEndpointにpostData.toJsonをDELETEします。
 *
 * @param endpoint : String
 * @param postData : Object
 * @returns {Promise}
 */
export const remove = (endpoint, postData) => {
    return new Promise(
        (resolve, reject)=> {
            $.ajax({
                url: endpoint,
                type: "DELETE",
                data: JSON.stringify(postData),
                dataType :'JSON',
                contentType: 'application/json',
                processData: false,
                success : function(res) {
                    resolve(res)
                },
                error : function(err) {
                    reject(err)
                }
            });
        }
    )
}
