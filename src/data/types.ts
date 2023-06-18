export type ButtonType = {
  label: string
  value: number
  isSelected: boolean
}

export type Slot = 'Head' | 'Chest' | 'Legs' | 'Boots' | 'Weapon' | 'Accessory'

export type Item = {
  metadata: {
    iconUrl: string
    id: number
    name: string
    slot: Slot
  }
  stats: {
    power?: number
    toughness?: number
    energyCap?: number
    energyPower?: number
    energyBars?: number
    magicCap?: number
    magicPower?: number
    magicBars?: number
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
  }
}
