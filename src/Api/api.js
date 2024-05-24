import { useJsApiLoader } from "@react-google-maps/api";
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

export const driverDetails = {
    DRIVER_FRONT_URL: "/driver007_frontend/",
    SUCCESS_CODE: 200,
}

export const useGoogleMapLoader = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: process.env.RECT_APP_GOOGLE_MAP_ID,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    });

    return { isLoaded, loadError };
};