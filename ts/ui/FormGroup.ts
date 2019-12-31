import { then, UiDiv, UiLabel, Ui } from '../hyp'

export interface UiFormGroupStruct {
  labelText?:   string;
  helperText?:  string;
  ui:      Ui<HTMLElement>;
}

export class UiFormGroup extends UiDiv {
  constructor(struct: UiFormGroupStruct) {
    super()

    if (struct.labelText) {
      this.and(then.append(
        new UiLabel().and(then.setText(struct.labelText))
      ))
    }

    this.and(then.append(struct.ui))

    if(struct.helperText) {
      this.and(then.append(
        new UiDiv()
          .and(then.addClasses('form-text', 'text-muted'))
          .and(then.setText(struct.helperText))
      ))
    }
  }

}
