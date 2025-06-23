function calPoints(operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    let ops = operations[i];

    if (!isNaN(ops)) {
      stack.push(Number(ops));
    } else if (ops === "C") {
      stack.pop();
    } else if (ops === "D") {
      let temp = stack[stack.length - 1];
      stack.push(temp * 2);
    } else {
      let last = stack[stack.length - 1];
      let secondlast = stack[stack.length - 2];
      stack.push(last + secondlast);
    }
  }
  let totalSum = 0;
  for (let i = 0; i < stack.length; i++) {
    totalSum += stack[i];
  }
  return totalSum;
}
console.log(calPoints(["5", "2", "C", "D", "+"])); // 30

// TC = O(n)
// SC = O(n)
