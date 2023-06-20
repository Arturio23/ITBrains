class MyClass {
  #privateInstanceMethod() {
    console.log('Це приватний інстансний метод');
  }

  publicMethod() {
    console.log('Це публічний метод');
    this.#privateInstanceMethod();
  }
}

const instance1 = new MyClass();
const instance2 = new MyClass();

instance1.publicMethod(); // Це публічний метод
                          // Це приватний інстансний метод

instance2.publicMethod(); // Це публічний метод
                          // Це приватний інстансний метод

instance1.#privateInstanceMethod(); // Помилка: Немає доступу до приватного інстансного методу
