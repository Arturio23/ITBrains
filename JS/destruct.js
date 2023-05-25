let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Торт", "Пончик"],
  extra: true
};

// деструктурування розподілене на кілька рядків для наочності
let {
  size: { // помістимо тут size
    width,
    height
  },
  items: [item1, item2], // тут призначимо items
  title = "Меню" // немає в об’єкті (використовується типове значення)
} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
alert(item1);  // Торт
