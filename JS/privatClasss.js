class MyClass {
  #privateField; // Приватне поле

  constructor() {
    this.#privateField = 10;
  }

  getPrivateField() {
    return this.#privateField;
  }
}

const myObj1 = new MyClass();
console.log(myObj1.getPrivateField()); // 10

const myObj2 = new MyClass();
console.log(myObj2.getPrivateField()); // 10

console.log(myObj1.#privateField); // Помилка: Неможливо отримати доступ до приватного поля
