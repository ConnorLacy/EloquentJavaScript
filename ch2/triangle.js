function triangle() {
  for (let count = 1; count < 8; count++) {
    output = "#";
    for (let anotherCount = 1; anotherCount < count; anotherCount++) {
      output += "#";
    }
    console.log(output);
  }
}

triangle();
