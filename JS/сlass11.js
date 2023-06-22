let animal = {
  eat: function() { // навмисно напишемо це так замість eat() {...
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // Помилка виклику super (тому що немає [[HomeObject]])
