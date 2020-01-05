import { then, styles, UiDiv } from '../hyp'
import { UiLinearIcon } from './LinearIcon'

export class UiNavbarPrimary extends UiDiv {
  constructor() {
    super()
    this.and(
      then.setStyles(
        styles.bgDark,
        {
          fontSize: '24px'
        }
      ),
      then.append(
        new UiDiv().and(
          then.setStyles(
            styles.flexColumns,
            styles.pad,
            styles.container
          ),
          then.append(
            new UiDiv().and(
              then.setStyles({
                width: '100px'
              })
            ),
            new UiDiv().and(
              then.setStyles(
                styles.textCenter,
                {
                  flexGrow: 1
                }
              ),
              then.setText('Watsonia')
            ),
            new UiDiv().and(
              then.setStyles(
                styles.textRight,
                {
                  width: '100px'
                }
              ),
              then.append(
                new UiLinearIcon('cog'),
                new UiLinearIcon('user')
                  .and(then.setStyles(
                    styles.padSmallLeft
                  ))
              )
            )
          )
        )
      )
    )
  }
}
