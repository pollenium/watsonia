import { Emitter } from './Emitter'
import { Address } from 'pollenium-buttercup'
import { Price } from '../classes/Price'
import { Vwaps } from '../interfaces/Vwaps'
import { Uint256 } from 'pollenium-buttercup'
import { priceMultiplierBignumber } from '../constants'
import Bignumber from 'bignumber.js'
import Bn from 'bn.js'

const simulatedDenom = Uint256.fromNumber(1)

export class Token {

  public vwapEmitter: Emitter<Vwaps> = new Emitter;

  /* TODO: remove */
  private simulatedVwapBignumber: Bignumber = new Bignumber(Math.random() * .95);

  constructor(private address: Address) {
    this.simulateVwaps()
  }

  /* TODO: remove */
  simulateVwaps() {
    setInterval(() => {

      const halfSpread = Math.random() * 0.01


      const buyyPriceNumerBn = new Bn(
        this.simulatedVwapBignumber
          .minus(halfSpread)
          .times(priceMultiplierBignumber)
          .decimalPlaces(0)
          .toString(10)
        )

      const sellPriceNumerBn = new Bn(
        this.simulatedVwapBignumber
          .plus(halfSpread)
          .times(priceMultiplierBignumber)
          .decimalPlaces(0)
          .toString(10)
        )

      const vwaps: Vwaps = {
        buyy: new Price(
          Uint256.fromBn(buyyPriceNumerBn),
          simulatedDenom
        ),
        sell: new Price(
          Uint256.fromBn(sellPriceNumerBn),
          simulatedDenom
        )
      }

      this.vwapEmitter.emit(vwaps)

      const step = (Math.random() - .5) * .05
      let simulatedVwapBignumber = this.simulatedVwapBignumber.plus(step)
      if (simulatedVwapBignumber.lt(.01)) {
        simulatedVwapBignumber = new Bignumber(.01)
      }
      if (simulatedVwapBignumber.gt(.99)) {
        simulatedVwapBignumber = new Bignumber(.99)
      }
      this.simulatedVwapBignumber = simulatedVwapBignumber
    }, 1000)
  }
}
