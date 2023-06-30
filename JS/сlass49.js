let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// перетворює кожну URL-адресу в проміс, що повертається fetch
let requests = urls.map(url => fetch(url));

// Promise.all буде очікувати виконання всіх промісів
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
