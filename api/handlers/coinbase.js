import { RESTDataSource } from 'apollo-datasource-rest'

// sample RESTDataSource using the Coinbase API
export default class Coinbase extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.coinbase.com/v2/'
    }
    async getPrice(currency) {
        return this.get(`prices/spot?currency=${currency}`)
    }
}