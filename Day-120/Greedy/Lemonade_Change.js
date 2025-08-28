let lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    let len = bills.length;

    for(let i=0;i<len;i++){
        if(bills[i] === 5){
            five++;
        }else if(bills[i] === 10){
            if(five !== 0){
                ten++;
                five--;
            }else{
                return false;
            }
        }else{
            if(bills[i] === 20){
                if(five > 0 && ten > 0){
                    five -= 1;
                    ten -= 1;
                }else if(five >= 3){
                    five -= 3; 
                } 
                else{
                    return false;
                }
            }
        }
    }
    return true;
};