const data = require("../../data");
const people = data.data
let dataLength = people.length;
let id = dataLength;

module.exports.getPeople = (req, res) => res.status(200).json(people);

module.exports.postPerson = (req, res) => {
  const person = req.body;
  people[dataLength-1].id === id ? id += 1 : id;
  people.push({id, ...person});
  // id += 1;

  res.status(200).send(people);
}

module.exports.deletePerson = (req, res) => {
  let { id } = req.params;
  let targetIndex = people.findIndex(person => person.id === +id)
  if (targetIndex === -1) return res.status(404).send(`${id} does not exist!`);
  people.splice(targetIndex, 1);

  res.status(200).json(people);
}