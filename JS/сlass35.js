class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Упс!
  alert(err.name); // ValidationError
  alert(err.stack); // список вкладених викликів з номерами рядків для кожного
}
