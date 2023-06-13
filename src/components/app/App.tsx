import React, { useState } from 'react'
import {
  ItemLister,
  getAllUnfinishedItems,
  getAllItemsBySlots,
  getAllItemsByBoost,
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
} from '../functions/sorts'
import FilterButtons from '../FilterButtons'
import { Item, Slot } from '../../data/types'
import LoadoutFilter from '../LoadoutFilter/LoadoutFilter'
import itemData from '../../data/itemList.json'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0)
  const items = itemData as Item[]
  const [slots, setSlots] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])

  //TODO: move out the annoying 3 extra functions I need for each function
  const useFilter: Item[][] = [
    sortOnId(getAllItemsBySlots(items, slots)),
    sortOnId(
      getAllItemsBySlots(
        sortOnPower(getAllItemsByBoost(items, 'power')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnEnergyCap(getAllItemsByBoost(items, 'energy', 'cap')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnEnergyPower(getAllItemsByBoost(items, 'energy', 'power')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnEnergyBars(getAllItemsByBoost(items, 'energy', 'bars')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(sortOnDrop(getAllItemsByBoost(items, 'drop')), slots),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnRespawn(getAllItemsByBoost(items, 'respawn')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnSeedGain(getAllItemsByBoost(items, 'seedGain')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnWandoosSpeed(getAllItemsByBoost(items, 'wandoosSpeed')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnAugSpeed(getAllItemsByBoost(items, 'augSpeed')),
        slots,
      ),
    ),
    sortOnId(getAllItemsBySlots(getAllUnfinishedItems(items), slots)),
    sortOnId(
      getAllItemsBySlots(
        sortOnToughness(getAllItemsByBoost(items, 'toughness')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnMagicCap(getAllItemsByBoost(items, 'magic', 'cap')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnMagicPower(getAllItemsByBoost(items, 'magic', 'power')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnMagicBars(getAllItemsByBoost(items, 'magic', 'bars')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(sortOnGold(getAllItemsByBoost(items, 'gold')), slots),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnAdvancedTraining(getAllItemsByBoost(items, 'advancedTraining')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnMoveCooldown(getAllItemsByBoost(items, 'moveCooldown')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnBeardSpeed(getAllItemsByBoost(items, 'beardSpeed')),
        slots,
      ),
    ),
    sortOnId(
      getAllItemsBySlots(
        sortOnNguSpeed(getAllItemsByBoost(items, 'nguSpeed')),
        slots,
      ),
    ),
  ]

  console.log(getAllItemsBySlots(items, slots))

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
        <LoadoutFilter slots={slots} setSlots={setSlots} />
      </div>
    </div>
  )
}

export default App
