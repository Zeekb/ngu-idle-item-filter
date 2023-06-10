import React from 'react'
import { Item } from '../types'

interface ItemContainerProps {
  item: Item
}

const ItemContainer = (props: ItemContainerProps) => {
  const { item } = props
  return (
    <div key={item.name} className="item-container">
      <ul>
        <div className="title-container">
          <li>
            {item.id} | {item.name}
          </li>
          <li>{item.slot}</li>
        </div>
        <div className="icon-container">
          <img className="item-icon" src={item.iconUrl}></img>
        </div>
        <div className="boosts">
          {item.power && (
            <li>
              <div className="prop">Power </div>
              <div className="stat">{item.power}</div>
            </li>
          )}
          {item.toughness && (
            <li>
              <div className="prop">Toughness</div>
              <div className="stat">{item.toughness}</div>
            </li>
          )}
          {item.energy && item.energy.cap && (
            <li>
              <div className="prop">Energy Cap</div>
              <div className="stat">{item.energy.cap}%</div>
            </li>
          )}
          {item.energy && item.energy.power && (
            <li>
              <div className="prop">Energy Power </div>
              <div className="stat">{item.energy.power}%</div>
            </li>
          )}
          {item.energy && item.energy.bars && (
            <li>
              <div className="prop">Energy Bars </div>
              <div className="stat">{item.energy.bars}%</div>
            </li>
          )}
          {item.magic && item.magic.cap && (
            <li>
              <div className="prop">Magic Cap </div>
              <div className="stat">{item.magic.cap}%</div>
            </li>
          )}
          {item.magic && item.magic.power && (
            <li>
              <div className="prop">Magic Power </div>
              <div className="stat">{item.magic.power}%</div>
            </li>
          )}
          {item.magic && item.magic.bars && (
            <li>
              <div className="prop">Magic Bars </div>
              <div className="stat">{item.magic.bars}%</div>
            </li>
          )}
          {item.drop && (
            <li>
              <div className="prop">Drop </div>
              <div className="stat">{item.drop}%</div>
            </li>
          )}
          {item.gold && (
            <li>
              <div className="prop">Gold </div>
              <div className="stat">{item.gold}%</div>
            </li>
          )}
          {item.respawn && (
            <li>
              <div className="prop">Respawn </div>
              <div className="stat">{item.respawn}%</div>
            </li>
          )}
          {item.advancedTraining && (
            <li>
              <div className="prop">Advanced Training </div>
              <div className="stat">{item.advancedTraining}%</div>
            </li>
          )}
          {item.seedGain && (
            <li>
              <div className="prop">Seed Gain </div>
              <div className="stat">{item.seedGain}%</div>
            </li>
          )}
          {item.moveCooldown && (
            <li>
              <div className="prop">Move Cooldown </div>
              <div className="stat">{item.moveCooldown}%</div>
            </li>
          )}
          {item.wandoosSpeed && (
            <li>
              <div className="prop">Wandoos Speed </div>
              <div className="stat">{item.wandoosSpeed}%</div>
            </li>
          )}
          {item.nguSpeed && (
            <li>
              <div className="prop">NGU Speed </div>
              <div className="stat">{item.nguSpeed}%</div>
            </li>
          )}
          {item.augSpeed && (
            <li>
              <div className="prop">Aug Speed </div>
              <div className="stat">{item.augSpeed}%</div>
            </li>
          )}
          {item.beardSpeed && (
            <li>
              <div className="prop">Beard Speed </div>
              <div className="stat">{item.beardSpeed}%</div>
            </li>
          )}
        </div>
      </ul>
    </div>
  )
}

export default ItemContainer
