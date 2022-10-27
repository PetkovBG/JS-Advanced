function solve(fruit, weight, price){

let weightInKg = weight / 1000; 
let fundsNeeded = weightInKg * price; 

console.log(`I need $${fundsNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
solve('orange', 2500, 1.80)