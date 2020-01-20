import { then, styles, UiDiv } from '../hyp'
import { UiNavbarOptionGroup } from './NavbarOptionGroup'
import { UiDivider } from './Divider'
import { UiAuthCreate } from './AuthCreate'
import { UiAuthLogin } from './AuthLogin'
import { Snowdrop } from 'pollenium-snowdrop'

export enum AuthState {
  NULL = 'null',
  LOGIN = 'login',
  CREATE = 'create'
}

export class UiAuth extends UiDiv {

  private uiNavbarOptionGroup: UiNavbarOptionGroup
  private uiDisplay: UiDiv
  private loginSnowdrop: Snowdrop<void> = new Snowdrop<void>()

  constructor() {
    super()
    this.and(then.append(
      this.uiNavbarOptionGroup = new UiNavbarOptionGroup()
        .and((uiOptionGroup) => {
          uiOptionGroup.addLabel('Do you have an Account?')
          uiOptionGroup.addOptions({
            id: AuthState.LOGIN,
            text: 'Yes',
            onSelect: () => {
              this.setDisplay(AuthState.LOGIN)
            }
          },{
            id: AuthState.CREATE,
            text: 'No',
            onSelect: () => {
              this.setDisplay(AuthState.CREATE)
            }
          })
        }),
      this.uiDisplay = new UiDiv()
    ))

    this.setAuthState(AuthState.LOGIN)
  }

  setAuthState(authState: AuthState) {
    this.uiNavbarOptionGroup.selectOptionById(authState)
  }

  setDisplay(authState: AuthState) {
    this.uiDisplay.and(then.empty)


    if (authState === AuthState.CREATE) {
      this.uiDisplay.and(
        then.append(
          new UiDivider(),
          new UiAuthCreate(this)
        )
      )
    } else if (authState === AuthState.LOGIN) {
      this.uiDisplay.and(
        then.append(
          new UiDivider(),
          new UiAuthLogin(this)
        )
      )
    }
  }
}
