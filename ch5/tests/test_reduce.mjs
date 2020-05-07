import reduce from '../functions/reduce.mjs'

console.log(reduce([1,2,3], (a,b) => a + b, 0))
console.log(reduce([1,2,3], (a,b) => a + b))