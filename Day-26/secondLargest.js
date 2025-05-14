function getSecondLargest(arr) {
  // code here
  let largest = -Infinity, secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? -1 : secondLargest;
}

console.log(getSecondLargest([12, 35, 1, 10, 34, 1])); // 34

// TC = O(n)
// SC = O(1)
