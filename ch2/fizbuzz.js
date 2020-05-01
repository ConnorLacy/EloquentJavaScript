function fizzBuzz(){
  let count = 1;
  while(count<101){
    if(count%3==0){
      if(count%5==0){
        console.log(`Count: ${count} | FizzBuzz`)
      }
      else {
        console.log(`Count: ${count} | Fizz`)
      }
    }
    else if(count%5==0){
      console.log(`Count: ${count} | Buzz`)
    }
    else {
      console.log(`Count: ${count} | ${count}`)
    }
    count++;
  }
}

fizzBuzz()