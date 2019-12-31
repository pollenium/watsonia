import { UiUlist, then } from '../hyp'
import { UiNavbarNavItem } from './NavbarNavItem'
import { UiIcon } from './Icon'
import { UiInternalAnchor } from './InternalAnchor'

export class UiNavbarNav extends UiUlist {
  constructor() {
    super()
    this
      .and(then.addClasses('navbar-nav', 'flex-row', 'ml-md-auto', 'd-md-flex'))
      .and(then.append(
        new UiNavbarNavItem()
          .and(then.append(
            new UiIcon()
              .and(then.addClasses('fas', 'fa-cog'))
          ))
      ))
      .and(then.append(
        new UiNavbarNavItem()
          .and(then.append(
            new UiInternalAnchor(['auth'])
              .and(then.append(
                new UiIcon()
                  .and(then.addClasses('fas', 'fa-user'))
              ))
          ))
      ))
  }
}
