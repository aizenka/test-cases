const HEX_BASE = 16
const DEFAULT_RGB_VALUE = 0
const BRIGHTNESS_THRESHOLD = 125
const BLACK_COLOR = '#000000'
const WHITE_COLOR = '#FFFFFF'

const RED_WEIGHT = 299
const GREEN_WEIGHT = 587
const BLUE_WEIGHT = 114
const BRIGHTNESS_DIVISOR = 1000

const getContrastColor = (hexColor: string) => {
  const matchResult = hexColor.match(/\w\w/g)
  const [r, g, b] = (
    matchResult
      ? matchResult.map((hexValue) => parseInt(hexValue, HEX_BASE))
      : [DEFAULT_RGB_VALUE, DEFAULT_RGB_VALUE, DEFAULT_RGB_VALUE]
  )

  const brightness = (
    (r * RED_WEIGHT + g * GREEN_WEIGHT + b * BLUE_WEIGHT) / BRIGHTNESS_DIVISOR
  )

  return brightness > BRIGHTNESS_THRESHOLD ? BLACK_COLOR : WHITE_COLOR
}

export default getContrastColor
