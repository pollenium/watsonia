import { then, styles, UiDiv } from '../hyp'
import { UiLinearIcon } from './LinearIcon'
import { UiSpinner } from './Spinner'

export class UiBlurbSpinner extends UiDiv {
  constructor(text: string) {
    super()
    this.and(
      then.setStyles(styles.flexColumns),
      then.append(
        new UiDiv()
          .and(then.append(new UiSpinner)),
        new UiDiv()
          .and(
            then.setText(text),
            then.setStyles({
              paddingLeft: '8px'
            })
          )
      )
    )
  }
}
