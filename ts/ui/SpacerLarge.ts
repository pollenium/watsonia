import { then, UiDiv } from '../hyp'

export class UiSpacerLarge extends UiDiv {
  constructor() {
    super()
    this.and(then.setStyles({
      width: '18px',
      height: '18px'
    }))
  }
}
