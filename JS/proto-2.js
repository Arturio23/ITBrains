let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// відпрацьовує setter
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, стан об’єкта admin було змінено
alert(user.fullName); // John Smith, стан об’єкта user захищено
