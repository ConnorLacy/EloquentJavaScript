const countBs = (string) => {
  // Count how many uppercase B's are in the given string
  let numBs = 0;
  let index = 0;
  while (index < string.length) {
    numBs += string[index] === "B" ? 1 : 0;
    index++;
  }
  // Return count
  return numBs;
};

console.log(countBs('BeanB'))
