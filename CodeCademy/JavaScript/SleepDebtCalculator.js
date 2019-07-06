function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 9;
      break;
    case 'wednesday':
      return 10;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 9;
      break
  }
}

function getActualSleepHours() {
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
}

function getIdealSleepHours() {
  const idealHours = 10;
  return idealHours * 7
}

function calculateSleepDebt() {
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours()
  
  difference = (idealSleepHours - actualSleepHours)
  console.log(difference)
  // The problem here is if actualSleepHours is greater than idealSleepHours then it will return a negative number, which doesn't make sense. You should use a modulus function for this.
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${difference} hours more sleep than needed!`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${difference} hours too little sleep. Get some rest!`)
  }
}

calculateSleepDebt()
