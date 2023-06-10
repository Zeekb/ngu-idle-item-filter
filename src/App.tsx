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
    { value: 3, label: 'Gold' },
    { value: 4, label: 'Energy cap' },
    { value: 5, label: 'Energy power' },
    { value: 6, label: 'Magic power' },
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
