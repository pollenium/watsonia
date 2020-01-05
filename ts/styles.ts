import { Properties as StyleStruct } from 'csstype'

export namespace styles {

  export const container: StyleStruct = {
    maxWidth: '800px',
    margin: '0px auto'
  }

  export const fullHeight: StyleStruct = {
    height: '100%'
  }

  export const fullWidth: StyleStruct = {
    width: '100%'
  }

  export const full: StyleStruct = {
    ...fullHeight,
    ...fullWidth
  }

  export const blur: StyleStruct = {
    filter: 'blur(40px)'
  }

  export const bgBlack: StyleStruct = {
    backgroundColor: 'black'
  }

  export const bgDark: StyleStruct = {
    backgroundColor: 'rgba(0, 0, 0, .6)'
  }

  export const bgMedium: StyleStruct = {
    backgroundColor: 'rgba(0, 0, 0, .5)'
  }

  export const bgGlass: StyleStruct = {
    backdropFilter: 'blur(2px)'
  }


  export const shadow: StyleStruct = {
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 4px 4px 0px'
  }

  export const flexColumns: StyleStruct = {
    display: 'flex',
    flexDirection: 'row'
  }

  export const flexRows: StyleStruct = {
    display: 'flex',
    flexDirection: 'column'
  }

  export const flexGrow: StyleStruct = {
    flexGrow: 1
  }


  export const textCenter: StyleStruct = {
    textAlign: 'center'
  }

  export const textRight: StyleStruct = {
    textAlign: 'right'
  }

  export const textBright: StyleStruct = {
    color: 'white'
  }

  export const textMuted: StyleStruct = {
    color: '#666'
  }

  export const positionAbsolute: StyleStruct =  {
    position: 'absolute'
  }

  export const positionRelative: StyleStruct =  {
    position: 'relative'
  }

  export const overflowHidden: StyleStruct = {
    overflow: 'hidden'
  }

  export const pad: StyleStruct = {
    padding: '18px'
  }

  export const padLeft: StyleStruct = {
    paddingLeft: '18px'
  }

  export const borderTop: StyleStruct = {
    borderTop: '1px solid rgba(255, 255, 255, .1)'
  }

  export const padSmall: StyleStruct = {
    padding: '8px'
  }

  export const padSmallLeft: StyleStruct = {
    paddingLeft: '8px'
  }

  export const padSmallRight: StyleStruct = {
    paddingRight: '8px'
  }

  export const padSmallTop: StyleStruct = {
    paddingTop: '8px'
  }

  export const padSmallBottom: StyleStruct = {
    paddingBottom: '8px'
  }

  export const nowrap: StyleStruct = {
    whiteSpace: 'nowrap'
  }

  export const cursorPointer: StyleStruct = {
    cursor: 'pointer'
  }

  export const cursorDisabled: StyleStruct = {
    cursor: 'not-allowed'
  }

  export const transitionAll: StyleStruct = {
    transition: 'all .5s ease-out'
  }

  export const spin: StyleStruct = {
    animationName: 'spin',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    display: 'inline-block'
  }

}
