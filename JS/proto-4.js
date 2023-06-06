let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Наш: ${prop}`); // Наш: jumps
  } else {
    alert(`Успадковано: ${prop}`); // Успадковано: eats
  }
}
