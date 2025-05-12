// Brute Force
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
// TC = O(n)
// SC = O(n)

// Optimize ->Reverse Using Half-Length Swap (Two-Pointer Technique):

function reverseArray(arr) {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // swap arr[i] with arr[n - 1 - i]
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    return arr;
}

// TC = O(n)
// SC = O(1)

// Two pointers
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

// TC = O(n)
// SC = O(1)

