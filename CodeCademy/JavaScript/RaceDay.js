let raceNumber = Math.floor(Math.random() * 1000); // selects a random race number
let registeredEarly = true;
let runnerAge = 18 // enter a runner's age

if (registeredEarly && runnerAge >= 18) {
  raceNumber += 1000;
  console.log(`Runner: ${raceNumber}, your race starts at: 9.30 AM.`)
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`Runner: ${raceNumber}, your race starts at: 11.00 AM`)
} else if (runnerAge < 18) {
  console.log(`Runner: ${raceNumber}, your race starts at: 12.30 AM`)
}
 
// at exactly 18 years old, you are an adult and so the equal to comparisons have been used
