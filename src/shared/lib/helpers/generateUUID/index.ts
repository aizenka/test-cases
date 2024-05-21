const generateUUID = (): string => {
  const chars: string = '0123456789abcdef'
  let uuid: string = ''

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-'
    } else if (i === 14) {
      uuid += '4'
    } else {
      const randomIndex = Math.floor(Math.random() * 16)
      const char = (
        (i === 19)
          ? ((randomIndex & 0x3) | 0x8).toString(16)
          : chars[randomIndex]
      )
      uuid += char
    }
  }

  return uuid
}

export default generateUUID
