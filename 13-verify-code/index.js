function generateCode(code) {
  const firstStep = code.reduce((acc, cur, index) => {
    return index === 0 || index % 2 === 0 ? acc + cur : acc
  }, 0)

  const secondStep = firstStep * 3

  const thirdStep =
    secondStep +
    code.reduce((acc, cur, index) => {
      return index % 2 !== 0 ? acc + cur : acc
    }, 0)

  const fourthStep = thirdStep % 10

  return fourthStep === 0 ? 0 : 10 - fourthStep
}

function verifyCode(key) {
  const numberArray = key.toString().split('').map(Number)

  if (generateCode(numberArray) === 0) {
    return true
  } else {
    return false
  }
}

console.log(verifyCode(547020743789))
console.log(verifyCode(301354030348))
console.log(verifyCode(301354030349))
console.log(verifyCode(123456789872))
