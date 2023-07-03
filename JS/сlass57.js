// promisify(f, true) повинна повернути масив результатів
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // наш спеціальний колбек для f
        if (err) {
          reject(err);
        } else {
          // повернемо для всі результати колбека, якщо задано значення manyArgs === true
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

// використання:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...);
