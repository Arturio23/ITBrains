class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // вбудовані методи використовуватимуть це як конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter створює новий масив, використовуючи arr.constructor[Symbol.species] як конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr - це не PowerArray, а Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
