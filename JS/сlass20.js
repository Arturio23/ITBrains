// міксин
let sayHiMixin = {
  sayHi() {
    alert(`Привіт, ${this.name}`);
  },
  sayBye() {
    alert(`До побачення, ${this.name}`);
  }
};

// використання:
class User {
  constructor(name) {
    this.name = name;
  }
}

// копіюємо методи
Object.assign(User.prototype, sayHiMixin);

// тепер User може сказати привіт
new User("Іван").sayHi(); // Привіт, Іван!
