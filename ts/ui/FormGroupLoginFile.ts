import { UiFormGroup } from './FormGroup'
import { UiFormControlFile } from './FormControlFile'
import { UiLinearIcon } from './LinearIcon'
import { Emitter } from '../classes/Emitter'
import { Keystore } from '../classes/Keystore'


export class UiFormGroupLoginFile extends UiFormGroup {

  private uiFormControlFile: UiFormControlFile
  public keystoreEmitter: Emitter<Keystore> = new Emitter<Keystore>()

  constructor() {
    super({
      labelText: 'Login File:',
      helperText: 'It should be named something like "Watsonia Login - Nickname.txt"'
    })

    this.setUiFormControl(
      this.uiFormControlFile = new UiFormControlFile().and((uiFormControlFile) => {
        uiFormControlFile.setUiPrepend(
          new UiLinearIcon('file-lock')
        )
        uiFormControlFile.fileEmitter.on(this.onFile.bind(this))
      })
    )
  }
  private async onFile(file: File) {
    await Keystore.fromFile(file).then((keystore) => {
      this.uiFormControlFile.setText(keystore.getName())
      this.keystoreEmitter.emit(keystore)
      this.clearErrorMessages()
    }).catch(() => {
      this.uiFormControlFile.setText(file.name)
      this.setErrorMessages(true, ['Invalid login file'])
    })
  }

}
