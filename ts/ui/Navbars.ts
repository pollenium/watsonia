import { then, styles, UiDiv } from '../hyp'
import { UiNavbarPrimary } from './NavbarPrimary'
import { UiNavbarMarkets } from './NavbarMarkets'
import { markets } from '../markets'

export class UiNavbars extends UiDiv {
  constructor() {
    super()
    this.and(
      then.setStyles(
        styles.positionRelative,
      ),
      then.append(
        new UiNavbarPrimary,
        new UiNavbarMarkets,
        new UiDiv().and(
          then.setStyles(
            styles.positionAbsolute,
            styles.shadow,
            {
              bottom: '0',
              left: '-4px',
              right: '-4px',
              height: '12px'
            }
          )
        )
      )
    )
  }
}
