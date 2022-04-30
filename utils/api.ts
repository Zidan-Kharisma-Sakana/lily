import Axios, { AxiosInstance } from "axios";

let urls = {
    test: `http://localhost:8000`,
    development: 'http://localhost:8000/',
    production: 'https://your-production-url.com/'
}
const api: AxiosInstance = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export default api;