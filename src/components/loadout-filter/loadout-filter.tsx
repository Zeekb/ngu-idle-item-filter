import React from 'react'
import { Slot } from '../../utils/types'
import './loadout-filter.css'
import { Button } from '@itwin/itwinui-react'

const buttonStyle = {
  width: '90%',
  marginTop: '12px',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface LoadoutFilterProps {
  slots: Slot[]
  setSlots: React.Dispatch<React.SetStateAction<Slot[]>>
}

const LoadoutFilter = (props: LoadoutFilterProps) => {
  const { slots, setSlots } = props
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
    slots.includes(slot)
      ? setSlots(slots.filter((slot_) => slot_ !== slot))
      : setSlots([...slots, slot])
  }

  return (
    <>
      <h3 className="heading">Loadout Filter</h3>
      <div className="grid">
        {fullSlots.map((slot) => (
          <img
            key={slot}
            className={
              slots.includes(slot)
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
        onClick={() => setSlots(fullSlots)}
      >
        Reset
      </Button>
    </>
  )
}

export { LoadoutFilter }
