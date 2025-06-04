// Brute Force
function hcf(a,b){
    
    let result = Math.min(a,b);
    
    while(result > 0){
        if(a % result === 0 && b % result === 0){
            break;
        }
        result--;
    }
    return result;
}
console.log(hcf(36,60)); // 12


// Optimize-> Euclidian Algorithm
function HCFEuclidian(a,b){
   if(a === 0){
    return b;
   }
   if(b === 0){
    return a;
   }
   if(a === b){
    return a;
   }
   if(a > b){
    return HCFEuclidian(a-b, b);
   }else{
    return HCFEuclidian(a, b-a);
   }
}
console.log(HCFEuclidian(36,60));

