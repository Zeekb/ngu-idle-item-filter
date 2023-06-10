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
    { value: 0, label: 'Get all items' },
    { value: 1, label: 'Get all unfinished items' },
    { value: 2, label: 'Get all items By slot - Accessory' },
    { value: 3, label: 'Get all items By boost - Gold' },
    { value: 4, label: 'Get all items By boost - Energy Cap' },
    { value: 5, label: 'Get all items By boost - Energy Power' },
    { value: 6, label: 'Get all items By boost - Magic Power' },
  ]

  const useFilter: Item[][] = [
    items,
    getAllUnfinishedItems(items),
    getAllItemsBySlot(items, 'Accessory'),
    getAllItemsByBoost(items, 'gold'),
    getAllItemsByBoost(items, 'energy', 'cap'),
    getAllItemsByBoost(items, 'energy', 'power'),
    getAllItemsByBoost(items, 'magic', 'power'),
  ]

  const labelStyle = {
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%',
    padding: '10px',
  }

  return (
    <>
      <LabeledSelect
        style={labelStyle}
        placeholder="Pick an item filter..."
        options={options}
        value={value}
        onChange={setValue}
      />
      <ItemLister filter={useFilter[value]} />
    </>
  )
}

export default App
