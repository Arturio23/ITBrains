let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() { // викликається один раз, на початку for..of
    return {
      current: this.from,
      last: this.to,

      next() { // викликається кожну ітерацію, щоб отримати наступне значення
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for(let value of range) {
  alert(value); // 1, потім 2, потім 3, потім 4, потім 5
}
