let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  participants: [{name: "Іван"}, {name: "Аліна"}],
  place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Конференція",
  "participants":[{"name":"Іван"},{"name":"Аліна"}],
  "place":{"number":23}
}
*/
