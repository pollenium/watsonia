import { then, UiDiv } from '../hyp'
import { BootColor } from '../boot'

export class UiAlert extends UiDiv {
  constructor(bootColor: BootColor) {
    super()
    this.and(then.addClasses('alert', `alert-${bootColor}`, 'text-center'))
  }
}
