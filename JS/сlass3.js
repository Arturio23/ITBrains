class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} біжить зі швидкістю ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} стоїть.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} ховається!`);
  }

  stop() {
    super.stop(); // викликає батьківський stop
    this.hide(); // а потім ховається
  }
}

let rabbit = new Rabbit("Білий Кролик");

rabbit.run(5); // Білий Кролик біжить зі швидкістю 5.
rabbit.stop(); // Білий Кролик стоїть. Білий Кролик ховається!
