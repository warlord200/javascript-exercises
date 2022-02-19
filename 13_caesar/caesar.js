const caesar = function(string,shiftValue) {
    const stringSplit = string.split('');
    const shiftConstant = shiftValue;
    const convertedStr = []
    const convertedBack = []
    const stringABC = 'abcdefghijklmnopqrstuvwxyz'

    // Converting to unicode //
    for(i = 0;i < stringSplit.length ;i++){
      convertedStr.push(stringSplit[i].charCodeAt());
      
    }
  
  // Below is encrypting //
  
    for(i = 0;i < stringSplit.length ;i++){
      if(inRange(convertedStr[i],65,90) || inRange(convertedStr[i],97,122)){
          if (inRange(convertedStr[i],65,90)){
              convertedStr[i] = isMoreOrLess(65,90)
              continue;
          }else{
              convertedStr[i] = isMoreOrLess(97,122)
              continue;
          }
          
      }
       
      
    }

  
  
  // Converting from uni back to str //
  
    for(i = 0;i < stringSplit.length ;i++){
      //convertedStr[i] = String.fromCharCode();
      convertedBack.push(String.fromCharCode(convertedStr[i]))
      
    }
    return convertedBack.join('');

    //functions//
    function inRange(x, min, max) {
        return ((x-min)*(x-max) <= 0);
    }

    function isMoreOrLess(lowerLimit,upperLimit){
        if(shiftValue > 0){
        let sum = convertedStr[i] + shiftValue;
        while(sum > upperLimit){
            sum -= 26
        }
        return sum;
    }else{
        let loss = convertedStr[i] + shiftValue;
        while(loss < lowerLimit){
            loss +=26

        }
        return loss;
    }
    }

    



};


// Do not edit below this line
module.exports = caesar;
