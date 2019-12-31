import { then, UiDiv } from '../hyp'

export class UiPageUnknown extends UiDiv {
  constructor() {
    super()
    this.and(then.setText('404'))
  }
}
