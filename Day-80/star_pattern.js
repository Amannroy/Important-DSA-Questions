// 1. ****
//    ****
//    ****
//    ****

// let n = 4;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<n;j++){
//         row = row + "*";
//     }
//     console.log(row);
    
// }


//2. *
//   **
//   ***
//   ****

// let n = 4;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<i+1;j++){
//         row = row + "*";
//     }
//     console.log(row);
// }

//3. 1
//   12
//   123
//   1234
//   12345

// let n=5;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<i+1;j++){
//         row = row + (j+1);
//     }
//     console.log(row);
    
// }


//4. 1
//   22
//   333
//   4444
//   55555

// let n = 5;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<i+1;j++){
//         row = row + (i+1);
//     }
//     console.log(row);
    
// }

//5.   12345
    // 1234
    // 123
    // 12
    // 1

    // let n = 5;
    // for(let i=0;i<n;i++){
    //     let row = "";
    //     for(let j=0;j<(n-i);j++){
    //         row = row + (j+1);
    //     }
    //     console.log(row);
        
    // }

//6.    *****
    //  ****
    //  ***
    //  **
    //  *

    // let n=5;
    // for(let i=0;i<n;i++){
    //     let row = "";
    //     for(let j=0;j<(n-i);j++){
    //         row = row + "*";
    //     }
    //     console.log(row);
        
    // }

// //7.    *
//        **
//       ***
//      **** 
//     *****

// let n=5;
// for(let i=0;i<n;i++){
//     let row = "";
//     //    Adding empty spaces for dots
//     for(let j=0;j<n-(i+1);j++){
//         row = row + " ";
//     }
//     //    Adding stars
//     for(let k=0;k<i+1;k++){
//         row = row + "*";
//     }
//     console.log(row);
// }

// 8. 1
//    10
//    101
//    1010
//    10101
//    101010

// let n=5;
// for(let i=0;i<n;i++){
//     let row = "", toggle = 1;
// for(let j=0;j<i+1;j++){
//        row = row + toggle;

//        // Switch the toggle
//        if(toggle === 1) {
//         toggle = 0;
//        }
//        else {
//         toggle = 1;
//        }
//     }
//     console.log(row);
    
// }


//9. 
//   1
//   01
//   010
//   1010
//   10101

// let n=5;
// let toggle = 1;
// for(let i=0;i<n;i++){
//     let row = "";
// for(let j=0;j<i+1;j++){
//        row = row + toggle;

//        // Switch the toggle
//        if(toggle === 1) {
//         toggle = 0;
//        }
//        else {
//         toggle = 1;
//        }
//     }
//     console.log(row);
    
// }