const countBs = (string) => {
  return countChars(string, "B");
};

const countChars = (string, char) => {
  //Same as countBs but counts given char
  let charCount = 0;
  let index = 0;
  while (index < string.length) {
    charCount += string[index++] === char ? 1 : 0;
  }
  return charCount;
};

console.log(countBs("Beans, B"));
