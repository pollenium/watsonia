import { then, styles, Ui } from '../hyp'

export class UiLinearIcon extends Ui<HTMLSpanElement> {

  private className: string

  constructor(className: string) {
    super('span')
    this.and(then.addClasses('lnr'))
    this.setClassName(className)
  }

  setClassName(className: string) {
    if (this.className) {
      this.and(then.removeClasses(`lnr-${this.className}`))
    }
    this.className = className
    this.and(then.addClasses(`lnr-${className}`))
  }
}
