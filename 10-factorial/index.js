function factorial(number) {
  const bigNum = BigInt(number)

  if (bigNum === 0n) {
    return 1n
  } else {
    return bigNum * factorial(bigNum - 1n)
  }
}

console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(32))
console.log(factorial(9n))
