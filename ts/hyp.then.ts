import { AndFunc, Ui } from './hyp'

export namespace then {

  export function empty(ui) {
    while(ui.element.childElementCount > 0) {
      ui.element.removeChild(ui.element.children[0])
    }
  }

  export function setText(text: string): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      ui.element.textContent = text
    }
  }

  export function setStyle(key: string, value: string): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      ui.element.style[key] = value
    }
  }

  export function removeStyles(...keys: Array<string>): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      keys.forEach((key) => {
        ui.element.style.removeProperty(key)
      })
    }
  }

  export function addClasses(...classes: Array<string>): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      ui.element.classList.add(...classes)
    }
  }

  export function removeClasses(...classes: Array<string>): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      ui.element.classList.remove(...classes)
    }
  }


  export function append(...childUis: Array<Ui<HTMLElement>>): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      childUis.forEach((childUi) => {
        ui.element.appendChild(childUi.element)
      })
    }
  }

  export function setAttribute(key, value): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      ui.element.setAttribute(key, value)
    }
  }

  export function removeAttributes(...keys: Array<string>): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      keys.forEach((key) => {
        ui.element.removeAttribute(key)
      })
    }
  }


  export function setIsHidden(isHidden): AndFunc<Ui<HTMLElement>> {
    return (ui) => {
      if (isHidden) {
        ui.and(setStyle('display', 'none'))
      } else {
        ui.and(removeStyles('display'))
      }
    }
  }



}
