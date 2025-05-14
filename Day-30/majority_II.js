// Brute Force

function findMajority(arr) {
  // Your code goes here
  let n = arr.length;
  let votes = Math.floor(n / 3);
  let freqMap = {};
  let result = [];

  for (let i = 0; i < n; i++) {
    let num = arr[i];
    if (freqMap[num] === undefined) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }

  for (let num in freqMap) {
    if (freqMap[num] > votes) {
      result.push(Number(num));
    }
  }
  return result;
}
console.log(findMajority([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]));

// TC = O(n)
// SC = O(n)
