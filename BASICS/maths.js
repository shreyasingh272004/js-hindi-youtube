//numbers
const score=40

const balance=new Number(100)
console.log(balance);
console.log(balance.toString())
typeof(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const num=23.8966
console.log(num.toPrecision(3));//round off
const n=123.322
console.log(n.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString())//this will convert the num to numbers in US number system
console.log(hundreds.toLocaleString('en-IN'))//this will convert the num to numbers in indian number system

//MATHS
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,4,5,7,3))
console.log(Math.max(4,5,6,4,2))
console.log(Math.random())
console.log(Math.random()*10+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))


