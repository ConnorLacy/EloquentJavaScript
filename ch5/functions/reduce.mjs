export default function reduce(array, combine, start=0){
  let current = start;
  for(let element of array){
    current = combine(current, element);
  }
  return current
}