import React from 'react'
import { Item } from '../data/types'

interface ItemContainerProps {
  item: Item
}

const ItemContainer = (props: ItemContainerProps) => {
  const { item } = props
  return (
    <div key={item.name} className="item-container">
      <div style={{ height: '100%' }}>
        <div className="title-container">
          <div>
            {item.id} | {item.name}
          </div>
          <div>{item.slot}</div>
        </div>
        <div className="icon-container">
          <img className="item-icon" src={item.iconUrl}></img>
        </div>
        <div className="boosts">
          {item.power && (
            <div>
              <div className="prop">Power </div>
              <div className="stat">{item.power}</div>
            </div>
          )}
          {item.toughness && (
            <div>
              <div className="prop">Toughness</div>
              <div className="stat">{item.toughness}</div>
            </div>
          )}
          {item.energy && item.energy.cap && (
            <div>
              <div className="prop">Energy Cap</div>
              <div className="stat">{item.energy.cap}%</div>
            </div>
          )}
          {item.energy && item.energy.power && (
            <div>
              <div className="prop">Energy Power </div>
              <div className="stat">{item.energy.power}%</div>
            </div>
          )}
          {item.energy && item.energy.bars && (
            <div>
              <div className="prop">Energy Bars </div>
              <div className="stat">{item.energy.bars}%</div>
            </div>
          )}
          {item.magic && item.magic.cap && (
            <div>
              <div className="prop">Magic Cap </div>
              <div className="stat">{item.magic.cap}%</div>
            </div>
          )}
          {item.magic && item.magic.power && (
            <div>
              <div className="prop">Magic Power </div>
              <div className="stat">{item.magic.power}%</div>
            </div>
          )}
          {item.magic && item.magic.bars && (
            <div>
              <div className="prop">Magic Bars </div>
              <div className="stat">{item.magic.bars}%</div>
            </div>
          )}
          {item.drop && (
            <div>
              <div className="prop">Drop </div>
              <div className="stat">{item.drop}%</div>
            </div>
          )}
          {item.gold && (
            <div>
              <div className="prop">Gold </div>
              <div className="stat">{item.gold}%</div>
            </div>
          )}
          {item.respawn && (
            <div>
              <div className="prop">Respawn </div>
              <div className="stat">{item.respawn}%</div>
            </div>
          )}
          {item.advancedTraining && (
            <div>
              <div className="prop">Advanced Training </div>
              <div className="stat">{item.advancedTraining}%</div>
            </div>
          )}
          {item.seedGain && (
            <div>
              <div className="prop">Seed Gain </div>
              <div className="stat">{item.seedGain}%</div>
            </div>
          )}
          {item.moveCooldown && (
            <div>
              <div className="prop">Move Cooldown </div>
              <div className="stat">{item.moveCooldown}%</div>
            </div>
          )}
          {item.wandoosSpeed && (
            <div>
              <div className="prop">Wandoos Speed </div>
              <div className="stat">{item.wandoosSpeed}%</div>
            </div>
          )}
          {item.nguSpeed && (
            <div>
              <div className="prop">NGU Speed </div>
              <div className="stat">{item.nguSpeed}%</div>
            </div>
          )}
          {item.augSpeed && (
            <div>
              <div className="prop">Aug Speed </div>
              <div className="stat">{item.augSpeed}%</div>
            </div>
          )}
          {item.beardSpeed && (
            <div>
              <div className="prop">Beard Speed </div>
              <div className="stat">{item.beardSpeed}%</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemContainer
