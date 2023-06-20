class MyClass {
  #privateField;

  constructor() {
    this.#privateField = 10;
  }

  getPrivateField() {
    return this.#privateField;
  }

  overridePrivateField(newValue) {
    return {
      ...this,
      #privateField: newValue
    };
  }
}

const myObj = new MyClass();
console.log(myObj.getPrivateField()); // 10

const newObj = myObj.overridePrivateField(20);
console.log(newObj.getPrivateField()); // 20
