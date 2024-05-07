import axios from "axios"

export const makeApiCall = async (options) => {
    try {
        const res = await axios({
            method: options.method,
            url: options.url,
            headers: options.headers,
            data: options.data,
            params: options.params,
        })

        const returnData = {
            status: res.status,
            data: res.data,
        }
        return returnData;
    } catch (error) {
        return error;
    }
}