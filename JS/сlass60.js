class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    // Ініціалізація об'єкта
    this.name = 'Singleton Instance';
    Singleton.instance = this;
  }

  getName() {
    return this.name;
  }
}

// Використання Singleton
const instance1 = new Singleton();
console.log(instance1.getName()); // Виводить: Singleton Instance

const instance2 = new Singleton();
console.log(instance2.getName()); // Виводить: Singleton Instance

console.log(instance1 === instance2); // Виводить: true
