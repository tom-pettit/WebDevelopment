//The forecast is 293K. This stays constant so is initialised with const
const kelvin = 293;

//Celsius is 273 degrees less than kelvin
const celsius = kelvin - 273

//This is the formula for converting celsius to farenheit. This farenheit variable is about to be rounded, so let is used
let fahrenheit = (celsius * 1.8) + 32

//Often, you get a decimal for the fahrenheit temperature using this formula, so we round it to the closest integer less than or equal to this decimal value
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let Newton = celsius * 33/100
Newton = Math.floor(Newton)
console.log(`This temperature in the Newton scale is ${Newton} Newtons`)
