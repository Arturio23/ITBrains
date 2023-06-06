let animal = {
  eats: true,
  walk() {
    alert("Тварина йде");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// Метод walk беремо з ланцюжка прототипів
longEar.walk(); // отримуємо "Тварина йде"
alert(longEar.jumps); // true (береться з об’єкта rabbit)
