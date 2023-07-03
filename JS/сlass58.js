async function showAvatar() {

  // зчитуємо наш JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // зчитуємо користувача github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // показуємо аватар
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // очікуємо 3 секунди
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
