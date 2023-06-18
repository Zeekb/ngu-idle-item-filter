import { Item } from './types'

export const sortOnId = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.id && b.id) {
      return a.id > b.id ? 1 : -1
    }
    return 1
  })
}

export const sortOnPower = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.power && b.power) {
      return a.power < b.power ? 1 : -1
    }
    return 1
  })
}

export const sortOnToughness = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.toughness && b.toughness) {
      return a.toughness < b.toughness ? 1 : -1
    }
    return 1
  })
}

export const sortOnDrop = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.drop && b.drop) {
      return a.drop < b.drop ? 1 : -1
    }
    return 1
  })
}

export const sortOnGold = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.gold && b.gold) {
      return a.gold < b.gold ? 1 : -1
    }
    return 1
  })
}

export const sortOnEnergyCap = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.energyCap && b.energyCap) {
      return a.energyCap < b.energyCap ? 1 : -1
    }
    return 1
  })
}

export const sortOnEnergyPower = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.energyPower && b.energyPower) {
      return a.energyPower < b.energyPower ? 1 : -1
    }
    return 1
  })
}

export const sortOnEnergyBars = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.energyBars && b.energyBars) {
      return a.energyBars < b.energyBars ? 1 : -1
    }
    return 1
  })
}

export const sortOnMagicCap = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.magicCap && b.magicCap) {
      return a.magicCap < b.magicCap ? 1 : -1
    }
    return 1
  })
}

export const sortOnMagicPower = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.magicPower && b.magicPower) {
      return a.magicPower < b.magicPower ? 1 : -1
    }
    return 1
  })
}

export const sortOnMagicBars = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.magicBars && b.magicBars) {
      return a.magicBars < b.magicBars ? 1 : -1
    }
    return 1
  })
}

export const sortOnRespawn = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.respawn && b.respawn) {
      return a.respawn < b.respawn ? 1 : -1
    }
    return 1
  })
}

export const sortOnAdvancedTraining = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.advancedTraining && b.advancedTraining) {
      return a.advancedTraining < b.advancedTraining ? 1 : -1
    }
    return 1
  })
}

export const sortOnSeedGain = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.seedGain && b.seedGain) {
      return a.seedGain < b.seedGain ? 1 : -1
    }
    return 1
  })
}

export const sortOnMoveCooldown = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.moveCooldown && b.moveCooldown) {
      return a.moveCooldown < b.moveCooldown ? 1 : -1
    }
    return 1
  })
}

export const sortOnWandoosSpeed = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.wandoosSpeed && b.wandoosSpeed) {
      return a.wandoosSpeed < b.wandoosSpeed ? 1 : -1
    }
    return 1
  })
}

export const sortOnNguSpeed = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.nguSpeed && b.nguSpeed) {
      return a.nguSpeed < b.nguSpeed ? 1 : -1
    }
    return 1
  })
}

export const sortOnAugSpeed = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.augSpeed && b.augSpeed) {
      return a.augSpeed < b.augSpeed ? 1 : -1
    }
    return 1
  })
}

export const sortOnBeardSpeed = (list: Item[]): Item[] => {
  return list.sort((a, b) => {
    if (a.beardSpeed && b.beardSpeed) {
      return a.beardSpeed < b.beardSpeed ? 1 : -1
    }
    return 1
  })
}
