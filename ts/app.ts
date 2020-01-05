import { then, styles, UiDiv } from './hyp'
import { UiBackgroundGroup } from './ui/BackgroundGroup'
import { UiNavbars } from './ui/Navbars'
import { UiMain } from './ui/Main'

export const app =
  new UiDiv()
    .and(then.append(
      new UiBackgroundGroup(),
      new UiDiv().and(
        then.setStyles(
          styles.flexRows,
          styles.full
        ),
        then.append(
          new UiNavbars(),
          new UiMain()
        )
      )
    ))

document.body.appendChild(app.element)
