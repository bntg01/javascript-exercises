const getTheTitles = function(objArr) {
    let titleArray = [];

    for(let i = 0; i <= objArr.length-1; i++) {
        titleArray.push(objArr[i].title);
    }
    
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
