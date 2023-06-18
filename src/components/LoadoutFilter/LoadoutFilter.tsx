import React from 'react'
import { Slot } from '../../data/types'
import './loadoutFilter.css'
import { Button } from '@itwin/itwinui-react'

interface LoadoutFilterProps {
  slotFilter: Slot[]
  setSlotFilter: React.Dispatch<React.SetStateAction<Slot[]>>
}

const LoadoutFilter = (props: LoadoutFilterProps) => {
  const { slotFilter, setSlotFilter } = props

  const handleSetSlots = (slot: Slot) => {
    slotFilter.includes(slot)
      ? setSlotFilter(slotFilter.filter((slot_) => slot_ !== slot))
      : setSlotFilter([...slotFilter, slot])
  }

  const buttonStyle = {
    width: '90%',
    marginTop: '12px',
    backgroundColor: '#DDD',
    outline: '2px solid',
    lineHeight: 1.4,
  }

  //TODO: make each stat div into a button that filters????????!!!!!!!!
  return (
    <>
      <h3>Loadout Filter</h3>
      <div className="grid">
        <img
          className={
            slotFilter.includes('Accessory')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/AccessorySlot.png"
          onClick={() => handleSetSlots('Accessory')}
        ></img>
        <img
          className={
            slotFilter.includes('Head')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/HeadSlot.png"
          onClick={() => handleSetSlots('Head')}
        ></img>
        <img
          className={
            slotFilter.includes('Chest')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/ChestSlot.png"
          onClick={() => handleSetSlots('Chest')}
        ></img>
        <img
          className={
            slotFilter.includes('Legs')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/LegsSlot.png"
          onClick={() => handleSetSlots('Legs')}
        ></img>
        <img
          className={
            slotFilter.includes('Boots')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/BootsSlot.png"
          onClick={() => handleSetSlots('Boots')}
        ></img>
        <img
          className={
            slotFilter.includes('Weapon')
              ? 'item-icon loadout-slot'
              : 'item-icon loadout-slot deselected'
          }
          src="./slots/WeaponSlot.png"
          onClick={() => handleSetSlots('Weapon')}
        ></img>
      </div>
      <Button
        className="button text"
        styleType="borderless"
        style={buttonStyle}
        onClick={() =>
          setSlotFilter([
            'Head',
            'Chest',
            'Legs',
            'Boots',
            'Weapon',
            'Accessory',
          ])
        }
      >
        Reset
      </Button>
    </>
  )
}

export default LoadoutFilter
