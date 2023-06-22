let animal = {
  name: "Тварина",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} їсть.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Кролик",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Довговухий кролик",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// працює правильно
longEar.eat();  // Довговухий кролик їсть.
