const repeatString = function(string, num) {
    
    let tempString = string;

    switch(true) {
        default:
            for(let i = 1; i < num; i++) {
                string = string + tempString;
            }
            return string;
        case (num === 0):
            return '';
        case (num < 0):
            return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
