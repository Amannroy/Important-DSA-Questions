let candies = [1, 2, 3, 4, 5];
let k = 3; // window size

let sum = 0;

// Get sum of first window
for (let i = 0; i < k; i++) {
  sum += candies[i];
}
console.log("Sum of window:", sum);

// Slide the window
for (let i = k; i < candies.length; i++) {
  sum = sum - candies[i - k] + candies[i];
  console.log("Sum of window:", sum);
}
