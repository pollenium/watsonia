import { UiDiv, then } from './hyp'
import { UiNavbar } from './ui/Navbar'
import { UiMain } from './ui/Main'
import { navigation } from './navigation'


export const app =
  new UiDiv()
    .and(then.append(
      new UiNavbar(),
      new UiMain()
    ))
    .element

navigation.init()
