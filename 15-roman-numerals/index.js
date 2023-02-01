function romanNumeralToDecimal(accum, curr, index, array) {
  return curr < array[index + 1] ? accum - curr : accum + curr
}

function romanNumerals(string) {
  const numeralsArray = string.split('')

  const romanDecimalMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const decimalsArray = numeralsArray.map(numeral => romanDecimalMap[numeral])

  return decimalsArray.reduceRight(romanNumeralToDecimal)
}

console.log(romanNumerals('XLVII'))
console.log(romanNumerals('CDXXXVIII'))
console.log(romanNumerals('CMIX'))
console.log(romanNumerals('MMMCMXCIX'))
