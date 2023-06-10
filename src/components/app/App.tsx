import React, { useState } from 'react'
import {
  ItemLister,
  getAllUnfinishedItems,
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
import { Item } from '../../data/types'

import itemData from '../../data/itemList.json'

import './App.css'

const App = () => {
  const [value, setValue] = useState(0)
  const items = itemData as Item[]
  const useFilter: Item[][] = [
    items,
    sortOnPower(getAllItemsByBoost(items, 'power')),
    sortOnEnergyCap(getAllItemsByBoost(items, 'energy', 'cap')),
    sortOnEnergyPower(getAllItemsByBoost(items, 'energy', 'power')),
    sortOnEnergyBars(getAllItemsByBoost(items, 'energy', 'bars')),
    sortOnDrop(getAllItemsByBoost(items, 'drop')),
    sortOnRespawn(getAllItemsByBoost(items, 'respawn')),
    sortOnSeedGain(getAllItemsByBoost(items, 'seedGain')),
    sortOnWandoosSpeed(getAllItemsByBoost(items, 'wandoosSpeed')),
    sortOnAugSpeed(getAllItemsByBoost(items, 'augSpeed')),
    getAllUnfinishedItems(items),
    sortOnToughness(getAllItemsByBoost(items, 'toughness')),
    sortOnMagicCap(getAllItemsByBoost(items, 'magic', 'cap')),
    sortOnMagicPower(getAllItemsByBoost(items, 'magic', 'power')),
    sortOnMagicBars(getAllItemsByBoost(items, 'magic', 'bars')),
    sortOnGold(getAllItemsByBoost(items, 'gold')),
    sortOnAdvancedTraining(getAllItemsByBoost(items, 'advancedTraining')),
    sortOnMoveCooldown(getAllItemsByBoost(items, 'moveCooldown')),
    sortOnBeardSpeed(getAllItemsByBoost(items, 'beardSpeed')),
    sortOnNguSpeed(getAllItemsByBoost(items, 'nguSpeed')),
  ]

  return (
    <div className="app-container">
      <FilterButtons setValue={setValue} />
      <ItemLister filter={useFilter[value]} />
    </div>
  )
}

export default App
