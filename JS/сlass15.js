class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// створюємо кавоварку
let coffeeMachine = new CoffeeMachine(100);

// додаємо воду
coffeeMachine.waterAmount = -10; // _waterAmount буде 0, а не -10
