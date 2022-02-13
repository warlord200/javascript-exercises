const palindromes = function (stringInput) {
    let stringNoPunc = stringInput.toLowerCase().replace(/ /g, "").replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");
    let stringInputArray = stringNoPunc.split('');
    let newString = []
    for(let i = stringInputArray.length - 1; i >= 0;i-- ){
        newString.push(stringInputArray[i])
    }
    return JSON.stringify(stringInputArray) === JSON.stringify(newString);

};

// Do not edit below this line
module.exports = palindromes;
