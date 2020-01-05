import { Uint256 } from 'pollenium-buttercup'
import Bignumber from 'bignumber.js'
import { priceMultiplierBignumber } from '../constants'

export class Price {

  private priceBignumber: Bignumber

  constructor(public priceNumer: Uint256, public priceDenom: Uint256) {}

  getPriceBignumber(): Bignumber {
    const priceNumerBignumber = new Bignumber(this.priceNumer.getBn().toString(10))
    const priceDenomBignumber = new Bignumber(this.priceDenom.getBn().toString(10))
    this.priceBignumber = priceNumerBignumber.div(priceDenomBignumber)
    return this.priceBignumber
  }

  getPretty(): string {
    const priceBignumber = this.getPriceBignumber()
    return priceBignumber.div(priceMultiplierBignumber).times(100).toFixed(2)
  }
}
