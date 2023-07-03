class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // виконається з this.num*2 через 1000мс
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // чекатиме 1 секунду, після чого результат стане 2
  let result = await new Thenable(1);
  alert(result);
}

f();
