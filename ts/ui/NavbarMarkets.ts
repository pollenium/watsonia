import { then, styles, UiDiv } from '../hyp'
import { UiNavbarOptionGroup } from './NavbarOptionGroup'
import { markets } from '../markets'

export class UiNavbarMarkets extends UiNavbarOptionGroup {
  constructor() {
    super()
    this.and(
      then.setStyles(styles.bgMedium)
    )

    markets.forEach((market) => {
      this.addOption({
        text: market.name,
        isSelected: market.id === 0
      })
    })
  }
}
