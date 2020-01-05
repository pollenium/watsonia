import { then, styles, UiDiv } from '../hyp'
import { UiMarket } from './Market'
import { markets } from '../markets'

export class UiMain extends UiDiv {
  constructor() {
    super()

    this.and(
      then.setStyle('overflow-y', 'auto'),
      then.append(
        new UiMarket(markets[0])
      )
    )
  }
}
