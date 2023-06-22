let animal = {
  name: "Тварина",
  eat() {
    alert(`${this.name} їсть.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Кролик",
  eat() {
    // ось як super.eat() міг би, мабуть, працювати
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // Кролик їсть.
