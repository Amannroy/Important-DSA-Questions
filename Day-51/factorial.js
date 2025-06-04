// Iterative
function isFactorial(num){
  let i = 1;
  let reesult = 1;

  while(i <= num){
      reesult *= i;
      i += 1;
  }
  return reesult;
}
console.log(isFactorial(5)); // 120


// Recursive
function isFactorialR(num){
    // Base Case
    if(num === 0 || num === 1){
        return 1;
    } 
    return num * isFactorialR(num - 1);
}
console.log(isFactorialR(5)); // 120

