import { then, styles, UiDiv, UiInput, Ui } from '../hyp'
import { Emitter } from '../classes/Emitter'


const colorDefault = '#666'
const colorFocus = 'white'

export class UiFormControl extends UiDiv {

  private uiPrependWrapper: UiDiv
  private uiAppendWrapper: UiDiv
  private uiViewWrapper: UiDiv
  private uiInput: UiInput
  public valueEmitter: Emitter<string> = new Emitter<string>()

  constructor() {
    super()
    this.and(
      then.setStyles(
        styles.fullWidth,
        styles.transitionAll,
        styles.flexColumns,
        {
          borderBottom: `1px solid ${colorDefault}`
        }
      ),
      then.append(
        this.uiPrependWrapper = new UiDiv().and(
          then.setIsHidden(true),
          then.setStyles({
            padding: '8px 8px 8px 0'
          })
        ),
        this.uiViewWrapper = new UiDiv().and(
          then.setStyles(styles.flexGrow)
        ),
        this.uiAppendWrapper = new UiDiv().and(
          then.setIsHidden(true),
          then.setStyles({
            padding: '8px 8px 8px 0'
          })
        )
      )
    )
  }

  setValue(value: string) {
    this.uiInput.element.value = value
    this.valueEmitter.emit(value)
  }

  setUiInput(uiInput: UiInput) {

    this.uiInput = uiInput


    uiInput.and(
      then.onDom('input', () => {
        this.valueEmitter.emit(uiInput.element.value)
      }),
      then.setStyles(
        styles.transitionAll,
          {
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: 'inherit',
          outline: 'none',
          fontFamily: 'alphanum20',
          padding: '8px 0',
          borderRadius: '0',
          width: '100%',
          color: colorDefault,
          borderColor: colorDefault
        }
      ),
      then.onDom('focus', () => {
        this.and(then.setStyles({
          color: colorFocus,
          borderColor: colorFocus
        }))
        uiInput.and(then.setStyles({ color: colorFocus }))
      }),
      then.onDom('focusout', () => {
        this.and(then.setStyles({
          color: colorDefault,
          borderColor: colorDefault
        }))
        uiInput.and(then.setStyles({ color: colorDefault }))
      })
    )

  }

  setUiView(uiView: Ui<HTMLElement>) {
    this.uiViewWrapper.and(
      then.empty,
      then.append(uiView)
    )
  }

  setUiPrepend(uiPrepend: Ui<HTMLElement>) {
    this.uiPrependWrapper.and(
      then.empty,
      then.append(uiPrepend),
      then.setIsHidden(false)
    )
  }

  setUiAppend(uiAppend: Ui<HTMLElement>) {
    this.uiAppendWrapper.and(
      then.empty,
      then.append(uiAppend),
      then.setIsHidden(false)
    )
  }


}
