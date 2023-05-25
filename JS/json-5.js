let user = {
  name: "Іван",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* відступ в 2 пробіли:
{
  "name": "Іван",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* для JSON.stringify(user, null, 4) результат містить більше пробілів:
{
    "name": "Іван",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
