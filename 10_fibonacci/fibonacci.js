const fibonacci = function(num) {
    if(num <0 ){
        return "OOPS"
    }else{}
    let fiboSeq = [0]
    for(let a = 0; a <= num; a++){
        if(a == 0){
            fiboSeq.push(a + 1)

        }else{
            fiboSeq.push(fiboSeq[a] + fiboSeq[a -1])
        }
    }
    return fiboSeq[num]


};

// Do not edit below this line
module.exports = fibonacci;
