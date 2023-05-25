let room = {
  number: 23
};

let meetup = {
  title: "Конференція",
  participants: [{name: "Іван"}, {name: "Аліна"}],
  place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Конференція
participants: [object Object],[object Object]
0:            [object Object]
name:         Іван
1:            [object Object]
name:         Аліна
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/
