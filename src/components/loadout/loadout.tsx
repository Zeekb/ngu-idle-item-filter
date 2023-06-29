import { Button } from '@itwin/itwinui-react'
import React, { useEffect, useRef } from 'react'
import { Item, Slot } from '../../utils/types'
import { getBoostName } from '../item-lister/item-container'
import Sorts from '../../utils/sorts'
import './loadout.css'

const buttonStyle = {
  width: '200px',
  marginTop: '12px',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface LoadoutProps {
  slots: Slot[]
  setSlots: React.Dispatch<React.SetStateAction<Slot[]>>
  loadout: Item[]
}

const Loadout = (props: LoadoutProps) => {
  const { slots, setSlots } = props
  const sorts = new Sorts()
  const slotClassName = 'item-icon '
  const fullSlots: Slot[] = [
    'Accessory',
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
  ]
  const index = useRef(0)
  const accessories = props.loadout.filter(
    (item) => item.metadata.slot === 'Accessory',
  )
  const loadoutStats = props.loadout
    .map(({ stats }) => {
      return Object.entries(stats)
    })
    .flat()

  const statMap = new Map(loadoutStats)
  let statsCombined: [string, number][] = []
  const getCombinedStats = () => {
    for (const [key] of statMap) {
      statsCombined = statsCombined
        .concat([
          [
            key,
            loadoutStats
              .filter((stat) => stat[0] === key)
              .reduce((partialSum, a) => partialSum + a[1], 0),
          ],
        ])
        .sort(
          (a, b) =>
            sorts.statSortOrder.indexOf(a[0]) -
            sorts.statSortOrder.indexOf(b[0]),
        )
    }
  }

  const handleSetSlots = (slot: Slot) => {
    slots.includes(slot)
      ? setSlots(slots.filter((slot_) => slot_ !== slot))
      : setSlots([...slots, slot])
  }

  getCombinedStats()

  useEffect(() => {
    index.current = 0
  }, [props.loadout])

  const getSlotUrl = (slot: Slot): string => {
    let url = `./slots/${slot}Slot.png`
    if (slot === 'Accessory' && accessories.length > index.current) {
      url = accessories[index.current].metadata.iconUrl
      index.current += 1
    } else {
      const item = props.loadout.find(
        (item) => item.metadata.slot === slot && slot !== 'Accessory',
      )
      if (item) {
        url = item.metadata.iconUrl
      }
    }
    return url
  }

  const getSlot = (slot: Slot) => {
    return (
      <img
        className={
          slots.includes(slot) ? slotClassName : slotClassName + 'deselected'
        }
        onClick={() => handleSetSlots(slot)}
        src={getSlotUrl(slot)}
      />
    )
  }

  return (
    <>
      <h2 className="heading">Slot Filter</h2>

      <div className="loadout-grid">
        <div className="loadout-row">
          {getSlot('Accessory')}
          {getSlot('Head')}
        </div>
        <div className="loadout-row">
          {getSlot('Accessory')}
          {getSlot('Accessory')}
          {getSlot('Chest')}
          {getSlot('Weapon')}
        </div>
        <div className="loadout-row three-slots">
          {getSlot('Accessory')}
          {getSlot('Accessory')}
          {getSlot('Legs')}
        </div>
        <div className="loadout-row three-slots">
          {getSlot('Accessory')}
          {getSlot('Accessory')}
          {getSlot('Boots')}
        </div>
      </div>
      <Button
        className="text"
        styleType="borderless"
        style={buttonStyle}
        onClick={() => setSlots(fullSlots)}
      >
        Reset
      </Button>
      <div className="loadout-stat-container">
        <h3 className="heading">Stat Boosts</h3>
        {statsCombined.map((stat) => (
          <React.Fragment key={stat[0]}>
            <div className="prop">{getBoostName(stat[0])}</div>
            <div className="stat finished">
              {stat[1].toLocaleString()}
              {stat[0] === 'power' || stat[0] === 'toughness' ? '' : '%'}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export { Loadout }
