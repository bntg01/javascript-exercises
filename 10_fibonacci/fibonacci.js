const fibonacci = function(num) {
    if (num > 0) {
        num = Number(num);
        let fibArray = [1, 1];
        for (i = 0; i <= num; i++) {
            let newNum = fibArray[i] + fibArray[i+1];
            fibArray.push(newNum);
        }
        return fibArray[num-1];
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
