import { then } from '../hyp'
import { UiContainer } from './Container'
import { navigation } from '../navigation'

export class UiMain extends UiContainer {
  constructor() {
    super()

    navigation.pageEmitter.on((page) => {
      this.and(then.empty)
      this.and(then.append(page))
    })
  }
}
