let nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            let top = stack.pop();
            map.set(top, num);
        }
        stack.push(num);
    }
    while (stack.length > 0) {
        let top = stack.pop();
        map.set(top, -1);
    }

    let result = [];
    for (let num of nums1) {
        result.push(map.get(num));
    }
    return result;
};

// TC = O(n)
// SC = O(n)