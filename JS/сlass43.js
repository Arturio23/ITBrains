// the execution: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("Помилка!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // обробляємо помилку
  } else {
    alert("Не можу обробити цю помилку");

    throw error; // прокидуємо цю або іншу помилку в наступний catch
  }

}).then(function() {
  /* не виконається */
}).catch(error => { // (**)

  alert(`Невідома помилка: ${error}`);
  // нічого не повертаємо => виконання продовжується в нормальному режимі

});
