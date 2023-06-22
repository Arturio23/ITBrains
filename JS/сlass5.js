class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// тепер добре
let rabbit = new Rabbit("Білий Кролик", 10);
alert(rabbit.name); // Білий Кролик
alert(rabbit.earLength); // 10
