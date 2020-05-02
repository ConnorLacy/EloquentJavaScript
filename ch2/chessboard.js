const makeBoard = (size) => {
  let boardString = "";
  let row = 0;
  while (row++ < size) {
    let rowString = "";
    let col = 0;
    while (col++ < size) {
      if (row % 2 === 0) {
        rowString += col % 2 === 0 ? " " : "#";
      } else {
        rowString += col % 2 === 0 ? "#" : " ";
      }
    }
    boardString += rowString + "\n";
  }
  return boardString;
};

console.log(makeBoard(10));
