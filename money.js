const leftover = require("./moneymod");
let pay = 2500;
let bills = 2499;
let balance = leftover.getBalance (pay, bills);
console.log(`account: $${balance}`);