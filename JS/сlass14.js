class Animal {
  static planet = "Земля";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} біжить зі швидкістю ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} ховається!`);
  }
}

let rabbits = [
  new Rabbit("Білий Кролик", 10),
  new Rabbit("Чорний Кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чорний Кролик біжить зі швидкістю 5.

alert(Rabbit.planet); // Земля
