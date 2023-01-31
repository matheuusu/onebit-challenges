const Pilot = require('./pilot')

const firstPilot = new Pilot('John', 'Doe', '1977-05-25')
const secondPilot = new Pilot('Hal', 'Jordan', '1995-09-02')
const thirdPilot = new Pilot('Carol', 'Danvers', '1968-10-17')

firstPilot.generateFlyingLicense()
secondPilot.generateFlyingLicense()
thirdPilot.generateFlyingLicense()

console.log(firstPilot)
console.log(secondPilot)
console.log(thirdPilot)
