// Спільний інтерфейс продуктів
class Product {
  operate() {
    throw new Error('operate() method must be implemented');
  }
}

// Конкретні реалізації продуктів
class ConcreteProductA extends Product {
  operate() {
    console.log('ConcreteProductA is operating');
  }
}

class ConcreteProductB extends Product {
  operate() {
    console.log('ConcreteProductB is operating');
  }
}

// Фабричний клас
class Factory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error('Invalid product type');
    }
  }
}

// Використання фабричного класу
const factory = new Factory();
const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

productA.operate(); // Виводить: ConcreteProductA is operating
productB.operate(); // Виводить: ConcreteProductB is operating
