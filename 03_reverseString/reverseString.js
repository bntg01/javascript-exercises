const reverseString = function(string) {
    
    let strlen = string.length;

    let strArray = Array.from(string);

    const newStr = new Array(strlen);

    for (let i = 0; i < strlen; i++) {
        newStr.push(strArray.pop());
    }

    return newStr.join("");

};

// Do not edit below this line
module.exports = reverseString;
