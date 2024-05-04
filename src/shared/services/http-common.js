/**  axios default configs */
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
/**
 * Axios instance
 * @summary http axios instance creation with default configs
 * @type {AxiosInstance}
 *
 */

const http = axios.create({
    baseURL:'http://localhost:3000/api/v1',
    headers: { 'Content-type': 'application/json' }
});

export default http;
