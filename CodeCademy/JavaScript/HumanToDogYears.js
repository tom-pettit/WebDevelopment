// This is a variable containing my age
let myAge = 18;

// This value will change
let earlyYears = 2;

earlyYears*=10.5;

// We have already taken into account the first 2 years in the earlyYears variable
let laterYears = myAge - 2;

// After 2 years, every human year equates to 4 dog years
laterYears*=4;

// This gives your age in dog years using the code above
let myAgeInDogYears = earlyYears + laterYears

// Converting my name to all lowercase letters
let myName = 'Tom'.toLowerCase()

// Prints all this information to the console
console.log(`My name is ${myName}. I am a ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
