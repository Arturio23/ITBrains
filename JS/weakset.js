let visitedSet = new WeakSet();

let john = { name: "Іван" };
let pete = { name: "Петро" };
let mary = { name: "Марія" };

visitedSet.add(john); // Іван відвідав нас
visitedSet.add(pete); // Потім Петро
visitedSet.add(john); // Знову Іван

// visitedSet має зараз 2-ох користувачів

// перевірте, чи відвідав Іван?
alert(visitedSet.has(john)); // true

// перевірте, чи відвідала Марія?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet буде очищено автоматично
