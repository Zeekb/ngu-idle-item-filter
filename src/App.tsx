import React, { useState } from 'react'
import {
  ItemLister,
  getAllUnfinishedItems,
  getAllItemsBySlot,
  getAllItemsByBoost,
} from './components/ItemLister'
import { LabeledSelect } from '@itwin/itwinui-react'
import { Item } from './types'

import data from './itemList.json'

const App = () => {
  const [value, setValue] = useState(0)
  const items = data as Item[]

  const options = [
    { value: 0, label: 'All items' },
    { value: 1, label: 'Unfinished items' },
    { value: 2, label: 'Accessories' },
    { value: 3, label: 'Drop' },
    { value: 4, label: 'Gold' },
    { value: 5, label: 'Energy cap' },
    { value: 6, label: 'Energy power' },
    { value: 7, label: 'Magic power' },
    { value: 8, label: 'Respawn' },
    { value: 9, label: 'Advanced training' },
    { value: 10, label: 'Seed gain' },
    { value: 11, label: 'Move cooldown' },
    { value: 12, label: 'Wandoos speed' },
    { value: 13, label: 'NGU speed' },
    { value: 14, label: 'Augment speed' },
    { value: 15, label: 'Beard speed' },
  ]

  const useFilter: Item[][] = [
    items,
    getAllUnfinishedItems(items),
    getAllItemsBySlot(items, 'Accessory'),
    getAllItemsByBoost(items, 'gold'),
    getAllItemsByBoost(items, 'drop'),
    getAllItemsByBoost(items, 'energy', 'cap'),
    getAllItemsByBoost(items, 'energy', 'power'),
    getAllItemsByBoost(items, 'magic', 'power'),
    getAllItemsByBoost(items, 'respawn'),
    getAllItemsByBoost(items, 'advancedTraining'),
    getAllItemsByBoost(items, 'seedGain'),
    getAllItemsByBoost(items, 'moveCooldown'),
    getAllItemsByBoost(items, 'wandoosSpeed'),
    getAllItemsByBoost(items, 'nguSpeed'),
    getAllItemsByBoost(items, 'augSpeed'),
    getAllItemsByBoost(items, 'beardSpeed'),
  ]

  const labelStyle = {
    width: '60%',
    marginLeft: '20%',
    padding: '10px',
  }

  return (
    <>
      <div className="header" style={{ display: 'flex' }}>
        <LabeledSelect
          style={labelStyle}
          placeholder="Pick an item filter..."
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
      <ItemLister filter={useFilter[value]} />
    </>
  )
}

export default App
