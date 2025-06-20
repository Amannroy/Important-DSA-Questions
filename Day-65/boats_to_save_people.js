// Sort the peple by weight then use 2 pointers to find the heaviest and lightest person then if heaviest and lightest person can fit in same boat. In any case, the heaviest person will be on the boat right-- increment the number of boats boats++.

function numRescueBoats(people, limit){
  people.sort((a,b) => a - b);

  let left = 0;
  let right = people.length-1;
  let boat = 0;

  while(left <= right){
     if(people[left] + people[right] <= limit){
        left++;
     }

     right--;

     boat++;
  }
  return boat;
}
console.log(numRescueBoats([1,2], 3)); // 1

// TC = O(n log n)
// SC = O(1)