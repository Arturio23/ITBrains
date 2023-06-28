let range = {
  from: 1,
  to: 5,

  // for..of range викликає цей метод один раз на самому початку
  [Symbol.iterator]() {
    // ...він повертає об’єкт, що перебирається:
    // далі for..of працює лише з цим об’єктом, запитуючи в нього наступні значення
    return {
      current: this.from,
      last: this.to,

      // next() викликається при кожній ітерації цикла for..of
      next() {
        // повинно повернути значення як об’єкт {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// при переборі об’єкта range повертаються числа від range.from до range.to
alert([...range]); // 1,2,3,4,5
