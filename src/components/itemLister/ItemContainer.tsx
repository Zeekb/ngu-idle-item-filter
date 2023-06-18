import React from 'react'
import { Item } from '../../data/types'

interface ItemContainerProps {
  item: Item
}

const ItemContainer = (props: ItemContainerProps) => {
  const { item } = props
  return (
    <div key={item.metadata.name} className="item-container">
      <div style={{ height: '100%' }}>
        <div className="title-container">
          <div>
            {item.metadata.id} | {item.metadata.name}
          </div>
        </div>
        <div className="icon-container">
          <img
            className="item-icon"
            src={item.metadata.iconUrl}
            alt={item.metadata.name}
          ></img>
          <div>{item.metadata.slot}</div>
        </div>
        <div className="boosts">
          {item.stats.power && (
            <div>
              <div className="prop">Power </div>
              <div className="stat">{item.stats.power}</div>
            </div>
          )}
          {item.stats.toughness && (
            <div>
              <div className="prop">Toughness</div>
              <div className="stat">{item.stats.toughness}</div>
            </div>
          )}
          {item.stats.energyCap && (
            <div>
              <div className="prop">Energy Cap</div>
              <div className="stat">{item.stats.energyCap}%</div>
            </div>
          )}
          {item.stats.energyPower && (
            <div>
              <div className="prop">Energy Power </div>
              <div className="stat">{item.stats.energyPower}%</div>
            </div>
          )}
          {item.stats.energyBars && (
            <div>
              <div className="prop">Energy Bars </div>
              <div className="stat">{item.stats.energyBars}%</div>
            </div>
          )}
          {item.stats.magicCap && (
            <div>
              <div className="prop">Magic Cap </div>
              <div className="stat">{item.stats.magicCap}%</div>
            </div>
          )}
          {item.stats.magicPower && (
            <div>
              <div className="prop">Magic Power </div>
              <div className="stat">{item.stats.magicPower}%</div>
            </div>
          )}
          {item.stats.magicBars && (
            <div>
              <div className="prop">Magic Bars </div>
              <div className="stat">{item.stats.magicBars}%</div>
            </div>
          )}
          {item.stats.drop && (
            <div>
              <div className="prop">Drop </div>
              <div className="stat">{item.stats.drop}%</div>
            </div>
          )}
          {item.stats.gold && (
            <div>
              <div className="prop">Gold </div>
              <div className="stat">{item.stats.gold}%</div>
            </div>
          )}
          {item.stats.respawn && (
            <div>
              <div className="prop">Respawn </div>
              <div className="stat">{item.stats.respawn}%</div>
            </div>
          )}
          {item.stats.advancedTraining && (
            <div>
              <div className="prop">Advanced Training </div>
              <div className="stat">{item.stats.advancedTraining}%</div>
            </div>
          )}
          {item.stats.seedGain && (
            <div>
              <div className="prop">Seed Gain </div>
              <div className="stat">{item.stats.seedGain}%</div>
            </div>
          )}
          {item.stats.moveCooldown && (
            <div>
              <div className="prop">Move Cooldown </div>
              <div className="stat">{item.stats.moveCooldown}%</div>
            </div>
          )}
          {item.stats.wandoosSpeed && (
            <div>
              <div className="prop">Wandoos Speed </div>
              <div className="stat">{item.stats.wandoosSpeed}%</div>
            </div>
          )}
          {item.stats.nguSpeed && (
            <div>
              <div className="prop">NGU Speed </div>
              <div className="stat">{item.stats.nguSpeed}%</div>
            </div>
          )}
          {item.stats.augSpeed && (
            <div>
              <div className="prop">Aug Speed </div>
              <div className="stat">{item.stats.augSpeed}%</div>
            </div>
          )}
          {item.stats.beardSpeed && (
            <div>
              <div className="prop">Beard Speed </div>
              <div className="stat">{item.stats.beardSpeed}%</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemContainer
