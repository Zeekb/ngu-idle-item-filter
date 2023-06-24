import React, { useState } from 'react'
import {
  ItemLister,
  getUnfinished,
  getBySlots,
  getByBoost,
  getByZone,
  getLoadout,
} from './components/item-lister/item-lister'
import { ZoneFilter } from './components/zone-filter'
import { Loadout } from './components/loadout/loadout'
import { FilterButtons } from './components/filter-buttons'
import { LoadoutFilter } from './components/loadout-filter/loadout-filter'

import { Item, Slot } from './utils/types'

import Sorts from './utils/sorts'

import itemData from './utils/item-list.json'
import zones from './utils/zones-list.json'

import './app.css'

const App = () => {
  const sorts = new Sorts()

  const [index, setIndex] = useState(0)
  const [slots, setSlots] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])

  const items = itemData as Item[]
  const [zone, setZone] = useState(zones.length - 1)

  const filteredItems = (boost: string) =>
    getByZone(getByBoost(getBySlots(items, slots), boost), zone)

  const filters: Item[][] = [
    getByZone(sorts.sortOnId(getBySlots(items, slots)), zone),
    sorts.sortOnPower(filteredItems('power')),
    sorts.sortOnEnergyCap(filteredItems('energyCap')),
    sorts.sortOnEnergyPower(filteredItems('energyPower')),
    sorts.sortOnEnergyBars(filteredItems('energyBars')),
    sorts.sortOnGold(filteredItems('gold')),
    sorts.sortOnDrop(filteredItems('drop')),
    getByZone(sorts.sortOnId(getUnfinished(getBySlots(items, slots))), zone),
    sorts.sortOnToughness(filteredItems('toughness')),
    sorts.sortOnMagicCap(filteredItems('magicCap')),
    sorts.sortOnMagicPower(filteredItems('magicPower')),
    sorts.sortOnMagicBars(filteredItems('magicBars')),
    sorts.sortOnRespawn(filteredItems('respawn')),
    sorts.sortOnMoveCooldown(filteredItems('moveCooldown')),
    sorts.sortOnAdvancedTraining(filteredItems('advancedTraining')),
    sorts.sortOnSeedGain(filteredItems('seedGain')),
    sorts.sortOnAugSpeed(filteredItems('augSpeed')),
    sorts.sortOnWandoosSpeed(filteredItems('wandoosSpeed')),
    sorts.sortOnBeardSpeed(filteredItems('beardSpeed')),
    sorts.sortOnNguSpeed(filteredItems('nguSpeed')),
  ]
  const itemFilter = filters[index]

  // get all items when in need of a sort of the item-list file
  // console.log(JSON.stringify(getByZone(sorts.sortOnId(getBySlots(items, slots)), zone)))

  return (
    <div className="app-container">
      <div className="item-filter-container">
        <FilterButtons setIndex={setIndex} />
        <ZoneFilter zone={zone} setZone={setZone} />
        <ItemLister filter={itemFilter} />
      </div>
      <div className="item-container loadout-container text">
        <LoadoutFilter slots={slots} setSlots={setSlots} />
        <Loadout loadout={getLoadout(itemFilter)} />
      </div>
    </div>
  )
}

export default App
