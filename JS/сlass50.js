let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // всі проміси успішно завершені
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // покаже 200 для кожного посилання
    }

    return responses;
  })
  // перетворить масив відповідей response у response.json(), щоб прочитати їхній зміст
  .then(responses => Promise.all(responses.map(r => r.json())))
  // всі JSON-відповіді опрацьовані: "users" - масив з результатами
  .then(users => users.forEach(user => alert(user.name)));
