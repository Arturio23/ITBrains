let range = {
  from: 1,
  to: 5,

  // цей рядок такий самий, як [Symbol.asyncIterator]: async function*() {
  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {

      // робимо паузу між значеннями, чекаємо на щось
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
};

(async () => {

  for await (let value of range) {
    alert(value); // 1, потім 2, потім 3, потім 4, потім 5
  }

})();
