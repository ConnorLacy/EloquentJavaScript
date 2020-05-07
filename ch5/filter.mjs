import {SCRIPTS} from './data/scripts.mjs';

function myFilter(array, test){
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
console.log('My filter:\n', myFilter(SCRIPTS, s => s.direction == "ttb"));
console.log('Built in filter:\n', SCRIPTS.filter(s => s.direction == "ttb"));

// For fun, I created a sample of the array prototype.
// This prototype has a method 'filter' which is bound 
// to a HOF that simulates the 'filter' of the array.prototype
// provided by JS
const myArray = {
  items: SCRIPTS,
  filter: function(test){
    let passed = []
    for(let element of this.items){
      if(test(element)){
        passed.push(element)
      }
    }
    return passed;
  }
}

console.log('My filter, my object:\n', myArray.filter(s => s.direction == "ttb"));