import { then, UiAnchor } from '../hyp'

export class UiInternalAnchor extends UiAnchor {
  constructor(urlParts: Array<string>) {
    super()
    const url = urlParts.length > 0 ? `#/${urlParts.join('/')}/` : '#/'
    this.and(then.setAttribute('href', url))
  }
}
