import React from 'react'
import { Item, Slot, Stat } from '../../data/types'
import ItemContainer from '../ItemContainer'

import './ItemLister.css'

interface ItemListerProps {
  filter: Item[]
}

const displayItemContainers = (list: Item[]): JSX.Element[] => {
  return list.map((item) => {
    return <ItemContainer key={item.name} item={item} />
  })
}

const getAllItemsByBoost = (
  list: Item[],
  boost: string,
  secondaryBoost?: string,
) => {
  return list.filter((item) => {
    const stat = item[boost === 'energy' ? 'energy' : 'magic']
    if (secondaryBoost && stat) {
      return Object.hasOwn(stat as Stat, secondaryBoost)
    } else {
      return Object.hasOwn(item, boost)
    }
  })
}

const getAllItemsBySlot = (list: Item[], slot: string) => {
  return list.filter((item) => item.slot === slot)
}

const getAllItemsBySlots = (list: Item[], slots: Slot[]): Item[] => {
  return slots.map((slot) => getAllItemsBySlot(list, slot)).flat()
}

const getAllUnfinishedItems = (list: Item[]): Item[] => {
  return list.filter((item) => item.name.indexOf('*') === -1)
}

const ItemLister = (props: ItemListerProps) => {
  const { filter } = props

  return <>{displayItemContainers(filter)}</>
}
export {
  ItemLister,
  getAllUnfinishedItems,
  getAllItemsBySlot,
  getAllItemsBySlots,
  getAllItemsByBoost,
}
