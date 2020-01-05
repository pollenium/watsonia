import { then, styles, UiInput } from '../hyp'
import { UiFormControl } from './FormControl'
import { Emitter } from '../classes/Emitter'
import { UiLinearIcon } from './LinearIcon'

export class UiFormControlText extends UiFormControl {

  private isVisible: boolean = false

  constructor() {
    super()

    const uiInput = new UiInput().and(
      then.setAttribute('type', 'text'),
    )

    this.setUiView(uiInput)
    this.setUiInput(uiInput)

  }

}
