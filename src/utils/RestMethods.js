export default class restMethods {
    static baseURL = 'http://localhost:8080'

    static async invokeGET(resource, queryParams, headers) {
        queryParams = queryParams || []
        const queryString = queryParams.reduce((last, q, i) => last + `${i === 0 ? '?' : '&'}${q}`, '')

        const data = {
            method: 'GET',
            headers: Object.assign({}, headers),
        }
        const url = `${restMethods.baseURL}${resource}${queryString}`
        return await (await fetch(url, data)).json()
    }

    static async invokePUT(resource, body, headers) {
        const data = {
            method: 'PUT',
            mode: 'cors',
            body: body instanceof FormData ? body : JSON.stringify(body),
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        }
        const url = `${restMethods.baseURL}${resource}`
        return await fetch(url, data)
    }

    static async invokePOST(resource, body, headers) {
        const data = {
            method: 'POST',
            body: body instanceof FormData ? body : JSON.stringify(body),
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        }
        const url = `${restMethods.baseURL}${resource}`
        return await fetch(url, data)
    }

    static async invokeDELETE(resource, headers) {
        const data = {
            method: 'DELETE',
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        }
        const url = `${restMethods.baseURL}${resource}`
        return await fetch(url, data)
    }
}
