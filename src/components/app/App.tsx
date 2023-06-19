import React, { useState } from 'react'
import {
  ItemLister,
  getUnfinished,
  getBySlots,
  getByBoost,
  getLoadout,
} from '../itemLister/ItemLister'
import Sorts from '../../data/sorts'
import FilterButtons from '../LoadoutFilter/FilterButtons'
import { Item, Slot } from '../../data/types'
import LoadoutFilter from '../LoadoutFilter/LoadoutFilter'
import itemData from '../../data/itemList.json'
import './App.css'
import Loadout from '../Loadout/Loadout'

const App = () => {
  const [value, setValue] = useState(0)
  const items = itemData as Item[]
  const sorts = new Sorts()
  const [slotFilter, setSlotFilter] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])

  const filteredItems = (boost: string) =>
    getByBoost(getBySlots(items, slotFilter), boost)
  // TODO: getByZone(items, zone)

  const useFilter: Item[][] = [
    sorts.sortOnId(getBySlots(items, slotFilter)),
    sorts.sortOnPower(filteredItems('power')),
    sorts.sortOnEnergyCap(filteredItems('energyCap')),
    sorts.sortOnEnergyPower(filteredItems('energyPower')),
    sorts.sortOnEnergyBars(filteredItems('energyBars')),
    sorts.sortOnGold(filteredItems('gold')),
    sorts.sortOnDrop(filteredItems('drop')),
    sorts.sortOnId(getUnfinished(getBySlots(items, slotFilter))),
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

  // TODO: add filter on zone increasing
  //        [-][{ zone }][+]
  //  2 = [Tutorial Zone, Sewer]
  //  6 = [Tutorial Zone, Sewer, Forest, Cave of Many Things, The Sky]

  return (
    <div className="app-container">
      <div className="filter-container">
        <div className="buttons-container text">
          <FilterButtons setValue={setValue} />
        </div>
        <div className="items-container text">
          <ItemLister filter={useFilter[value]} />
        </div>
      </div>
      <div className="item-container loadout-container text">
        <LoadoutFilter slotFilter={slotFilter} setSlotFilter={setSlotFilter} />
        <Loadout loadout={getLoadout(useFilter[value])} />
      </div>
    </div>
  )
}

export default App
