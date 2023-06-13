import React from 'react'
import { Slot } from '../../data/types'
import './loadoutFilter.css'
import { Button } from '@itwin/itwinui-react'

interface LoadoutFilterProps {
  slots: Slot[]
  setSlots: React.Dispatch<React.SetStateAction<Slot[]>>
}

const LoadoutFilter = (props: LoadoutFilterProps) => {
  const { slots, setSlots } = props

  const handleSetSlots = (slot: Slot) => {
    slots.includes(slot)
      ? setSlots(slots.filter((slot_) => slot_ !== slot))
      : setSlots([...slots, slot])
  }

  const buttonStyle = {
    width: '90%',
    marginTop: '12px',
    backgroundColor: '#DDD',
    outline: '4px solid',
    lineHeight: 1.4,
  }

  //TODO: make them buttons that get grayed out when deselected
  //TODO: make the grayed out buttons in paint

  //TODO: rename all images to id
  //TODO: make each stat div into a button that filters????????!!!!!!!!
  return (
    <>
      <h3>Loadout Filter</h3>
      <div className="grid">
        <img
          className="item-icon loadout-slot accessory"
          src="Empty Accessory Slot.png"
          onClick={() => handleSetSlots('Accessory')}
        ></img>
        <img
          className="item-icon loadout-slot head"
          src="Empty Head Slot.png"
          onClick={() => handleSetSlots('Head')}
        ></img>
        <img
          className="item-icon loadout-slot chest"
          src="Empty Armor Slot.png"
          onClick={() => handleSetSlots('Chest')}
        ></img>
        <img
          className="item-icon loadout-slot legs"
          src="Empty Pants Slot.png"
          onClick={() => handleSetSlots('Legs')}
        ></img>
        <img
          className="item-icon loadout-slot boots"
          src="Empty Boots Slot.png"
          onClick={() => handleSetSlots('Boots')}
        ></img>
        <img
          className="item-icon loadout-slot weapon"
          src="Empty Weapon Slot.png"
          onClick={() => handleSetSlots('Weapon')}
        ></img>
      </div>
      <Button
        className="button text"
        styleType="borderless"
        style={buttonStyle}
        onClick={() =>
          setSlots(['Head', 'Chest', 'Legs', 'Boots', 'Weapon', 'Accessory'])
        }
      >
        Reset
      </Button>
    </>
  )
}

export default LoadoutFilter
