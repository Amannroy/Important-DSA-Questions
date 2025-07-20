let combine = function(n, k) {
   let result = [];

   function backtrack(start, path){
      // Base Case
      if(path.length === k){
        result.push([...path]);
        return;
      }

      for(let i=start;i<=n;i++){
         path.push(i);
         backtrack(i+1, path);
         path.pop();
      }
   }
   backtrack(1, []);
   return result;
};

// TC = O(C(n,k) * k)
// SC = O(k) + O(C(n, k) × k)