let animal = {
  sayHi() {
    alert(`Я тварина`);
  }
};

// кролик наслідується від тварини
let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};

let plant = {
  sayHi() {
    alert("Я рослина");
  }
};

// дерево наслідується від рослини
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // Я тварина (?!?)
