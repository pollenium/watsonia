import { UiDiv, then } from '../hyp'
import { UiNavbarNav } from './NavbarNav'
import { UiInternalAnchor } from './InternalAnchor'

export class UiNavbar extends UiDiv {
  constructor() {
    super()
    this
      .and(then.addClasses('navbar', 'navbar-dark', 'bg-dark', 'sticky-top', 'text-light'))
      .and(then.append(
        new UiInternalAnchor([])
          .and(then.addClasses('navbar-brand'))
          .and(then.setText('Watsonia'))
      ))
      .and(then.append(
        new UiNavbarNav()
      ))
  }
}
