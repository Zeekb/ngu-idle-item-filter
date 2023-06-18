export type ButtonType = {
  label: string
  value: number
}

export type Slot = 'Head' | 'Chest' | 'Legs' | 'Boots' | 'Weapon' | 'Accessory'

export type Item = {
  iconUrl: string
  id: number
  name: string
  slot: Slot
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
