import { then, styles, UiDiv, UiImg } from '../hyp'

export class UiBackgroundGroup extends UiDiv {

  private uiBackgroundLayer0: UiBackgroundLayer
  private uiBackgroundLayer1: UiBackgroundLayer

  constructor() {
    super()
    this.and(then.setStyles(
      styles.full,
      styles.positionAbsolute,
      {
        zIndex: -1
      }
    )).and(then.append(
      this.uiBackgroundLayer0 = new UiBackgroundLayer,
      this.uiBackgroundLayer1 = new UiBackgroundLayer
    ))

    this.setImageUrl('/media/market-images/trump-shocked.jpg')
  }

  setImageUrl(imageUrl: string) {
    this.uiBackgroundLayer1.setImageUrl(imageUrl)
  }
}

class UiBackgroundLayer extends UiDiv {

  private uiImg: UiImg

  constructor() {
    super()
    this.and(then.setStyles(
      styles.full,
      styles.positionAbsolute,
      styles.bgBlack
    ))
    .and(then.append(
      new UiDiv()
        .and(then.setStyles(
          styles.full,
          styles.overflowHidden,
          styles.blur,
          {
            width: 'calc(100% + 80px)',
            marginLeft: '-40px'
          }
        ))
        .and(then.append(
          this.uiImg = new UiImg()
            .and(then.setStyles(
              styles.fullWidth
            ))
        ))
    ))
  }

  setImageUrl(imageUrl: string) {
    this.uiImg.and(then.setAttribute('src', imageUrl))
  }

}
