// 1st Approch-> Brute Force
function longestConsequetive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let currentStreak = 1;
  let maxStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }
  return maxStreak;
}
console.log(longestConsequetive([100, 4, 200, 1, 3, 2])); // 4

// TC = O(n log n)
// SC = O(1)

// 2nd Approach -> HashSet
let longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums);

  let maxLength = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      maxLength = Math.max(maxLength, currentStreak);
    }
  }
  return maxLength;
};

// TC = O(n)
// SC = O(1)
