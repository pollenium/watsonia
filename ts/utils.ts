import { Address } from 'pollenium-buttercup'
import delay from 'delay'

export function getIsTouch() {
  return (('ontouchstart' in window)
    || (navigator.maxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0))
}

export function getTime() {
  return (new Date()).getTime()
}

export async function waitUntil(time) {
  const now = getTime()
  if (time > now) {
    await delay(time - now)
  }
}

export async function fetchFileText(file: File): Promise<string> {
  const fileReader = new FileReader

  const promise = new Promise<string>((resolve, reject) => {
    fileReader.onload = (event) => {
      resolve(event.target.result as string)
    }
  })

  fileReader.readAsText(file)

  return promise

}
