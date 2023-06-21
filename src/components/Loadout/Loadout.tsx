import React, { useEffect, useRef } from 'react'
import { Item, Slot } from '../../utils/types'
import './loadout.css'

interface LoadoutProps {
  loadout: Item[]
}

const Loadout = (props: LoadoutProps) => {
  const index = useRef(0)
  const accessories = props.loadout.filter(
    (item) => item.metadata.slot === 'Accessory',
  )

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
      if (item) url = item.metadata.iconUrl
    }
    return url
  }

  return (
    <div className="loadout-grid">
      <div className="loadout-row">
        <img className="item-icon loadout" src={getSlotUrl('Accessory')} />
        <img className="item-icon loadout" src={getSlotUrl('Head')} />
      </div>
      <div className="loadout-row">
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

export { Loadout }
