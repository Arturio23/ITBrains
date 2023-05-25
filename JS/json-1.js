let student = {
  name: 'Іван',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // ми отримали рядок!

alert(json);
/* JSON-кодований об’єкт:
{
  "name": "Іван",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
