Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ой!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Помилка!")), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ой!
  console.log(error.errors[1]); // Error: Помилка!
});
