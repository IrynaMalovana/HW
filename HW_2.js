'use strict'
//1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const initials = userNames.map(element => {
  const words = element.split(' ');
  const initials = words.map(word => word.charAt(0).toUpperCase()).join('.');
  return initials;
}).sort();

console.log(initials);

//2
const currentMaxValue = 4589;
const reverseStringMaxValue = currentMaxValue.toString().split('').reverse().join('');
const reverseMaxValue = parseInt(reverseStringMaxValue);

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue);

//3
const resultsArray = [1, 2, [3, [4]]];
const productOfArray = resultsArray
.flat(Infinity)
.reduce((accum, element) => {
    return element * accum;
}, 1);
console.log(productOfArray);