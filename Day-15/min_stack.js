let MinStack = function(){
  this.stack1 = [];
  this.stack2 = [];
}

MinStack.prototype.push = function(val){
  this.stack1.push(val);
  if(this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= val){
    this.stack2.push(val);
  }
} 

MinStack.prototype.pop = function(){
   if(this.stack1[this.stack1.length - 1] === this.stack2[this.stack2.length - 1]){
     this.stack2.pop();
   }
   this.stack1.pop();
}

MinStack.prototype.top = function(){
    return this.stack1[this.stack1.length - 1];
}

MinStack.prototype.getMin = function(){
      return this.stack2[this.stack2.length - 1];
}