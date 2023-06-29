import { Item } from './types'

export default class Sorts {
  sortOnId = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.metadata.id && b.metadata.id) {
        return a.metadata.id > b.metadata.id ? 1 : -1
      }
      return 1
    })
  }

  sortOnPower = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.power && b.stats.power) {
        return a.stats.power < b.stats.power ? 1 : -1
      }
      return 1
    })
  }

  sortOnToughness = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.toughness && b.stats.toughness) {
        return a.stats.toughness < b.stats.toughness ? 1 : -1
      }
      return 1
    })
  }

  sortOnDrop = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.drop && b.stats.drop) {
        return a.stats.drop < b.stats.drop ? 1 : -1
      }
      return 1
    })
  }

  sortOnGold = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.gold && b.stats.gold) {
        return a.stats.gold < b.stats.gold ? 1 : -1
      }
      return 1
    })
  }

  sortOnEnergyCap = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.energyCap && b.stats.energyCap) {
        return a.stats.energyCap < b.stats.energyCap ? 1 : -1
      }
      return 1
    })
  }

  sortOnEnergyPower = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.energyPower && b.stats.energyPower) {
        return a.stats.energyPower < b.stats.energyPower ? 1 : -1
      }
      return 1
    })
  }

  sortOnEnergyBars = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.energyBars && b.stats.energyBars) {
        return a.stats.energyBars < b.stats.energyBars ? 1 : -1
      }
      return 1
    })
  }

  sortOnMagicCap = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.magicCap && b.stats.magicCap) {
        return a.stats.magicCap < b.stats.magicCap ? 1 : -1
      }
      return 1
    })
  }

  sortOnMagicPower = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.magicPower && b.stats.magicPower) {
        return a.stats.magicPower < b.stats.magicPower ? 1 : -1
      }
      return 1
    })
  }

  sortOnMagicBars = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.magicBars && b.stats.magicBars) {
        return a.stats.magicBars < b.stats.magicBars ? 1 : -1
      }
      return 1
    })
  }

  sortOnRespawn = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.respawn && b.stats.respawn) {
        return a.stats.respawn < b.stats.respawn ? 1 : -1
      }
      return 1
    })
  }

  sortOnAdvancedTraining = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.advancedTraining && b.stats.advancedTraining) {
        return a.stats.advancedTraining < b.stats.advancedTraining ? 1 : -1
      }
      return 1
    })
  }

  sortOnSeedGain = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.seedGain && b.stats.seedGain) {
        return a.stats.seedGain < b.stats.seedGain ? 1 : -1
      }
      return 1
    })
  }

  sortOnMoveCooldown = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.moveCooldown && b.stats.moveCooldown) {
        return a.stats.moveCooldown < b.stats.moveCooldown ? 1 : -1
      }
      return 1
    })
  }

  sortOnWandoosSpeed = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.wandoosSpeed && b.stats.wandoosSpeed) {
        return a.stats.wandoosSpeed < b.stats.wandoosSpeed ? 1 : -1
      }
      return 1
    })
  }

  sortOnNguSpeed = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.nguSpeed && b.stats.nguSpeed) {
        return a.stats.nguSpeed < b.stats.nguSpeed ? 1 : -1
      }
      return 1
    })
  }

  sortOnAugSpeed = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.augSpeed && b.stats.augSpeed) {
        return a.stats.augSpeed < b.stats.augSpeed ? 1 : -1
      }
      return 1
    })
  }

  sortOnBeardSpeed = (list: Item[]): Item[] => {
    return list.sort((a, b) => {
      if (a.stats.beardSpeed && b.stats.beardSpeed) {
        return a.stats.beardSpeed < b.stats.beardSpeed ? 1 : -1
      }
      return 1
    })
  }

  statSortOrder = [
    'power',
    'toughness',
    'energyCap',
    'energyPower',
    'energyBars',
    'energySpeed',
    'magicCap',
    'magicPower',
    'magicBars',
    'magicSpeed',
    'drop',
    'gold',
    'respawn',
    'advancedTraining',
    'seedGain',
    'moveCooldown',
    'wandoosSpeed',
    'nguSpeed',
    'augSpeed',
    'beardSpeed',
    'questDrop',
    'cooking',
  ]
}
