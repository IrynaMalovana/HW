'use strict'
// 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:

function addThemAll(...args) {
    const sum = args.reduce((accum, element) => accum + element, 0);
    return sum;
  }
  console.log(addThemAll(2,4));
  console.log(addThemAll(1,2,3,4));
  console.log(addThemAll(5,5,10));


// 2. Задача на використання замикання. 
  function multiply(a) {
    return function(b) {
      return a * b;
    }
  }
console.log(multiply(5)(5))
console.log(multiply(2)(-2))
console.log(multiply(4)(3))

// 3. Сортування масиву фільмів.
  function byProperty(property, direction) {
    return function(a, b) {
      if (direction === '>') {
        return a[property] > b[property] ? 1 : -1;
      } 
        return a[property] < b[property] ? 1 : -1;
      
    }
  }
console.log(movies.sort(byProperty('releaseYear', '>'))); 
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));

// 4.  Напишіть функцію detonatorTimer(delay)

//Використовуючи setInterval
function detonatorTimer(delay) {
  let timerId = setInterval(() => {
    if (delay === 0) {
      console.log('BOOM!');
      clearInterval(timerId);
    } else {
      console.log(delay);
      delay--;
    }
  }, 1000);
}

//Використовуючи вкладений setTimeout
function detonatorTimer(delay) {
  setTimeout(() => {
    if (delay === 0) {
      console.log('BOOM!');
    } else {
      console.log(delay);
      detonatorTimer(delay - 1);
    }
  }, 1000);

}
detonatorTimer(3);

// 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.

let me = {
  name: 'Iryna',
  phoneNumber: '+380663278924',
  yearOfBirth: 1993
  favoriteFood: 'vegetables',
  favoriteDessert: 'cheesecake'
  introduce() {
  console.log(`My name is ${this.name} and if you want to talk to me, please call me at ${this.phoneNumber}`);
  },
  howManyYears() {
  console.log(`This year I will turn ${new Date().getFullYear()-this.yearOfBirth} years old.`);
  },
  describeFavoriteFood(){
  console.log(`If you ask me what I could eat every day my answer would definitely be ${this.favoriteFood} and ${this.favoriteDessert}.`);
  }
  }
  me.introduce();
  me.howManyYears();
  me.describeFavoriteFood();

// 6. З прив'язаними до контексту свого об'єкту

let me = {
  name: 'Iryna',
  phoneNumber: '+380663278924',
  yearOfBirth: 1993
  favoriteFood: 'vegetables',
  favoriteDessert: 'cheesecake'
  
  introduce() {
  console.log(`My name is ${this.name} and if you want to talk to me, please call me at ${this.phoneNumber}`);
  },
  howManyYears() {
  console.log(`This year I will turn ${new Date().getFullYear()-this.yearOfBirth} years old.`);
  },
  describeFavoriteFood(){
  console.log(`If you ask me what I could eat every day my answer would definitely be ${this.favoriteFood} and ${this.favoriteDessert}.`);
  }
  }
  let securedSelfIntroduce = me.introduce.bind(me);
  let securedSelhowManyYears = me.howManyYears.bind(me);
  let securedSeldescribeFavoriteFood = me.describeFavoriteFood.bind(me);
  
  setTimeout(securedSelfIntroduce, 1000); 
  setTimeout(securedSelhowManyYears, 2000); 
  setTimeout(securedSeldescribeFavoriteFood, 3000); 

  // 7. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.

  function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
      console.log(`${word} is a palindrome!`);
    } else {
      console.log(`${word} is not a palindrome.`);
    }
  }
  function slower(func, seconds) {   
    function wrapper (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(() => {
        func(...args);
      }, seconds * 1000);
    }
    return wrapper;
  }
  const slowedIsPalindrome = slower(isPalindrome, 5);
  slowedIsPalindrome('racecar')
