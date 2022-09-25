const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "")
    string = string.replace(/\s/g, "");
    string = string.toLowerCase();
    var revArray = string.split("");
    revArray.reverse();
    var revString = revArray.join("");
    if (string === revString) {
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
