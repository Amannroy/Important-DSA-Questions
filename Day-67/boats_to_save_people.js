function boatsSave(people, limit){
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
console.log(boatsSave([1,2], 3)); // 1

// TC = O(n log n)
// SC = O(1)