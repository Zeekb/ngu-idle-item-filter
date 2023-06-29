import React from 'react'
import { Item } from '../../utils/types'
import Sorts from '../../utils/sorts'

interface ItemContainerProps {
  item: Item
}

const getBoostName = (boost: string) => {
  const name = boost
    .split(/(?=[A-Z])/)
    .toString()
    .replace(',', ' ')
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const ItemContainer = (props: ItemContainerProps) => {
  const {
    item: { metadata, stats },
  } = props
  const sorts = new Sorts()

  return (
    <div key={metadata.name} className="item-container">
      <div style={{ height: '100%' }}>
        <div className="title-container">
          {metadata.id} | {metadata.name}
        </div>
        <div className="icon-container">
          <img
            className="item-icon"
            src={metadata.iconUrl}
            alt={metadata.name}
          />
          <div>{metadata.slot}</div>
        </div>
        <div className="boosts">
          {Object.entries(stats)
            .sort(
              (a, b) =>
                sorts.statSortOrder.indexOf(a[0]) -
                sorts.statSortOrder.indexOf(b[0]),
            )
            .map(([statName, statValue]) => {
              return (
                statValue && (
                  <React.Fragment key={statName}>
                    <div className="prop">{getBoostName(statName)}</div>
                    <div
                      className={metadata.completed ? 'stat finished' : 'stat'}
                    >
                      {statValue.toLocaleString()}
                      {statName === 'power' || statName === 'toughness'
                        ? ''
                        : '%'}
                    </div>
                  </React.Fragment>
                )
              )
            })}
        </div>
      </div>
    </div>
  )
}

export { ItemContainer, getBoostName }
