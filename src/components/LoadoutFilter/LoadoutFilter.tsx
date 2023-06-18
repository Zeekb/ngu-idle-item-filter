import React from 'react'
import { Slot } from '../../data/types'
import './loadoutFilter.css'
import { Button } from '@itwin/itwinui-react'

const buttonStyle = {
  width: '90%',
  marginTop: '12px',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface LoadoutFilterProps {
  slotFilter: Slot[]
  setSlotFilter: React.Dispatch<React.SetStateAction<Slot[]>>
}

const LoadoutFilter = (props: LoadoutFilterProps) => {
  const { slotFilter, setSlotFilter } = props
  const slotClassName = 'item-icon loadout-slot'
  const fullSlots: Slot[] = [
    'Accessory',
    'Head',
    'Chest',
    'Legs',
    'Boots',
    'Weapon',
  ]

  const handleSetSlots = (slot: Slot) => {
    slotFilter.includes(slot)
      ? setSlotFilter(slotFilter.filter((slot_) => slot_ !== slot))
      : setSlotFilter([...slotFilter, slot])
  }

  return (
    <>
      <h3>Loadout Filter</h3>
      <div className="grid">
        {fullSlots.map((slot) => (
          <img
            key={slot}
            className={
              slotFilter.includes(slot)
                ? slotClassName
                : slotClassName + ' deselected'
            }
            src={`./slots/${slot}Slot.png`}
            onClick={() => handleSetSlots(slot)}
          />
        ))}
      </div>
      <Button
        className="button text"
        styleType="borderless"
        style={buttonStyle}
        onClick={() => setSlotFilter(fullSlots)}
      >
        Reset
      </Button>
    </>
  )
}

export default LoadoutFilter
