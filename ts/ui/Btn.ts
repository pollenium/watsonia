import { then, styles, UiButton, UiSpan } from '../hyp'
import { Properties as StyleStruct } from 'csstype'
import { UiLinearIcon } from './LinearIcon'

interface UiBtnStruct {
  isDisabled?: boolean
  linearIconClassName?: string
  text: string
}

export class UiBtn extends UiButton {

  private isDisabled
  private isHovered = false

  constructor(struct: UiBtnStruct) {
    super()
    this.and(then.setStyles(
      styles.transitionAll,
        {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        padding: '8px',
        outline: 'none',
      }
    ))

    if(struct.linearIconClassName) {
      this.and(then.append(
        new UiLinearIcon(struct.linearIconClassName).and(
          then.setStyles(styles.padSmallRight)
        )
      ))
    }

    this.and(then.append(
      new UiSpan().and(then.setText(struct.text))
    ))

    this.setIsDisabled(struct.isDisabled || false)
    this.and(then.onDom('mouseover', () => {
      this.isHovered = true
      this.updateStyles()
    }))
    this.and(then.onDom('mouseout', () => {
      this.isHovered = false
      this.updateStyles()
    }))

  }

  setIsDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled
    if (isDisabled) {
      this.and(then.setAttribute('disabled', 'true'))
    } else {
      this.and(then.removeAttributes('disabled'))
    }

    this.updateStyles()
  }

  updateStyles() {
    this.and(then.setStyles(...this.getStyleStructs()))
  }

  getStyleStructs(): Array<StyleStruct> {
    if (this.isDisabled) {
      return [
        styles.cursorDisabled,
        {
          borderColor: '#333',
          color: '#333',
          background: '#111'
        }
      ]
    }

    if (this.isHovered) {
      return [
        styles.cursorPointer,
        {
          borderColor: '#fff',
          color: '#fff',
          background: 'none'
        }
      ]
    }

    return [
      styles.cursorPointer,
      {
        borderColor: '#aaa',
        color: '#aaa',
        background: 'none'
      }
    ]

  }
}
