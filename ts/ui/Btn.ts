import { then, UiButton } from '../hyp'
import { BootColor, BootSize} from '../boot'

export class UiBtn extends UiButton {
  constructor(bootColor: BootColor, bootSize: BootSize) {
    super()
    this.and(then.addClasses('btn', `btn-${bootColor}`, `btn-${bootSize}`))
  }

  setIsDisabled(isDisabled: boolean) {
    if (isDisabled) {
      this.and(then.setAttribute('disabled', 'true'))
    } else {
      this.and(then.removeAttributes('disabled'))
    }
  }
}
