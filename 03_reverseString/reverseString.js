const reverseString = function(str) {
    let NewArray = [];
    const strSplit = str.split("");
    console.log(strSplit);
    for(let i = strSplit.length - 1; i >= 0 ;i--){
        NewArray.push(strSplit[i])
    }
    joinedArray = NewArray.join('');
    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
