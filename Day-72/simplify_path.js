
let simplifyPath = function(path) {
   let components = path.split('/');

   let stack = [];

   for(let component of components){
    if(component === '' || component === '.'){
         continue;
    }else if(component === '..'){
        if(stack.length > 0){
            stack.pop();
        }
    }else{
        stack.push(component);
    }
   }
   return '/' + stack.join('/');
};

// TC = O(n)
// SC = O(n)