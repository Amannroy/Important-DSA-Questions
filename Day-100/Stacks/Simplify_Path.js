function simplifyPath(path) {
  let stack = [];
  let components = path.split("/");

  for (let component of components) {
    if (component === "" || component === ".") {
      continue;
    } else if (component === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(component);
    }
  }
  return "/" + stack.join("/");
}
console.log(simplifyPath("/home/user/Documents/../Pictures")); ///home/user/Pictures

// TC = O(n)
// SC = O(n)
