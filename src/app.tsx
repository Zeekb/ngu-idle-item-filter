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

import { Item, Slot } from './utils/types'

import Sorts from './utils/sorts'
const sorts = new Sorts()

import itemData from './utils/item-list.json'
import zones from './utils/zones-list.json'

import './app.css'

const App = () => {
  const [index, setIndex] = useState(0)
  const [zone, setZone] = useState(zones.length - 1)
  const [slots, setSlots] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])
  const items = itemData as Item[]

  const filteredItems = (boost: string) =>
    getByZone(getByBoost(getBySlots(items, slots), boost), zone)

  const filters: Item[][] = [
    getByZone(sorts.sortOnId(getBySlots(items, slots)), zone),
    sorts.sortOnPower(filteredItems('power')),
    sorts.sortOnEnergyCap(filteredItems('energyCap')),
    sorts.sortOnEnergyPower(filteredItems('energyPower')),
    sorts.sortOnEnergyBars(filteredItems('energyBars')),
    sorts.sortOnAugSpeed(filteredItems('augSpeed')),
    sorts.sortOnWandoosSpeed(filteredItems('wandoosSpeed')),
    getByZone(sorts.sortOnId(getUnfinished(getBySlots(items, slots))), zone),
    sorts.sortOnToughness(filteredItems('toughness')),
    sorts.sortOnMagicCap(filteredItems('magicCap')),
    sorts.sortOnMagicPower(filteredItems('magicPower')),
    sorts.sortOnMagicBars(filteredItems('magicBars')),
    sorts.sortOnBeardSpeed(filteredItems('beardSpeed')),
    sorts.sortOnNguSpeed(filteredItems('nguSpeed')),
    sorts.sortOnGold(filteredItems('gold')),
    sorts.sortOnDrop(filteredItems('drop')),
    sorts.sortOnRespawn(filteredItems('respawn')),
    sorts.sortOnMoveCooldown(filteredItems('moveCooldown')),
    sorts.sortOnAdvancedTraining(filteredItems('advancedTraining')),
    sorts.sortOnSeedGain(filteredItems('seedGain')),
    sorts.sortOnYggdrasilYield(filteredItems('yggdrasilYield')),
  ]
  const sortedItems = filters[index]

  // TODO: click on items to remove them from list (deselected on click)

  // get all items when in need of a sort of the item-list file
  // console.log(JSON.stringify(getByZone(sorts.sortOnId(getBySlots(items, slots)), zone)))

  return (
    <div className="app-container">
      <div className="item-filter-container">
        <FilterButtons setIndex={setIndex} />
        <ZoneFilter zone={zone} setZone={setZone} />
        <ItemLister items={sortedItems} />
      </div>
      <div className="item-container loadout-container text">
        <Loadout
          slots={slots}
          setSlots={setSlots}
          loadout={getLoadout(sortedItems)}
        />
      </div>
    </div>
  )
}

export default App
