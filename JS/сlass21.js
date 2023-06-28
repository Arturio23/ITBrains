let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (або ми б могли тут використовувати Object.setPrototypeOf для встановлення прототипу)

  sayHi() {
    // виклик батьківського методу
    super.say(`Привіт, ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`До побачення, ${this.name}`); // (*)
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// копіюємо методи
Object.assign(User.prototype, sayHiMixin);

// тепер User може сказати привіт
new User("Іван").sayHi(); // Привіт, Іван!
