import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000",
})

const HTTPRequest = (config: AxiosRequestConfig) => {
    instance.request(config).then((req: any, rsp?: AxiosResponse) => {
        return rsp
    })
}

export const Request = (url: string, data?: Object, method: string = 'POST') => {
    let config: AxiosRequestConfig = {
        url: url,
        method: method,
        data: data,
    }
    return HTTPRequest(config);
}