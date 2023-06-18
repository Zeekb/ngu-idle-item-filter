/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ButtonGroup, Button } from '@itwin/itwinui-react'
import { ButtonType } from '../../data/types'
import buttonData from '../../data/buttonList.json'

const buttonGroupStyle = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 100px 10px 100px',
}

const buttonStyle = {
  width: '160px',
  margin: '6px',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface FilterButtonsProps {
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const FilterButtons = (props: FilterButtonsProps) => {
  const [buttons, setButtons] = useState(buttonData as ButtonType[])

  const handleClick = (value: number) => {
    setButtons((prevButtons) => {
      console.log(prevButtons)
      const resetButtons = prevButtons.map((button) =>
        button.isSelected === true ? { ...button, isSelected: false } : button,
      )
      return resetButtons.map((button) => {
        return button.value === value
          ? { ...button, isSelected: !button.isSelected }
          : button
      })
    })
  }

  return (
    <ButtonGroup className="button-group" style={buttonGroupStyle}>
      {buttons.map((button: ButtonType) => (
        <Button
          className={
            button.isSelected ? 'button text' : 'button text deselected'
          }
          styleType="borderless"
          style={buttonStyle}
          key={button.label}
          onClick={() => {
            handleClick(button.value)
            props.setValue(button.value)
          }}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default FilterButtons
