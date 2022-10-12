var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    phone: "(512) 355-0453",
    email: "johndoe@email.com",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    phone: "(313) 641-2203",
    email: "janedoe@email.com",
  },
  {
    firstName: "Suzie",
    lastName: "Smith",
    phone: "(415) 604-4219",
    email: "suziesmith@email.com",
  },
];


var listContacts = function () {
  var result = [];
  for (var i = 0; i < contacts.length; i++) {
    result.push(contacts[i].firstName + " " + contacts[i].lastName);
  }
  return result;
};
console.log(listContacts())