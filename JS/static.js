class MyClass {
  static staticProperty = 'Static Property';

  static staticMethod() {
    console.log('Static Method');
  }

  instanceMethod() {
    console.log('Instance Method');
  }
}

console.log(MyClass.staticProperty); // Виведе: "Static Property"
MyClass.staticMethod(); // Виведе: "Static Method"

const myObject = new MyClass();
myObject.instanceMethod(); // Виведе: "Instance Method"
