class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// створюємо кавоварку
let coffeeMachine = new CoffeeMachine(100);

alert(`Потужність: ${coffeeMachine.power} Вт`); // Потужність: 100 Вт

coffeeMachine.power = 25; // Помилка (немає сетера)

