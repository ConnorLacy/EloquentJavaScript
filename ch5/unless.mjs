import repeat from './repeat.mjs'

// function unless is another HOF because it takes
// in a function as a value represented by the param
// 'then'
function unless(test, then){
  // If the test is not true, then call the function 
  // bound to the binding 'then'
  if(!test) then()
}

// Top level is using the pre-defined HOF repeat
repeat(3, n=>{
  // Second level is using another HOF bound to binding
  // 'unless'
  unless(n%2==1, () => {
    console.log(n, "is even")
  })
})
