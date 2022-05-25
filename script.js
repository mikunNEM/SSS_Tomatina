const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TBEXMZF6J7VWNXBFQE2XXOOWFGBV3N7CQH5JI6A")
console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)
