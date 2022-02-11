const sumAll = function(num1,num2){
    let sumNum = 0;
    if(typeof(num1 && num2) !== 'number'|| (num1 || num2 ) < 0){
        return 'ERROR';
    }else{
        if(num1 > num2){
            for(let i = num1; i >= num2;i--){
                sumNum += i 
            }
        
        }else{
        for(let i = num1; i <= num2;i++){
            sumNum += i 
        }
}
    return sumNum

    }
};

// Do not edit below this line
module.exports = sumAll;
