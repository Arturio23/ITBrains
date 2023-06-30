// Запитуємо user.json
fetch('/article/promise-chaining/user.json')
  // Завантажуємо дані у форматі json
  .then(response => response.json())
  // Робимо запит до GitHub
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Завантажуємо відповідь у форматі json
  .then(response => response.json())
  // Показуємо аватар (githubUser.avatar_url) протягом 3 секунд (можливо, з анімацією)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });
