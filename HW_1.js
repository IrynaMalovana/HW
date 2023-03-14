'use strict'


//1.Повернути негативний
function makeNegative(num) {
  return num <= 0 ? num : -num;
};
  console.log(makeNegative(-9));

//2.Протилежне число
function oppositeNum(number) {
  return -number;
}
console.log(oppositeNum(9)); 
 
//3.Парні чи непарнi
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
 };
 console.log(evenOrOdd(7));

//4.Перетворіть число на рядок
function numToString(num) {
    return num.toString();
  };
  console.log(numToString(-10));

//5.Перетворення логічних значень на рядки «Так» або «Ні»
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
  };
  console.log(boolToWord(9>8));

//6.Перевернуті рядки
function reverseWord(word) {
  return word.split('').reverse().join('');
};
console.log(reverseWord('world'));

  