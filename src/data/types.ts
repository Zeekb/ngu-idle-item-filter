export type Stat = {
  bars?: number
  power?: number
  cap?: number
}

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
  energy?: Stat
  magic?: Stat
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
