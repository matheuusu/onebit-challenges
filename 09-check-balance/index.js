function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : count === array[index]
}

function checkBalance(letter) {
  const chars = letter.split('')
  const charCount = {}

  for (let i = 0; i < chars.length; i++) {
    const currentLetter = chars[i]

    charCount[currentLetter] = charCount[currentLetter]
      ? charCount[currentLetter] + 1
      : 1
  }

  return Object.values(charCount).every(compareCounts)
}

console.log(checkBalance('This is Thee'))
console.log(checkBalance('qqw'))
console.log(checkBalance('Lorem ipsum'))
console.log(checkBalance('QQwweerrttyy'))
