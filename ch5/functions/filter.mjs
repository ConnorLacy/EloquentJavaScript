export default function myFilter(array, test){
  // Make this a pure function by leaving original array 
  // alone. 'immutable'
  let passed = []
  for(let element of array){
    if(test(element)){
      passed.push(element)
    }
  }
  return passed
}