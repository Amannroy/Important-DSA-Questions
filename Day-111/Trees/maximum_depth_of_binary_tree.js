function maximumDepth(root){
    if(root === null)  return 0;

    let left = maximumDepth(root.left);
    let right = maximumDepth(root.right);

    return 1 + Math.max(left, right);
}