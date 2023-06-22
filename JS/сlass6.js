class Animal {
  showName() {  // замість this.name = 'тварина'
    alert('тварина');
  }

  constructor() {
    this.showName(); // замість alert(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    alert('кролик');
  }
}

new Animal(); // тварина
new Rabbit(); // кролик
