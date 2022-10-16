function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true
}

function checkBalance(arg) {
  const chars = arg.split('')
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
