// 📁 cache.js
let cache = new Map();

// обчислити та запам’ятати результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* розрахунки результату для */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Тепер ми використовуємо process() в іншому файлі:

// 📁 main.js
let obj = {/* скажімо, у нас є об’єкт */};

let result1 = process(obj); // розраховано

// ...пізніше, з іншого місця в коді...
let result2 = process(obj); // запам’ятований результат, взятий з кешу

// ...пізніше, коли об’єкт більше не потрібний:
obj = null;

alert(cache.size); // 1 (Ой! Об’єкт досі в кеші і займає пам’ять!)
