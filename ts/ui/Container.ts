import { then, UiDiv } from '../hyp'

export class UiContainer extends UiDiv {
  constructor() {
    super()
    this.and(then.addClasses('container'))
  }
}
