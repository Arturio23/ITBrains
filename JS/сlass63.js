const MyModule = (function () {
  // Приватні змінні та функції
  let privateVariable = 'Private Variable';

  function privateFunction() {
    console.log('This is a private function');
  }

  // Публічний інтерфейс модуля (експорт)
  return {
    publicVariable: 'Public Variable',
    publicFunction: function () {
      console.log('This is a public function');
      // Виклик приватної функції
      privateFunction();
    },
  };
})();

// Використання модуля
console.log(MyModule.publicVariable); // Виводить: Public Variable
MyModule.publicFunction(); // Виводить: This is a public function, This is a private function
