import React, { useEffect, useRef } from 'react'
import { Item, Slot } from '../../utils/types'
import { getBoostName } from '../item-lister/item-container'
import './loadout.css'

interface LoadoutProps {
  loadout: Item[]
}

const Loadout = (props: LoadoutProps) => {
  const index = useRef(0)
  const accessories = props.loadout.filter(
    (item) => item.metadata.slot === 'Accessory',
  )
  const loadoutStats = props.loadout
    .map(({ stats }) => {
      return Object.entries(stats)
    })
    .flat()

  const statMap = new Map(loadoutStats)
  let statsCombined: [string, number][] = []
  const getCombinedStats = () => {
    for (const [key] of statMap) {
      statsCombined = statsCombined.concat([
        [
          key,
          loadoutStats
            .filter((stat) => stat[0] === key)
            .reduce((partialSum, a) => partialSum + a[1], 0),
        ],
      ])
    }
  }

  // TODO: combined stats not ordered in the way I want them, although they are not ordered anywhere its just expected theyll be right
  //          see stat boosts in power and toughness with no weapon or accessories, same items but ordered differently
  getCombinedStats()

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
    <>
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
      <div className="loadout-stat-container">
        <h3 className="heading">Stat Boosts</h3>
        {statsCombined.map((stat) => (
          <React.Fragment key={stat[0]}>
            <div className="prop">{getBoostName(stat[0])}</div>
            <div className="stat finished">
              {stat[1].toLocaleString()}
              {stat[0] === 'power' || stat[0] === 'toughness' ? '' : '%'}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export { Loadout }
