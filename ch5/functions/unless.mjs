// function unless is another HOF because it takes
// in a function as a value represented by the param
// 'then'
export default function unless(test, then){
  // If the test is not true, then call the function 
  // bound to the binding 'then'
  if(!test) then()
}