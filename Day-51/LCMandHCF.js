function LCMAndHCF(a,b){
   return a * b / gcd(a,b);
}

function gcd(a,b){
    return b === 0 ? a : gcd(b, a % b);
}
console.log(LCMAndHCF(10,15)); //30

// LCM = 30
// HCF = 5
