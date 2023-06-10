/* eslint-disable react/prop-types */
import React from 'react'
import { ButtonGroup, Button } from '@itwin/itwinui-react'
import { ButtonType } from '../data/types'
import buttonData from '../data/buttonList.json'

interface FilterButtonsProps {
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const FilterButtons = (props: FilterButtonsProps) => {
  const buttons: ButtonType[] = buttonData as ButtonType[]

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
    outline: '4px solid',
    fontWeight: 600,
    lineHeight: 1.4,
    fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
  }

  return (
    <ButtonGroup className="button-group" style={buttonGroupStyle}>
      {buttons.map((button: ButtonType) => (
        <Button
          className="button"
          styleType="borderless"
          style={buttonStyle}
          key={button.label}
          onClick={() => {
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
