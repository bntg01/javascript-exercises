const findTheOldest = function(people) {
    var currentYear = new Date().getFullYear();
    
    function findAge(person) {
        if (person.hasOwnProperty("yearOfDeath") == true) {
            return person.yearOfDeath - person.yearOfBirth;
        }
        else {
            return currentYear - person.yearOfBirth;
        }
    }
    
    let oldestPerson = people[0];
    for (let i = 1; i < people.length - 1; i++) {
        if (findAge(oldestPerson) < findAge(people[i])) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
