function testFunction(arr) {
  let testArr = [...arr];
  let finalArr = [];

  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i + 1]) {
      if (finalArr.length === 0) {
        finalArr.push(testArr[i] + testArr[i + 1]);
      } else {
        finalArr.push(
          testArr[i] + testArr[i + 1] + finalArr[finalArr.length - 1]
        );
      }
      i += 1;
    }
  }

  return finalArr;
}

let array = [2, 3, 4, 5, 7, 3, 4, 6, 5, 2];
console.log(testFunction(array));

// entrada[2, 3, 4, 5, 7, 3] saida [5, 14, 24]
// entrada[2, 3, 4, 5, 7, 3, 4, 6] saida [5, 14, 24 , 34]
// entrada[2, 3, 4, 5, 7, 3, 4, 6 , 5] saida [5, 14, 24 , 34]
// entrada[2, 3, 4, 5, 7, 3, 4, 6 , 5 , 2] saida [5, 14, 24 , 34 , 41]
