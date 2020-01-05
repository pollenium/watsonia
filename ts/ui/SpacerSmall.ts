import { then, UiDiv } from '../hyp'

export class UiSpacerSmall extends UiDiv {
  constructor() {
    super()
    this.and(then.setStyles({
      width: '8px',
      height: '8px'
    }))
  }
}
