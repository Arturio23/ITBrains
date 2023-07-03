// Вихідний об'єкт
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Метод, визначений у прототипі
Car.prototype.start = function() {
  console.log('The car has started.');
};

// Створення нового об'єкта з використанням прототипу
const car1 = new Car('Honda', 'Accord', 2022);

// Клонування об'єкта
const car2 = Object.create(car1);

// Додавання додаткової властивості до клонованого об'єкта
car2.color = 'Blue';

console.log(car1); // { make: 'Honda', model: 'Accord', year: 2022 }
console.log(car2); // { color: 'Blue' }

car1.start(); // The car has started.
car2.start(); // The car has started.
