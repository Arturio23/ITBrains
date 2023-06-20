const MyClass = (function() {
  const privateConstructor = function(value) {
    this.value = value;
  };

  return function() {
    throw new Error('Неможливо створити екземпляр класу');
  };
})();

// Приклад використання
const instance = new MyClass(); // Помилка: Неможливо створити екземпляр класу

const privateInstance = new privateConstructor('Some value'); // Помилка: privateConstructor is not defined
