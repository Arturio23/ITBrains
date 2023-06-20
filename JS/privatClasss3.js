class MyClass {
  static #privateStaticMethod() {
    console.log('Це приватний статичний метод');
  }

  static publicMethod() {
    console.log('Це публічний статичний метод');
    this.#privateStaticMethod();
  }
}

MyClass.publicMethod(); // Це публічний статичний метод
                        // Це приватний статичний метод

MyClass.#privateStaticMethod(); // Помилка: Немає доступу до приватного статичного методу
