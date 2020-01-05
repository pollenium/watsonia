import { then, styles, UiDiv, UiHeading, UiForm, UiSpan } from '../hyp'
import { UiFormGroupLoginFile } from './FormGroupLoginFile'
import { UiFormControlPassword } from './FormControlPassword'
import { UiFormGroup } from './FormGroup'
import { UiBtn } from './Btn'
import { UiBlurbSpinner } from './BlurbSpinner'
import { UiInternalAnchor } from './InternalAnchor'
import { UiAlert } from './Alert'
import { UiSpacerSmall } from './SpacerSmall'
import { UiSpacerLarge } from './SpacerLarge'
import { UiSpacerHuge } from './SpacerHuge'
import { UiBlurb } from './Blurb'
import { UiAuth, AuthState } from './Auth'
import delay from 'delay'
import { Keystore } from '../classes/Keystore'
import { getTime, waitUntil } from '../utils'

export class UiAuthLogin extends UiDiv {

  private password: string = ''
  private keystore: Keystore

  private isSubmittable: boolean = false

  private uiForm: UiForm
  private uiBtn: UiBtn
  private uiDecrypting: UiDiv
  private uiComplete: UiDiv
  private uiFormGroupLoginFile: UiFormGroup
  private uiFormGroupPassword: UiFormGroup

  constructor(private uiAuth: UiAuth) {
    super()

    this.and(
      then.setStyles(styles.container, styles.pad),
    )

    this.and(then.append(
      this.uiForm = new UiForm().and(
        then.onDom('submit', (event) => {
          event.preventDefault()
          this.onSubmit()
        }),
        then.append(
          this.uiFormGroupLoginFile = new UiFormGroupLoginFile().and(
            (uiFormControlLoginFile) => {
              uiFormControlLoginFile.keystoreEmitter.on((keystore) => {
                this.keystore = keystore
                this.uiFormGroupLoginFile.clearErrorMessages()
                this.handleFormUpdate()
              })
            }
          ),
          new UiSpacerLarge,
          this.uiFormGroupPassword = new UiFormGroup({
            labelText:  'Password:',
            uiFormControl: new UiFormControlPassword().and((uiFormControlPassword) => {
              uiFormControlPassword.valueEmitter.on((password) => {
                this.password = password
                this.handleFormUpdate()
              })
            })
          }),
          new UiSpacerHuge,
          this.uiBtn = new UiBtn({
            isDisabled: true,
            linearIconClassName: 'user',
            text: 'Login'
          })
        )
      ),
    ))

    this.and(then.append(
      this.uiDecrypting = new UiDiv().and(
        then.setIsHidden(true),
        then.append(
          new UiBlurbSpinner('Logging in. This may take a few seconds')
        )
      )
    ))

    this.and(then.append(
      this.uiComplete = new UiDiv()
        .and(then.setIsHidden(true))
        .and(then.append(
          new UiBlurb({
            linearIconClassName: 'user',
            text: 'Login Successful!'
          })
        ))

    ))

  }

  setIsSubmittable(isSubmittable: boolean) {
    this.isSubmittable = isSubmittable
    this.uiBtn.setIsDisabled(!isSubmittable)
  }

  handleFormUpdate(isSubmit: boolean = false) {

    this.setIsSubmittable(true)

    if (!this.keystore) {
      this.uiFormGroupLoginFile.setErrorMessages(isSubmit, [
        'Login File Required'
      ])
      this.setIsSubmittable(false)
    }

    if (this.password.length === 0) {
      this.uiFormGroupPassword.setErrorMessages(isSubmit, [
        'Password Required'
      ])
      this.setIsSubmittable(false)
    } else {
      this.uiFormGroupPassword.clearErrorMessages()
    }

  }

  async onSubmit() {

    this.handleFormUpdate()

    if (!this.isSubmittable) {
      return
    }

    this.uiForm.and(then.setIsHidden(true))
    this.uiDecrypting.and(then.setIsHidden(false))

    const startedAt = getTime()

    const keypair = await this.keystore.fetchKeypair(this.password)
      .then(async () => {
        await waitUntil(startedAt + 3000)

        this.uiDecrypting.and(then.setIsHidden(true))
        this.uiComplete.and(then.setIsHidden(false))
      }).catch((error) => {
        this.uiFormGroupPassword.setErrorMessages(true, [
          'Login failed. Are you sure the password is correct?'
        ])
        this.uiForm.and(then.setIsHidden(false))
        this.uiDecrypting.and(then.setIsHidden(true))
      })

  }


}
