class User {

  constructor(name) {
    // викликає сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Ім’я занадто коротке.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Іван");
alert(user.name); // Іван

user = new User(""); // Ім’я занадто коротке.
