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

const getByBoost = (list: Item[], boost: string) => {
  return list.filter(({ stats }) => Object.hasOwn(stats, boost))
}

const getBySlot = (list: Item[], slot: string) => {
  return list.filter((item) => item.metadata.slot === slot)
}

const getBySlots = (list: Item[], slots: Slot[]): Item[] => {
  return slots.map((slot) => getBySlot(list, slot)).flat()
}

const getByZone = (list: Item[], zone: number): Item[] => {
  return list.filter((item) => item.metadata.zone <= zone)
}

const getUnfinished = (list: Item[]): Item[] => {
  return list.filter((item) => !item.metadata.completed)
}

const getLoadout = (list: Item[]) => {
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
  getUnfinished,
  getBySlots,
  getByBoost,
  getByZone,
  getLoadout,
}
