import { then, styles, UiDiv, UiSpan } from '../hyp'

interface UiOptionStruct {
  id?: string,
  text: string,
  onSelect?: any,
  isSelected?: boolean,
}

export class UiNavbarOptionGroup extends UiDiv {

  private uiOptions: Array<UiOption> = []
  private uiItemsWrapper: UiDiv
  private uiOptionSelected: UiOption

  constructor() {
    super()
    this.and(
      then.setStyles(
        styles.positionRelative
      ),
      then.append(
        this.uiItemsWrapper = new UiDiv().and(
          then.setStyles(
            styles.nowrap,
            styles.pad,
            styles.container,
            {
              overflowX: 'auto',
              overflowY: 'hidden'
            }
          )
        )
      )
    )
  }

  addOption(uiOptionStruct: UiOptionStruct) {
    const uiOption = new UiOption(this, uiOptionStruct)
      .andIf(
        this.uiItemsWrapper.element.childElementCount > 0,
        then.setStyles(styles.padLeft)
      )
      .and(
        then.appendTo(this.uiItemsWrapper)
      )

    this.uiOptions.push(uiOption)
  }
  addOptions(...uiOptionStructs: Array<UiOptionStruct>) {
    uiOptionStructs.forEach((uiOptionStruct) => {
      this.addOption(uiOptionStruct)
    })
  }
  addLabel(label: string) {
    this.uiItemsWrapper.and(then.append(
      new UiSpan().and(
        then.setText(label),
      )
    ))
  }
  selectOptionById(id: string) {
    if (this.uiOptionSelected && this.uiOptionSelected.id !== id) {
      this.uiOptionSelected.setIsSelected(false)
    }

    const uiOptionSelected = this.findUiOptionById(id)
    if (!uiOptionSelected) {
      return
    }
    uiOptionSelected.setIsSelected(true)
  }

  findUiOptionById(id: string): UiOption {
    const uiOption = this.uiOptions.find((uiOption) => {
      return uiOption.id === id
    })
    if (!uiOption) {
      throw new Error(`No UiOption with id "${id}"`)
    }
    return uiOption
  }
}

class UiOption extends UiSpan {

  public id: string;

  constructor(private uiOptionGroup, private struct: UiOptionStruct) {
    super()

    if (struct.id) {
      this.id = struct.id
    }

    this.and(
      then.setStyles(
        styles.nowrap,
        styles.cursorPointer
      ),
      then.setText(struct.text),
      then.onClick(() => {
        this.setIsSelected(true)
      })
    )

    if (struct.isSelected) {
      this.setIsSelected(true)
    }
  }

  setIsSelected(isSelected: boolean) {

    if (!isSelected) {
      this.and(then.removeStyles(...Object.keys(styles.textBright)))
      return
    }

    this.and(then.setStyles(styles.textBright))

    const uiOptionSelected = this.uiOptionGroup.uiOptionSelected
    if(uiOptionSelected && uiOptionSelected !== this) {
      uiOptionSelected.setIsSelected(false)
    }

    this.uiOptionGroup.uiOptionSelected = this

    if (this.struct.onSelect) {
      this.struct.onSelect()
    }

  }
}
