'use strict'


//1.Повернути негативний
function makeNegative(num) {
    if (num >= 0) {
      return -num;
    } else {
      return num;
    }
  }
  console.log(makeNegative(-9));

//2.Протилежне число
const num = 6;
const oppositeNum = -num;
console.log(oppositeNum); 
 
//3.Парні чи непарнi
function evenOrOdd(num) {
    if(num % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  console.log(evenOrOdd(10));

//4.Перетворіть число на рядок
function numToString(num) {
    return num.toString();
  }
  console.log(numToString(-10));

//5.Перетворення логічних значень на рядки «Так» або «Ні»
function BoolToWord(bool) {
    return bool ? 'Yes' : 'No';
  }
  console.log(BoolToWord(9>8));
  