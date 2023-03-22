'use strict'

//1.Задача про обчислення різниці часу 

function DurationBetweenDates (dateString1 = '16 Mar 2000', dateString2 = '16 Mar 2023', durationUnit = 'seconds') {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const differenceDates = Math.abs(date1-date2);
  const durationUnitObj= {
          days: 864*10**5,
          minutes: 60000,
          hours: 36*10**5,
          seconds : 1000
  };  
  return `${differenceDates/durationUnitObj[durationUnit]} ${durationUnit}`
}
 console.log(DurationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
 console.log(DurationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));

// 2.Задача про перетворення об'єкту

function optimizer(data) {
  return Object.keys(data).reduce((updatedData, key) => {
    const updatedKey = key.toLowerCase();
    const updatedValue = parseFloat(data[key]).toFixed(2);
    updatedData[updatedKey] = updatedValue;
    return updatedData;
  }, {});
}
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};
const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);

// 3.Задача про рекурсію та ітерацію
//рекурсивно

const recursiveOddSumTo = (number) => {
  if (number <= 0) {
    return 0; 
  } 
  if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  } 
    return number + recursiveOddSumTo(number - 2);
  
}
console.log(recursiveOddSumTo(1)) 
console.log(recursiveOddSumTo(10))

//ітеративно

function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(iterativeOddSumTo(1))
console.log(iterativeOddSumTo(10))