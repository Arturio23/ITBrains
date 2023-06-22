let animal = {
  name: "Тварина",
  eat() {
    alert(`${this.name} їсть.`);
  }
};

let rabbit = {
  __proto__: animal,
  eat() {
    // ...робимо щось специфічне для кролика і викликаємо батьківський (animal) метод
    this.__proto__.eat.call(this); // (*)
  }
};

let longEar = {
  __proto__: rabbit,
  eat() {
    // ...зробимо щось, що пов’язане з довгими вухами, і викликаємо батьківський (rabbit) метод
    this.__proto__.eat.call(this); // (**)
  }
};

longEar.eat(); // Error: Maximum call stack size exceeded
