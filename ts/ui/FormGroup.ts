import { then, styles, UiDiv, UiLabel, UiSpan, Ui } from '../hyp'
import { UiLinearIcon } from './LinearIcon'
import { UiSpacerSmall } from './SpacerSmall'
import { UiBlurb } from './Blurb'
import { UiFormControl } from './FormControl'

export interface UiFormGroupStruct {
  labelText?:        string;
  helperText?:       string;
  uiFormControl?:    UiFormControl;
}

export class UiFormGroup extends UiDiv {

  private uiFormControlWrapper: UiDiv
  private uiErrorsWrapper: UiDiv
  private isTouched: boolean = false

  constructor(private struct: UiFormGroupStruct) {
    super()

    if (struct.labelText) {
      this.and(then.append(
        new UiLabel().and(then.setText(struct.labelText))
      ))
    }

    this.and(
      then.append(
        this.uiFormControlWrapper = new UiDiv(),
        this.uiErrorsWrapper = new UiDiv()
      )
    )

    if (struct.uiFormControl) {
      this.setUiFormControl(struct.uiFormControl)
    }

    if(struct.helperText) {
      this.and(then.append(
        new UiSpacerSmall,
        new UiBlurb({
          linearIconClassName: 'bubble',
          text: struct.helperText
        }).and(then.setStyles(styles.textMuted))
      ))
    }

  }

  setUiFormControl(uiFormControl: UiFormControl) {
    this.uiFormControlWrapper.and(
      then.empty,
      then.append(uiFormControl)
    )

    uiFormControl.valueEmitter.on((value) => {
      this.isTouched = true
    })
  }

  setErrorMessages(isBypassTouchRequirement: boolean, errorMessages: Array<string>) {
    this.uiErrorsWrapper.and(then.empty)

    if (errorMessages.length === 0) {
      return
    }

    if(!isBypassTouchRequirement && !this.isTouched) {
      return
    }

    errorMessages.forEach((errorMessage, index) => {
      this.uiErrorsWrapper.and(then.append(
        new UiSpacerSmall,
        new UiBlurb({
          text: errorMessage,
          linearIconClassName: 'warning'
        }).and(
          then.setStyles({
            color: '#cc0000'
          })
        ),
      ))
    })
  }

  clearErrorMessages() {
    this.uiErrorsWrapper.and(then.empty)
  }

}
