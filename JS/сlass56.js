function promisify(f) {
  return function (...args) { // повертає функію-обгортку (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // наш спеціальний колбек для f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // додаємо колбек у кінець аргументів f

      f.call(this, ...args); // викликаємо оригінальну функцію
    });
  };
}

// використання:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
