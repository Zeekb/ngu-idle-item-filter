import React, { useState } from 'react'
import {
  ItemLister,
  getAllUnfinishedItems,
  getAllItemsBySlots,
  getAllItemsByBoost,
  getLoadoutFromList,
} from '../itemLister/ItemLister'
import {
  sortOnAdvancedTraining,
  sortOnAugSpeed,
  sortOnBeardSpeed,
  sortOnDrop,
  sortOnEnergyBars,
  sortOnEnergyCap,
  sortOnEnergyPower,
  sortOnGold,
  sortOnId,
  sortOnMagicBars,
  sortOnMagicCap,
  sortOnMagicPower,
  sortOnMoveCooldown,
  sortOnNguSpeed,
  sortOnPower,
  sortOnRespawn,
  sortOnSeedGain,
  sortOnToughness,
  sortOnWandoosSpeed,
} from '../../data/sorts'
import FilterButtons from '../LoadoutFilter/FilterButtons'
import { Item, Slot } from '../../data/types'
import LoadoutFilter from '../LoadoutFilter/LoadoutFilter'
import itemData from '../../data/itemList.json'
import './App.css'
import Loadout from '../Loadout/Loadout'

const App = () => {
  const [value, setValue] = useState(0)
  const items = itemData as Item[]
  const [slotFilter, setSlotFilter] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])

  //TODO: move out the annoying 3 extra functions I need for each function
  const useFilter: Item[][] = [
    sortOnId(getAllItemsBySlots(items, slotFilter)),
    sortOnPower(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'power'),
    ),
    sortOnEnergyCap(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'energy',
        'cap',
      ),
    ),

    sortOnEnergyPower(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'energy',
        'power',
      ),
    ),

    sortOnEnergyBars(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'energy',
        'bars',
      ),
    ),
    sortOnGold(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'gold'),
    ),
    sortOnDrop(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'drop'),
    ),
    sortOnId(getAllUnfinishedItems(items)),
    sortOnToughness(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'toughness'),
    ),
    sortOnMagicCap(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'magic', 'cap'),
    ),
    sortOnMagicPower(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'magic',
        'power',
      ),
    ),
    sortOnMagicBars(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'magic',
        'bars',
      ),
    ),
    sortOnRespawn(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'respawn'),
    ),
    sortOnMoveCooldown(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'moveCooldown'),
    ),
    sortOnAdvancedTraining(
      getAllItemsByBoost(
        getAllItemsBySlots(items, slotFilter),
        'advancedTraining',
      ),
    ),
    sortOnSeedGain(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'seedGain'),
    ),
    sortOnAugSpeed(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'augSpeed'),
    ),
    sortOnWandoosSpeed(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'wandoosSpeed'),
    ),
    sortOnBeardSpeed(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'beardSpeed'),
    ),
    sortOnNguSpeed(
      getAllItemsByBoost(getAllItemsBySlots(items, slotFilter), 'nguSpeed'),
    ),
  ]

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
        <Loadout loadout={getLoadoutFromList(useFilter[value])} />
      </div>
    </div>
  )
}

export default App
