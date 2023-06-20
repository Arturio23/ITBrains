class ParentClass {
  static parentStaticField = 42;

  static parentStaticMethod() {
    console.log('This is a parent static method.');
  }
}

class ChildClass extends ParentClass {
  static childStaticField = 24;

  static childStaticMethod() {
    console.log('This is a child static method.');
  }

  static accessStaticElements() {
    console.log(super.parentStaticField); // 42
    super.parentStaticMethod(); // This is a parent static method.
    console.log(this.childStaticField); // 24
    this.childStaticMethod(); // This is a child static method.
  }
}

ChildClass.accessStaticElements();
