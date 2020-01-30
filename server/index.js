const express = require("express");
const app = express();
const PORT = 2020;
const { getPeople, postPerson, deletePerson } = require("./controllers/people");

app
  .use(express.json())
  .get("/api/people", getPeople)
  .post("/api/people", postPerson)
  .delete("/api/people/:id", deletePerson)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));