// "Named Class Expression"
// (немає такого терміну у специфікації, але це схоже на Named Function Expression)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // назву MyClass видно тільки всередині класу
  }
};

new User().sayHi(); // працює, показує визначення MyClass

alert(MyClass); // помилка, назву MyClass не видно за межами класу
