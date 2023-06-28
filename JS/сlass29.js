async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // Ого, можемо використовувати await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, потім 2, потім 3, потім 4, потім 5 (із затримкою між ними)
  }

})();
