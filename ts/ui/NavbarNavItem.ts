import { then, UiLI } from '../hyp'

export class UiNavbarNavItem extends UiLI {
  constructor() {
    super()
    this
      .and(then.addClasses('nav-item'))
      .and(then.setStyle('margin-left', '5px'))
  }
}
