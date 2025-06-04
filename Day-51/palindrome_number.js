function palindrome(num){
   let rev = 0;
    let temp = num;

   while(temp !== 0){
     let n = temp % 10;
     temp = parseInt(temp / 10);
     rev = rev * 10 + n;
   }
   return rev === num;
}
console.log(palindrome(121)); // true
