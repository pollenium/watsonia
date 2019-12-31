import { then, UiDiv, UiHeading, UiForm, UiSpan } from '../hyp'
import { UiFormControl } from './FormControl'
import { UiPasswordInputGroup } from './PasswordInputGroup'
import { UiFormGroup } from './FormGroup'
import { UiBtn } from './Btn'
import { UiAlert } from './Alert'
import { UiSpinner } from './Spinner'
import { UiInternalAnchor } from './InternalAnchor'
import keythereum from 'keythereum'
import FileSaver from 'file-saver'
import { BootSize, BootColor } from '../boot'

export class UiPageAuthCreate extends UiDiv {

  private password0: string = ''
  private password1: string = ''
  private isSubmittable: boolean = false

  private uiForm: UiForm
  private uiBtn: UiBtn
  private uiCreating: UiDiv
  private uiCreated: UiDiv

  private keystoreBlob: Blob

  constructor() {
    super()

    this.and(then.append(
      new UiHeading('h3')
        .and(then.setText('Create a New Account'))
    ))

    this.and(then.append(
      this.uiForm = new UiForm()
        .and(then.append(
          new UiFormGroup({
            labelText:  'Password',
            helperText: 'Don\'t forget your password. There is no way to reset it.',
            ui: new UiPasswordInputGroup().and((passwordInputGroup) => {
              passwordInputGroup.uiFormControl.element.addEventListener('input', () => {
                this.password0 = passwordInputGroup.uiFormControl.element.value
                this.onPasswordInput()
              })
            })
          })
        ))
        .and(then.append(
          new UiFormGroup({
            labelText:  'Repeat Password',
            ui: new UiPasswordInputGroup().and((passwordInputGroup) => {
              passwordInputGroup.uiFormControl.element.addEventListener('input', () => {
                this.password1 = passwordInputGroup.uiFormControl.element.value
                this.onPasswordInput()
              })
            })
          })
        ))
        .and(then.append(
          this.uiBtn = new UiBtn(BootColor.PRIMARY, BootSize.MD)
            .and(then.setText('Create Account'))
            .and(then.setAttribute('disabled', 'true'))
        ))
        .and((uiForm) => {
          uiForm.element.addEventListener('submit', (event) => {
            event.preventDefault()
            this.onSubmit()
          })
        })
    ))

    this.and(then.append(
      this.uiCreating = new UiDiv()
        .and(then.setIsHidden(true))
        .and(then.append(
          new UiAlert(BootColor.INFO)
            .and(then.append(
              new UiSpinner(),
              new UiSpan().and(then.setText('Creating your account. This may take a few seconds.'))
            ))
        ))
    ))

    this.and(then.append(
      this.uiCreating = new UiDiv()
        .and(then.setIsHidden(true))
        .and(then.append(
          new UiAlert(BootColor.SUCCESS)
            .and(then.append(
              new UiHeading('h6').and(then.setText('Account Created!')),
              new UiSpan().and(then.setText(
                'A download should have been started. If not, please download your login file before continuing to the login page.'
              ))
            ))
        ))
        .and(then.append(
          new UiDiv()
            .and(then.setStyle('text-align', 'center'))
            .and(then.append(
              new UiBtn(BootColor.LIGHT, BootSize.MD)
                .and(then.setText('Download Login File'))
                .and(then.setStyle('margin-right', '5px'))
                .and((uiBtn) => {
                  uiBtn.element.addEventListener('click', () => {
                    this.download()
                  })
                })
            ))
            .and(then.append(
              new UiInternalAnchor(['auth', 'login'])
                .and(then.setText('Proceed to Login'))
                .and(then.addClasses('btn', `btn-${BootColor.PRIMARY}`, `btn-${BootSize.MD}`))
            ))
        ))

    ))

  }

  setIsSubmittable(isSubmittable: boolean) {
    this.isSubmittable = isSubmittable
    this.uiBtn.setIsDisabled(!isSubmittable)
  }

  updateIsSubmittable() {

    if (this.password0.length === 0) {
      this.setIsSubmittable(false)
      return
    }

    if (this.password0 !== this.password1) {
      this.setIsSubmittable(false)
      return
    }

    this.setIsSubmittable(true)

  }

  onPasswordInput() {
    this.updateIsSubmittable()
  }

  async onSubmit() {

    this.updateIsSubmittable()

    if (!this.isSubmittable) {
      return
    }

    this.uiForm.and(then.setIsHidden(true))
    this.uiCreating.and(then.setIsHidden(false))

    const dk = await keythereum.create()
    const keystorePojo = await keythereum.dump('password', dk.privateKey, dk.salt, dk.iv)
    this.keystoreBlob = new Blob([JSON.stringify(keystorePojo, null, 2)], { type: "text/plain;charset=utf-8"})
    this.download()

    this.uiCreating.and(then.setIsHidden(false))
    this.uiCreated.and(then.setIsHidden(true))
  }

  download() {
    FileSaver.saveAs(this.keystoreBlob, "watsonia-login.txt")
  }


}
