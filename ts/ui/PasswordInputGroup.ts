import { then, UiDiv, UiSpan } from '../hyp'
import { UiIcon } from './Icon'
import { UiFormControl } from './FormControl'

export class UiPasswordInputGroup extends UiDiv {

  private isPasswordVisible = false
  private uiIcon: UiIcon
  public  uiFormControl: UiFormControl

  constructor() {
    super()

    this.and(then.addClasses('input-group'))

    this.and(then.append(
      this.uiFormControl = new UiFormControl().and(then.setAttribute('type', 'password')),
    ))

    this.and(then.append(
      new UiDiv()
        .and(then.addClasses('input-group-append'))
        .and(then.setStyle('cursor', 'pointer'))
        .and(then.append(
          new UiSpan()
            .and(then.addClasses('input-group-text'))
            .and(then.append(
              this.uiIcon = new UiIcon().and(then.addClasses('fas', 'fa-eye'))
            ))
            .and((uiSpan) => {
              uiSpan.element.addEventListener('click', this.toggleIsPasswordVisible.bind(this))
            })
        ))
    ))
  }

  toggleIsPasswordVisible() {
    this.isPasswordVisible = !this.isPasswordVisible
    if (this.isPasswordVisible) {
      this.uiIcon
        .and(then.removeClasses('fa-eye'))
        .and(then.addClasses('fa-eye-slash'))

      this.uiFormControl.and(then.setAttribute('type', 'text'))
    } else {
      this.uiIcon
        .and(then.removeClasses('fa-eye-slash'))
        .and(then.addClasses('fa-eye'))

      this.uiFormControl.and(then.setAttribute('type', 'password'))
    }
  }
}
