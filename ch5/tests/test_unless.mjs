import repeat from '../functions/repeat.mjs';
import unless from '../functions/unless.mjs';

// Top level is using the pre-defined HOF repeat
repeat(3, n=>{
  // Second level is using another HOF bound to binding
  // 'unless'
  unless(n%2==1, () => {
    console.log(n, "is even")
  })
})