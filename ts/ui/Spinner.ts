import { then, styles } from '../hyp'
import { UiLinearIcon } from './LinearIcon'

export class UiSpinner extends UiLinearIcon {
  constructor() {
    super('sync')
    this.and(then.setStyles(styles.spin))
  }
}
