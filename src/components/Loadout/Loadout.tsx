import React, { useEffect, useRef } from 'react'
import { Item, Slot } from '../../data/types'
import './loadout.css'

interface LoadoutProps {
  loadout: Item[]
}

const Loadout = (props: LoadoutProps) => {
  const accessories = props.loadout.filter((item) => item.slot === 'Accessory')
  const index = useRef(0)

  useEffect(() => {
    index.current = 0
  }, [props.loadout])

  const getSlotUrl = (slot: Slot): string => {
    let url = `./slots/${slot}Slot.png`

    if (slot === 'Accessory' && accessories.length > index.current) {
      url = accessories[index.current].iconUrl
      index.current += 1
    } else {
      const item = props.loadout.find(
        (item) => item.slot === slot && slot !== 'Accessory',
      )
      if (item) {
        url = item.iconUrl
      }
    }

    return url
  }

  return (
    <div className="loadout-grid">
      <div className="loadout-row two-slots">
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Head')} />
      </div>
      <div className="loadout-row four-slots">
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Chest')} />
        <img className="item-icon loadout" src={getSlotUrl('Weapon')} />
      </div>
      <div className="loadout-row three-slots">
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Legs')} />
      </div>
      <div className="loadout-row three-slots">
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Boots')} />
      </div>
    </div>
  )
}

export default Loadout
