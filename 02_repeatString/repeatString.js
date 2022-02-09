const repeatString = function(str,no) {
    let string = '';
    if (no < 0 ){
        return 'ERROR';
    }else{
    for(let i = 1;i <= no;i++){
        string += str
    }
    return string
}

};

// Do not edit below this line
module.exports = repeatString;
