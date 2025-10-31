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

    async getData<T>(endpoint: string): Promise<T> {
        const res = await this.client.get(endpoint)
        return res.data
    }

    async postData<T>(endpoint: string, data: object): Promise<T> {
        const res = await this.client.post(endpoint, data)
        return res.data
    }

    async patchData<T>(endpoint: string, data: object): Promise<T> {
        const res = await this.client.patch(endpoint, data)
        return res.data
    }
}