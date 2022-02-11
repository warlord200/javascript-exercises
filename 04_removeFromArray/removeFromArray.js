


const removeFromArray = function(Array,...Args) {
    return Array.filter((value)=>{
        for(let i = 0;i < Args.length;i++){
            if(value === Args[i]){
                return false;
            }else{
                continue;
            }
        }
        return true
    })

};

// Do not edit below this line
module.exports = removeFromArray;
