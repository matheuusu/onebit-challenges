function coins(value) {
  const coinsValue = [500, 100, 25, 10, 5, 1]
  const countCoins = {}

  for (let coin of coinsValue) {
    let quantityCoin = Math.floor(value / coin)
    countCoins[coin] = quantityCoin
    value = value % coin
  }

  return countCoins
}

console.log(coins(478))
console.log(coins(384))
console.log(coins(1378))
