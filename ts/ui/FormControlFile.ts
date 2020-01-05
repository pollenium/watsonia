import { then, styles, UiInput, UiDiv } from '../hyp'
import { UiFormControl } from './FormControl'
import { UiLinearIcon } from './LinearIcon'
import { Emitter } from '../classes/Emitter'

export class UiFormControlFile extends UiFormControl {

  private uiTextWrapper: UiDiv
  public fileEmitter: Emitter<File> = new Emitter<File>()

  constructor() {
    super()

    const uiFileInput = new UiInput().and(
      then.setAttribute('type', 'file'),
      then.setStyles({
        opacity: 0
      }),
      then.onDom('input', async (event) => {
        if (!event.target.files || event.target.files.length == 0) {
          return
        }
        this.fileEmitter.emit(event.target.files[0])
      })
    )

    const uiView = new UiDiv().and(
      then.setStyles(styles.positionRelative),
      then.append(
        this.uiTextWrapper = new UiDiv().and(
          then.setStyles(
            styles.fullWidth,
            styles.cursorPointer,
            styles.positionAbsolute,
            styles.nowrap,
            styles.overflowHidden,
            {
              textOverflow: 'ellipsis',
              padding: '8px 0'
            }
          ),
          then.onClick(async () => {
            uiFileInput.element.click()
          })
        ),
        uiFileInput
      )
    )

    this.setUiView(uiView)

    this.setText('no file selected')

  }

  setText(text: string) {
    this.uiTextWrapper.and(
      then.setText(text)
    )
  }

}
