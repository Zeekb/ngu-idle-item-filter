import React from 'react'
import { Button, Label } from '@itwin/itwinui-react'

import zones from '../utils/zones-list.json'

const buttonStyle = {
  width: '60px',
  margin: '6px',
  fontWeight: '600',
  fontSize: 'larger',
  backgroundColor: '#DDD',
  outline: '2px solid',
  lineHeight: 1.4,
}

interface ZoneFilterProps {
  zone: number
  setZone: React.Dispatch<React.SetStateAction<number>>
}

const ZoneFilter = (props: ZoneFilterProps) => {
  const { zone, setZone } = props

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Button
        onClick={() => {
          if (zone > 0) setZone(1)
        }}
        style={buttonStyle}
      >
        {'<'}
      </Button>
      <Button
        onClick={() => {
          if (zone > 1) setZone(zone - 1)
        }}
        style={buttonStyle}
      >
        -
      </Button>
      <Label
        className="text"
        style={{
          padding: '0 20px',
          marginTop: '10px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        {zones[zone]}
      </Label>
      <Button
        onClick={() => {
          if (zone < zones.length - 1) setZone(zone + 1)
        }}
        style={buttonStyle}
      >
        +
      </Button>
      <Button
        onClick={() => {
          if (zone < zones.length - 1) setZone(zones.length - 1)
        }}
        style={buttonStyle}
      >
        {'>'}
      </Button>
    </div>
  )
}

export { ZoneFilter }
