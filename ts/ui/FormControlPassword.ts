import { then, styles, UiInput } from '../hyp'
import { UiFormControl } from './FormControl'
import { UiLinearIcon } from './LinearIcon'

export class UiFormControlPassword extends UiFormControl {

  private isVisible: boolean = false

  constructor() {
    super()

    const uiInput = new UiInput().and(
      then.setAttribute('type', 'password'),
    )


    this.setUiView(uiInput)
    this.setUiInput(uiInput)

    this.setUiPrepend(
      new UiLinearIcon('lock')
    )

    this.setUiAppend(new UiLinearIcon(this.getLinearIconClassName()).and(
      then.setStyles(styles.cursorPointer),
      (uiLinearIcon) => {
        uiLinearIcon.and(
          then.onClick(() => {
            this.isVisible = !this.isVisible
            uiLinearIcon.setClassName(this.getLinearIconClassName())
            uiInput.and(
              then.setAttribute('type', this.isVisible ? 'text' : 'password')
            )
          })
        )
      }
    ))

  }

  getLinearIconClassName() {
    return this.isVisible ? 'eye' : 'eye-crossed'
  }

}
