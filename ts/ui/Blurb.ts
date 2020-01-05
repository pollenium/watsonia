import { then, styles, UiDiv } from '../hyp'
import { UiLinearIcon } from './LinearIcon'

interface UiBlurbStruct {
  linearIconClassName: string,
  text: string
}

export class UiBlurb extends UiDiv {
  constructor(struct: UiBlurbStruct) {
    super()
    this.and(
      then.setStyles(styles.flexColumns),
      then.append(
        new UiDiv()
          .and(then.append(new UiLinearIcon(struct.linearIconClassName))),
        new UiDiv()
          .and(
            then.setText(struct.text),
            then.setStyles({
              paddingLeft: '8px'
            })
          )
      )
    )
  }
}
