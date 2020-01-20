import { then, styles, UiDiv, UiHeading, UiForm, UiSpan } from '../hyp'
import { UiFormControlPassword } from './FormControlPassword'
import { UiFormControlText } from './FormControlText'
import { UiFormGroup } from './FormGroup'
import { UiBtn } from './Btn'
import { UiBlurbSpinner } from './BlurbSpinner'
import { UiInternalAnchor } from './InternalAnchor'
import { UiSpacerSmall } from './SpacerSmall'
import { UiSpacerLarge } from './SpacerLarge'
import { UiSpacerHuge } from './SpacerHuge'
import { UiBlurb } from './Blurb'
import { UiAuth, AuthState } from './Auth'
import { UiLinearIcon } from './LinearIcon'
import FileSaver from 'file-saver'
import { getTime } from '../utils'
import delay from 'delay'
import { Keystore } from '../classes/Keystore'

export class UiAuthCreate extends UiDiv {

  private password0: string = ''
  private password1: string = ''
  private nickname: string = ''
  private isSubmittable: boolean = false

  private uiForm: UiForm
  private uiFormGroupPassword0: UiFormGroup
  private uiFormGroupPassword1: UiFormGroup
  private uiBtn: UiBtn
  private uiCreating: UiDiv
  private uiCreated: UiDiv

  private keystore: Keystore

  constructor(private uiAuth: UiAuth) {
    super()

    this.and(
      then.setStyles(styles.container, styles.pad),
    )

    this.and(then.append(
      this.uiForm = new UiForm().and(
        then.append(
          this.uiFormGroupPassword0 = new UiFormGroup({
            labelText:  'Password:',
            helperText: 'Don\'t forget your password. There is no way to reset it.',
            uiFormControl:
              new UiFormControlPassword().and(
                (uiFormControlPassword) => {
                  uiFormControlPassword.valueSnowdrop.addHandle((password) => {
                    this.password0 = password
                    this.handleFormUpdate(false)
                  })
                }
              )
          }),
          new UiSpacerLarge,
          this.uiFormGroupPassword1 = new UiFormGroup({
            labelText:  'Repeat Password:',
            uiFormControl: new UiFormControlPassword().and(
              (uiFormControlPassword) => {
                uiFormControlPassword.valueSnowdrop.addHandle((password) => {
                  this.password1 = password
                  this.handleFormUpdate(false)
                })
              }
            )
          }),
          new UiSpacerLarge,
          new UiFormGroup({
            labelText:  'Account Nickname (Optional):',
            uiFormControl: new UiFormControlText().and(
              (uiFormControlText) => {
                uiFormControlText.setUiPrepend(
                  new UiLinearIcon('label')
                )
                uiFormControlText.valueSnowdrop.addHandle((nickname) => {
                  this.nickname = nickname
                }),
                uiFormControlText.setValue('First Account')
              }
            ),
            helperText: 'This is only used to differentaite your logins when you have multiple accounts'
          }),
          new UiSpacerHuge,
          this.uiBtn = new UiBtn({
            isDisabled: true,
            linearIconClassName: 'user',
            text: 'Create Account'
          })
        ),
        then.onDom('submit', (event) => {
          event.preventDefault()
          this.onSubmit()
        })
      )
    ))

    this.and(then.append(
      this.uiCreating = new UiDiv().and(
        then.setIsHidden(true),
        then.append(
          new UiBlurbSpinner('Creating your account. This may take a few seconds.')
        )
      )
    ))

    this.and(then.append(
      this.uiCreated = new UiDiv().and(
        then.setIsHidden(true),
        then.append(
          new UiBlurb({
            linearIconClassName: 'user',
            text: 'Account Created!\r\n'
          }),
          new UiSpacerSmall(),
          new UiBlurb({
            linearIconClassName: 'download',
            text: 'A download should have been started. If not, please download your login file before continuing to the login page.'
          }),
          new UiSpacerLarge(),
          new UiDiv().and(
            then.setStyle('text-align', 'center'),
            then.append(
              new UiBtn({
                linearIconClassName: 'file-lock',
                text: 'Download Login File'
              }).and(
                then.setStyle('margin-right', '8px'),
                then.onClick((uiBtn) => {
                  this.keystore.download()
                })
              ),
              new UiBtn({
                linearIconClassName: 'lock',
                text: 'Proceed to Login'
              }).and(
                then.onClick((uiBtn) => {
                  this.uiAuth.setAuthState(AuthState.LOGIN)
                })
              )
            )
          )
        )
      )
    ))

  }

  setIsSubmittable(isSubmittable: boolean) {
    this.isSubmittable = isSubmittable
    this.uiBtn.setIsDisabled(!isSubmittable)
  }

  handleFormUpdate(isSubmit: boolean = false) {

    this.setIsSubmittable(true)

    if (this.password0.length === 0) {
      this.uiFormGroupPassword0.setErrorMessages(isSubmit, [
        'Password required'
      ])
      this.setIsSubmittable(false)
    } else {
      this.uiFormGroupPassword0.clearErrorMessages()
    }

    if (this.password1.length === 0) {
      this.uiFormGroupPassword1.setErrorMessages(isSubmit, [
        'Password repeat required'
      ])
      this.setIsSubmittable(false)
    } else {
      if (this.password0 !== this.password1) {
        this.uiFormGroupPassword1.setErrorMessages(isSubmit, [
          'Passwords do not match'
        ])
        this.setIsSubmittable(false)
      } else {
        this.uiFormGroupPassword1.clearErrorMessages()
      }
    }


  }


  async onSubmit() {

    this.handleFormUpdate(true)

    if (!this.isSubmittable) {
      return
    }

    this.uiForm.and(then.setIsHidden(true))
    this.uiCreating.and(then.setIsHidden(false))

    const startedAt = getTime()

    this.keystore = await Keystore.generate({
      nickname: this.nickname,
      password: this.password0
    })

    const ellapsed = getTime()

    if (ellapsed < 3000) {
      await delay(3000 - ellapsed)
    }

    this.uiCreating.and(then.setIsHidden(true))
    this.uiCreated.and(then.setIsHidden(false))
    this.keystore.download()

  }

}
