function numRescueBoats(people, limit){
     people.sort((a,b) => a - b);
     let left = 0;
     let right = people.length-1;

     let boats = 0;

     while(left <= right){
        if(people[left] + people[right] <= limit){
            left++;
        }else{
            right--;
            boats++;
        }
     }
     return boats;
}
console.log(numRescueBoats([3,2,2,1], 3)); // 3

// TC = O(nlogn)
// SC = O(1)
