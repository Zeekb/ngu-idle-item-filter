export type Slot = 'Head' | 'Chest' | 'Legs' | 'Boots' | 'Weapon' | 'Accessory'

export type Item = {
  metadata: {
    iconUrl: string
    id: number
    name: string
    completed: boolean
    slot: Slot
    zone: number // TODO: set list of values to list of names
  }
  stats: {
    power?: number
    toughness?: number
    energyCap?: number
    energyPower?: number
    energyBars?: number
    energySpeed?: number
    magicCap?: number
    magicPower?: number
    magicBars?: number
    magicSpeed?: number
    drop?: number
    gold?: number
    respawn?: number
    advancedTraining?: number
    seedGain?: number
    moveCooldown?: number
    wandoosSpeed?: number
    nguSpeed?: number
    augSpeed?: number
    beardSpeed?: number
    questDrop?: number
    cooking?: number
  }
}

export type ButtonType = {
  label: string
  value: number
  isSelected: boolean
}
