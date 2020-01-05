import { then, styles, UiDiv, UiImg } from '../hyp'
import { Market } from '../classes/Market'
import { UiNavbarOptionGroup } from './NavbarOptionGroup'
import { UiAuth } from './Auth'
import { UiDivider } from './Divider'

enum Section {
  PRICES = 'prices',
  MARKET = 'market',
  TRADE  = 'trade'
}

export class UiMarket extends UiDiv {

  private uiSectionWrapper: UiDiv = new UiDiv()

  constructor(market: Market) {
    super()
    this.and(
      then.setStyles(
        styles.container,
        styles.bgMedium,
        {
          minHeight: '100%'
        }
      ),
      then.append(
        new UiDiv()
          .and(
            then.append(
              new UiImg()
                .and(then.setStyles(styles.fullWidth))
                .and(then.setAttribute('src', market.getImageUrl()))
            )
          )
      ),
      then.append(
        new UiNavbarOptionGroup().and((uiOptionGroup) => {
          uiOptionGroup.addOptions({
            id: Section.PRICES,
            text: 'Prices',
            onSelect: () => {
              this.setUiSection(new UiDiv().and(then.setText('Prices')))
            },
            isSelected: true
          },{
            id: Section.MARKET,
            text: 'Market',
            onSelect: () => {
              this.setUiSection(new UiDiv().and(then.setText('Market')))
            }
          }, {
            id: Section.TRADE,
            text: 'Trade',
            onSelect: () => {
              this.setUiSection(new UiDiv().and(then.setText('Trade')))
            }
          })
        }),
        new UiDivider(),
        this.uiSectionWrapper
      )
    )
  }

  setUiSection(uiSection: UiDiv) {
    this.uiSectionWrapper.and(
      then.empty,
      then.append(uiSection)
    )
  }
}
