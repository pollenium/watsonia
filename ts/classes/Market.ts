import { Address } from 'pollenium-buttercup'
import { Token } from './Token'
import { RESOLUTION } from '../enums'

export class Market {

  private tokenPromises: {[key: number]: Promise<Token> } = {};
  private urlParts: Array<string>;
  private nameSlug: string;
  private imageUrl: string;

  constructor(
    public id: number,
    public name: string,
    public imageFileName: string,
    public address: Address
  ) {

  }

  getUrlParts() {
    if (this.urlParts) {
      return this.urlParts
    }
    this.urlParts = [
      'markets',
      this.id.toString(),
      this.getNameSlug()
    ]
    return this.urlParts
  }

  getNameSlug() {
    if (this.nameSlug) {
      return this.nameSlug
    }
    // TODO: Actually slugify
    this.nameSlug = this.name.split(' ').join('-')
    return this.nameSlug
  }

  fetchToken(resolution: RESOLUTION): Promise<Token> {
    if (this.tokenPromises[resolution]) {
      return this.tokenPromises[resolution]
    }

    this.tokenPromises[resolution] = new Promise(async (resolve, reject) => {
      const tokenAddress = await this.fetchTokenAddress(resolution)
      resolve(new Token(tokenAddress))
    })

    return this.tokenPromises[resolution]
  }

  getImageUrl() {
    if (this.imageUrl) {
      return this.imageUrl
    }
    this.imageUrl = `/media/market-images/${this.imageFileName}`
    return this.imageUrl
  }

  async fetchTokenAddress(resolution: RESOLUTION) {
    return Address.genNull()
  }
}
