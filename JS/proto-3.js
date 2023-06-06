// об’єкт animal має набір методів has
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`Я ходжу`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "Білий кролик",
  __proto__: animal
};

// змінює тільки свій стан методом rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (немає такої властивості в прототипі)
