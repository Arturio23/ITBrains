let set = new Set();

let ivan = { name: "Іван" };
let petro = { name: "Петро" };
let maria = { name: "Марія" };

// підраховуємо гостей, деякі приходять кілька разів
set.add(ivan);
set.add(petro);
set.add(maria);
set.add(ivan);
set.add(maria);

// set зберігає тільки 3 унікальних значення
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // "Іван" (тоді "Петро" і "Марія")
}
