import { then, UiInput } from '../hyp'

export class UiFormControl extends UiInput {
  constructor() {
    super()
    this.and(then.addClasses('form-control'))
  }
}
