// Базовий об'єкт
class Car {
  drive() {
    console.log('Driving the car.');
  }
}

// Декоратор
class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    this.car.drive();
    this.addExtraFunctionality();
  }

  addExtraFunctionality() {
    console.log('Adding extra functionality to the car.');
  }
}

// Створення об'єкту та додавання декораторів
const car = new Car();
const decoratedCar = new CarDecorator(car);

decoratedCar.drive();
