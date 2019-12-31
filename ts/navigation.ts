import { Emitter } from './classes/Emitter'
import { UiDiv } from './hyp'
import { UiPageUnknown } from './ui/PageUnknown'
import { UiPageAuthCreate } from './ui/PageAuthCreate'

export enum PAGE {
  UNKNOWN =     'UNKNOWN',
  AUTH =        'AUTH',
  AUTH_LOGIN =  'AUTH_CREATE',
  AUTH_CREATE = 'AUTH_LOGIN',
  MARKETS =     'MARKETS',
  MARKET  =     'MARKET'
}

class Navigation {

  public pageEmitter = new Emitter<UiDiv>();

  private uiPageUnknown: UiDiv;
  private uiPageAuth: UiDiv;
  private uiPageAuthLogin: UiDiv;
  private uiPageAuthCreate: UiDiv;
  private uiPageMarkets: UiDiv;

  constructor() {
    window.onhashchange = () => {
      this.handleHashChange()
    }
  }

  handleHashChange() {
    const hash = window.location.hash
    const urlParts = hash.split('#').join('').split('/').filter((urlPart) => {
      return urlPart.length > 0
    })
    this.handleUrlParts(urlParts)
  }

  init() {
    this.handleHashChange()
  }


  setPage(page: PAGE, data?: any): void {
    switch(page) {
      // case PAGE.AUTH:
      //   this.pageEmitter.emit(this.get())
      //   break;
      case PAGE.AUTH_CREATE:
        this.pageEmitter.emit(this.getUiPageAuthCreate())
        break;
      // case PAGE.MARKETS:
      //   this.pageEmitter.emit(this.getHypMarkets())
      //   break;
      default:
        this.pageEmitter.emit(this.getUiPageUnknown())
        break;
    }
  }

  getUiPageUnknown() {
    if (this.uiPageUnknown) {
      return this.uiPageUnknown
    }
    this.uiPageUnknown = new UiPageUnknown
    return this.uiPageUnknown
  }

  // getHypAuth() {
  //   if (this.uiPageAuth) {
  //     return this.uiPageAuth
  //   }
  //   this.uiPageAuth = new UiAuth
  //   return this.uiPageAuth
  // }


  getUiPageAuthCreate() {
    if (this.uiPageAuthCreate) {
      return this.uiPageAuthCreate
    }
    this.uiPageAuthCreate = new UiPageAuthCreate
    return this.uiPageAuthCreate
  }

  // getHypMarkets() {
  //   if (this.uiPageMarkets) {
  //     return this.uiPageMarkets
  //   }
  //   this.uiPageMarkets = new HypMarketSummaries
  //   return this.uiPageMarkets
  // }



  private parseUrlParts(urlParts: Array<string>): { page: PAGE, data?: any} {
    if(urlParts.length === 0) {
      return { page: PAGE.MARKETS }
    }
    switch (urlParts[0]) {
      case 'auth':
        if (!urlParts[1]) {
          return { page: PAGE.AUTH }
        }
        switch (urlParts[1]) {
          case 'login':
            return { page: PAGE.AUTH_LOGIN }
          case 'create':
            return { page: PAGE.AUTH_CREATE }
          default:
            return { page: PAGE.UNKNOWN }
        }
      case 'markets':
        if (urlParts.length === 1) {
          return { page: PAGE.MARKETS }
        }
        const marketId = parseInt(urlParts[1])
        return {
          page: PAGE.MARKET,
          data: marketId
        }
      default:
        return { page: PAGE.UNKNOWN }
    }

  }

  handleUrlParts(urlParts: Array<string>) {
    const parsedUrlParts = this.parseUrlParts(urlParts)
    this.setPage(parsedUrlParts.page, parsedUrlParts.data)
  }
}

export const navigation = new Navigation
