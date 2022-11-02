const privateKeyToAddress = require('ethereum-private-key-to-address')

console.log(privateKeyToAddress(Buffer.from('4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d', 'hex'))) // '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
console.log(privateKeyToAddress('4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d')) // '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
console.log(privateKeyToAddress('0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1e')) // '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'

console.log('0000000000000000000000000000000000000000000000000000000000000000'.length)

console.log(privateKeyToAddress("0000000000000000000000000000000000000000000000000000000000000fed"))
console.log("first")
console.log(privateKeyToAddress("1111111111111111111111111111111111111111111111111111111111111111"))
console.log(privateKeyToAddress("75475838fa36758ed364789c3574ab45745767bf36e365867656545678236119"))
console.log(privateKeyToAddress("3141592653589793238462643383279502884197169399375105820974944592"))
console.log(privateKeyToAddress("2718281828459045235360287471352662497757247093699959574966967627"))

let thisNumber = 213
console.log("Now i'm going to hexify this number : ", thisNumber)
thisNumber = thisNumber.toString(16)
console.log("Hex form is : ", thisNumber)
thisNumber = parseInt(thisNumber, 16)
console.log("finally decimal form is : ", thisNumber)


