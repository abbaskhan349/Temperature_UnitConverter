//todays forecast value = 293k
const kelvin = 293;
//celsius value is the kelvin minus 273
let celsius = kelvin - 273;

//equation for finding fahrenheit value
var fahrenheit = celsius * (9/5) + 32;
//answer will be in decimal so convert it into integer by roundup
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//answer will be 68 (as of 293)
