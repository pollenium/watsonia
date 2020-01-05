import { then, UiDiv } from '../hyp'

export class UiSpacerHuge extends UiDiv {
  constructor() {
    super()
    this.and(then.setStyles({
      width: '24px',
      height: '24px'
    }))
  }
}
