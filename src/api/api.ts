import axios, { AxiosInstance } from 'axios'

export default class ApiClient {
    private client: AxiosInstance

    constructor(
        url: string
    ) {
        this.client = axios.create({
            baseURL: url,
            timeout: 5000,
        })
     }

    async getData(endpoint: string){
        const res = await this.client.get(endpoint)
        return res.data
    }

    async postData(endpoint: string, payload: object){
        const res = await this.client.post(endpoint, payload)
        return res.data
    }

    async patchData(endpoint: string, payload: object){
        const res = await this.client.patch(endpoint, payload)
        return res.data
    }
}