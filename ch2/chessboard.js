const makeBoard = (size) => {
  let boardString = "";
  let row = 0;
  while (row++ < size) {
    let rowString = "";
    //Even rows have space then hash
    if (row % 2 === 0) {
      let col = 0;
      while (col++ < size) {
        // Even column has space
        if (col % 2 === 0) {
          rowString += " ";
        } else {
          rowString += "#";
        }
      }
    }
    //Odd rows have hash then space
    else {
      let col = 0;
      while (col++ < size) {
        if (col % 2 === 0) {
          rowString += "#";
        } else {
          rowString += " ";
        }
      }
    }
    boardString += rowString + "\n"
  }
  return boardString;
};

console.log(makeBoard(8));
