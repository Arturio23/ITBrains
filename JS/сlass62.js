// Subject (Суб'єкт)
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  // Метод, який змінює стан Subject і повідомляє спостерігачів
  changeState() {
    // Зміна стану Subject
    console.log('Subject is changing state...');
    // Повідомлення спостерігачів про зміну стану
    this.notifyObservers();
  }
}

// Observer (Спостерігач)
class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`Observer ${this.name} received an update.`);
  }
}

// Використання паттерна Observer
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.changeState();
// Виводить:
// Subject is changing state...
// Observer Observer 1 received an update.
// Observer Observer 2 received an update.
// Observer Observer 3 received an update.

subject.removeObserver(observer2);

subject.changeState();
// Виводить:
// Subject is changing state...
// Observer Observer 1 received an update.
// Observer Observer 3 received an update.
