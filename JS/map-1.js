let recipeMap = new Map([
['огірок',   500],
['помідори', 350],
['цибуля',   50]
]);

// перебираємо ключі (овочі)
for (let vegetable of recipeMap.keys()) {
alert(vegetable); // огірок, помідори, цибуля
}

// перебираємо значення (кількість)
for (let amount of recipeMap.values()) {
alert(amount); // 500, 350, 50
}

// перебір елементів у форматі [ключ, значення]
for (let entry of recipeMap) { // те ж саме, що recipeMap.entries()
alert(entry); // огірок,500 (і так далі)
}
