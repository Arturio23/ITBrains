let range = {
  from: 1,
  to: 5
};

// 1. виклик for..of спочатку викликає цю функцію
range[Symbol.iterator] = function() {

  // 2. Далі, for..of працює тільки з цим ітератором, запитуючи у нього наступні значення
  return {
    next() {
      // 4. він повинен повертати значення як об’єкт {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// тепер це працює!
for (let num of range) {
  alert(num); // 1, потім 2, 3, 4, 5
}
