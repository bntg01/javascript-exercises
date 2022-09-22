const sumAll = function(numFirst, numLast) {
    const arr = [];
    if (typeof numFirst === "number" && typeof numLast === "number" && numFirst >= 0 && numLast >=0) {
        if (numFirst < numLast) {        
            for (let i = numFirst; i <= numLast; i++) {
                arr.push(i);
            }
        }
        else if(numFirst > numLast) {
            for (let i = numFirst; i >= numLast; i--) {
                arr.push(i);
            }
        }
        return arr.reduce((a,b)=> a + b, 0);
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
