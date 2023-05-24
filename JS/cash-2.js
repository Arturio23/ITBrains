// 📁 cache.js
let cache = new WeakMap();

// обчислити та запам’ятати результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* розрахувати результат для */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* якийсь об’єкт */};

let result1 = process(obj);
let result2 = process(obj);

// ...пізніше, коли об’єкт більше не потрібний:
obj = null;

// Не можна отримати cache.size тому, що це WeakMap,
// але це 0 або незабаром буде 0
// Коли obj видаляється збирачем сміття, кешовані дані будуть вилучені також
