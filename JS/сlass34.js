function func() {

  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // спочатку спрацює alert з finally, а потім код в цьому рядку
