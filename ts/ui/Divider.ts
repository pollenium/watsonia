import { then, styles, UiDiv } from '../hyp'

export class UiDivider extends UiDiv {
  constructor() {
    super()
    this.and(
      then.setStyles(styles.borderTop)
    )
  }
}
