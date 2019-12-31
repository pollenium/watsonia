export type AndFunc<T> = (ui: T) => void;
export { then } from './hyp.then'

export class Ui<T extends HTMLElement> {

  public element: T

  constructor(tag: string) {
    this.element = document.createElement(tag) as T
  }

  and(andFunc: AndFunc<this>): this {
    andFunc(this)
    return this
  }

}

export class UiDiv extends Ui<HTMLDivElement> {
  constructor(tag: string = 'div') {
    super(tag)
  }
}

export class UiUlist extends Ui<HTMLUListElement> {
  constructor(tag: string = 'ul') {
    super(tag)
  }
}

export class UiLI extends Ui<HTMLLIElement> {
  constructor(tag: string = 'li') {
    super(tag)
  }
}

export class UiAnchor extends Ui<HTMLAnchorElement> {
  constructor(tag: string = 'a') {
    super(tag)
  }
}

export class UiHeading extends Ui<HTMLHeadingElement> {
  constructor(tag: string) {
    super(tag)
  }
}

export class UiInput extends Ui<HTMLInputElement> {
  constructor(tag: string = 'input') {
    super(tag)
  }
}

export class UiSpan extends Ui<HTMLSpanElement> {
  constructor(tag: string = 'span') {
    super(tag)
  }
}

export class UiButton extends Ui<HTMLButtonElement> {
  constructor(tag: string = 'button') {
    super(tag)
  }
}

export class UiLabel extends Ui<HTMLLabelElement> {
  constructor(tag: string = 'label') {
    super(tag)
  }
}

export class UiForm extends Ui<HTMLFormElement> {
  constructor(tag: string = 'form') {
    super(tag)
  }
}
