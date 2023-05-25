let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Конференція",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Конференція",
    "room": 23
  }
*/
