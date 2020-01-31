const { data: people } = require("../../data");
let dataLength = people.length;
let id = dataLength;

module.exports.getPeople = (req, res) => res.status(200).json(people);

module.exports.postPerson = (req, res) => {
  const person = req.body;
  people[dataLength-1].id === id ? id++ : id;
  people.push({id, ...person});
  id++;

  res.status(200).send(people);
}

module.exports.deletePerson = (req, res) => {
  let { id } = req.params;
  let targetIndex = people.findIndex(person => person.id === +id)
  if (targetIndex === -1) return res.status(404).send(`${id} does not exist!`);
  people.splice(targetIndex, 1);

  res.status(200).json(people);
}

module.exports.editPerson = (req, res) => {
  let { id } = req.params;
  const keys = ["first_name", "last_name", "c_in", "c_out", "meal", "job", "available", "skills", "decessed"];
  let targetIndex = people.findIndex(person => person.id === +id);
  if (targetIndex === -1) return res.status(404).send(`${id} does not exist!`)
  let foundPerson = people[targetIndex];

  for(let key in req.body) {
    if(keys.includes(key)) {
      foundPerson[key] = req.body[key];
    }
  }
  
  res.status(200).json(people);
}