import React from 'react'
import { Item, Slot } from '../../data/types'
import ItemContainer from './ItemContainer'

import './ItemLister.css'

interface ItemListerProps {
  filter: Item[]
}

const displayItemContainers = (list: Item[]): JSX.Element[] => {
  return list.map((item) => {
    return <ItemContainer key={item.metadata.name} item={item} />
  })
}

const getAllItemsByBoost = (list: Item[], boost: string) => {
  return list.filter(({ stats }) => Object.hasOwn(stats, boost))
}

const getAllItemsBySlot = (list: Item[], slot: string) => {
  return list.filter((item) => item.metadata.slot === slot)
}

const getAllItemsBySlots = (list: Item[], slots: Slot[]): Item[] => {
  return slots.map((slot) => getAllItemsBySlot(list, slot)).flat()
}

const getAllUnfinishedItems = (list: Item[]): Item[] => {
  return list.filter((item) => item.metadata.name.indexOf('*') === -1)
}

const getLoadoutFromList = (list: Item[]) => {
  const loadoutSlots = [
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
    'Accessory',
    'Accessory',
    'Accessory',
    'Accessory',
    'Accessory',
    'Accessory',
  ]
  const loadout = [] as Item[]
  for (const item of list) {
    const slot = item.metadata.slot
    if (loadoutSlots.includes(slot) && loadoutSlots.length > 0) {
      loadout.push(item)
      loadoutSlots.splice(loadoutSlots.indexOf(slot), 1)
    }
  }
  return loadout
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
  getLoadoutFromList,
}
