import { then, UiSpan } from '../hyp'
import { BootSize } from '../boot'

export class UiSpinner extends UiSpan {
  constructor() {
    super()
    this.and(then.addClasses('spinner-border', `spinner-border-${BootSize.SM}`))
  }
}
