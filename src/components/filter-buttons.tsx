/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ButtonGroup, Button } from '@itwin/itwinui-react'
import { ButtonType } from '../utils/types'
import buttonData from '../utils/button-list.json'

const buttonGroupStyle = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 100px 0 100px',
}

const buttonStyle = {
  width: '160px',
  margin: '6px',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface FilterButtonsProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

const FilterButtons = (props: FilterButtonsProps) => {
  const [buttons, setButtons] = useState(buttonData as ButtonType[])

  const handleClick = (value: number) => {
    setButtons((prevButtons) => {
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
    <div>
      <ButtonGroup style={buttonGroupStyle}>
        {buttons.map(
          ({ label, value, isSelected, backgroundColor }: ButtonType) => {
            const style = { ...buttonStyle, backgroundColor: backgroundColor }
            return (
              <Button
                className={isSelected ? 'text' : 'text deselected'}
                styleType="borderless"
                style={style}
                key={label}
                onClick={() => {
                  handleClick(value)
                  props.setIndex(value)
                }}
              >
                {label}
              </Button>
            )
          },
        )}
      </ButtonGroup>
    </div>
  )
}

export { FilterButtons }
