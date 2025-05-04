// Brute Force
// function countDistinctInWindows(arr, k) {
//     const result = []; // This will store the distinct count for each window

//     // Outer loop to slide the window from index 0 to n - k
//     for (let i = 0; i <= arr.length - k; i++) {
//         const map = new Map(); // Map to store frequency of elements in current window

//         // Inner loop to process current window of size k
//         for (let j = i; j < i + k; j++) {
//             // If the element is already in the map, increase its count
//             if (map.has(arr[j])) {
//                 map.set(arr[j], map.get(arr[j]) + 1);
//             } else {
//                 // Otherwise, insert it with frequency 1
//                 map.set(arr[j], 1);
//             }
//         }

//         // map.size gives the number of unique keys → distinct elements
//         result.push(map.size);
//     }

//     return result;
// }
// console.log(countDistinctInWindows([1,2,1,3,4,2,3], 4)); // [ 3, 4, 4, 3 ]

// TC = O(n * k)
// SC = O(n)


// Optimize 

function countDistinctInWindows(arr, k) {
    const map = new Map(); // to store element frequencies
    const result = [];
    let distinctCount = 0;

    // Process the first window
    for (let i = 0; i < k; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
            distinctCount++;
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    result.push(distinctCount);

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        const outElem = arr[i - k]; // element going out
        const inElem = arr[i];      // element coming in

        // Remove the frequency of outgoing element
        map.set(outElem, map.get(outElem) - 1);
        if (map.get(outElem) === 0) {
            map.delete(outElem);
            distinctCount--;
        }

        // Add incoming element
        if (!map.has(inElem)) {
            map.set(inElem, 1);
            distinctCount++;
        } else {
            map.set(inElem, map.get(inElem) + 1);
        }

        result.push(distinctCount);
    }

    return result;
}
console.log(countDistinctInWindows([1,2,1,3,4,2,3], 4)); //[ 3, 4, 4, 3 ]

// TC = O(n)
// SC = O(n)