let goodNodes = function(root) {
   let count = 0;

   function dfs(node, max){
      if(node === null) return 0;

      if(node.val >= max){
        count++;
      }
      let newMax = Math.max(max, node.val);

      dfs(node.left, newMax);
      dfs(node.right, newMax);

   }
   dfs(root, root.val);
   return count;
}