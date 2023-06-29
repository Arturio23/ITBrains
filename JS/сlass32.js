function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // помилка!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // повторне викидання (обробка іншого типу помилок не передбачена)
    }
  }
}

try {
  readData();
} catch (err) {
  alert( "Зовнішнє перехоплення: " + err ); // перехоплено!
}
