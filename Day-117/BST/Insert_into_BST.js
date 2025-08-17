let insertIntoBST = function(root, val) {
   let curr = root;
   let newNode = new TreeNode(val);

   if(root === null){
    return newNode;
   }

   while(curr !== null){
      if(val <= curr.val){
          if(curr.left !== null){
              curr = curr.left;
          }else{
              curr.left = newNode;
              break;
          }


      }

      if(val >= curr.val){
           if(curr.right !== null){
            curr = curr.right;
           }else{
            curr.right = newNode;
            break;
           }
      }
   }
   return root;
};