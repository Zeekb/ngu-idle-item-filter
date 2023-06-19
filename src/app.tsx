import React, { useState } from 'react'
import {
  ItemLister,
  getUnfinished,
  getBySlots,
  getByBoost,
  getByZone,
  getLoadout,
} from './components//item-lister/item-lister'
import Sorts from './utils/sorts'
import FilterButtons from './components/loadout-filter/filter-buttons'
import { Item, Slot } from './utils/types'
import LoadoutFilter from './components/loadout-filter/loadout-filter'
import itemData from './utils/item-list.json'
import './app.css'
import Loadout from './components/loadout/loadout'
import { Button, Label } from '@itwin/itwinui-react'

const buttonStyle = {
  width: '60px',
  margin: '6px',
  fontWeight: '600',
  fontSize: 'larger',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

const App = () => {
  const sorts = new Sorts()

  const [value, setValue] = useState(0)
  const [slotFilter, setSlotFilter] = useState([
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
    'Accessory',
  ] as Slot[])

  const items = itemData as Item[]
  const zones: string[] = [
    '0. None',
    '1. Safe Zone: Awakening Site',
    '2. Tutorial Zone',
    '3. Sewers',
    '4. Forest',
    '5. Cave of Many Things',
    '6. The Sky',
    '7. High Security Base',
    '8. Gordon Ramsay Bolton',
    '9. Clock Dimension',
    '10. Grand Corrupted Tree',
    '11. The 2D Universe',
    '12. Ancient Battlefield',
    '13. Jake from Accounting',
    '14. A Very Strange Place',
    '15. Mega Lands',
    '16. UUG, The Unmentionable',
    '17. The Beardverse',
    '18. Walderp',
    '19. Badly Drawn World',
    '20. Boring-Ass Earth',
    '21. The Beast',
  ]

  const [zone, setZone] = useState(zones.length - 1)

  const filteredItems = (boost: string) =>
    getByZone(getByBoost(getBySlots(items, slotFilter), boost), zone)

  const useFilter: Item[][] = [
    getByZone(sorts.sortOnId(getBySlots(items, slotFilter)), zone),
    sorts.sortOnPower(filteredItems('power')),
    sorts.sortOnEnergyCap(filteredItems('energyCap')),
    sorts.sortOnEnergyPower(filteredItems('energyPower')),
    sorts.sortOnEnergyBars(filteredItems('energyBars')),
    sorts.sortOnGold(filteredItems('gold')),
    sorts.sortOnDrop(filteredItems('drop')),
    getByZone(
      sorts.sortOnId(getUnfinished(getBySlots(items, slotFilter))),
      zone,
    ),
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
  const itemFilter = useFilter[value]

  return (
    <div className="app-container">
      <div className="filter-container">
        <div className="buttons-container text">
          <FilterButtons setValue={setValue} />
        </div>
        <div
          style={{
            display: 'inline-flex',
            margin: '0 calc(30% + 3px)',
          }}
        >
          <Button
            onClick={() => {
              if (zone > 0) setZone(1)
            }}
            style={buttonStyle}
          >
            {'<'}
          </Button>
          <Button
            onClick={() => {
              if (zone > 0) setZone(zone - 1)
            }}
            style={buttonStyle}
          >
            -
          </Button>
          <Label
            className="text"
            style={{
              padding: '0 20px',
              marginTop: '10px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            {zones[zone]}
          </Label>
          <Button
            onClick={() => {
              if (zone < zones.length - 1) setZone(zone + 1)
            }}
            style={buttonStyle}
          >
            +
          </Button>
          <Button
            onClick={() => {
              if (zone < zones.length - 1) setZone(zones.length - 1)
            }}
            style={buttonStyle}
          >
            {'>'}
          </Button>
        </div>
        <div className="items-container text">
          <ItemLister filter={itemFilter} />
        </div>
      </div>
      <div className="item-container loadout-container text">
        <LoadoutFilter slotFilter={slotFilter} setSlotFilter={setSlotFilter} />
        <Loadout loadout={getLoadout(itemFilter)} />
      </div>
    </div>
  )
}

export default App
