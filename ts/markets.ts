import { Market } from './classes/Market'
import { Address } from 'pollenium-buttercup'

const marketStructs = [
  {
    id: 0,
    name: 'Trump Convicted',
    imageFileName: 'trump-shocked.jpg'
  },
  {
    id: 1,
    name: 'Trump Re-Elected 2020',
    imageFileName: 'trump-victorious.jpg'
  },
  ,
  {
    id: 2,
    name: 'Reccession 2020',
    imageFileName: 'trump-victorious.jpg'
  }
]

export const markets = marketStructs.map((marketStruct) => {
  return new Market(
    marketStruct.id,
    marketStruct.name,
    marketStruct.imageFileName,
    Address.genNull()
  )
})
