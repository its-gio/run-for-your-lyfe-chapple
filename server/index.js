const express = require("express");
const app = express();
const PORT = 2020;
const { getPeople, postPeople } = require("./controllers/people");

app
  .use(express.json())
  .get("/api/people", getPeople)
  .post("/api/people", postPeople)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));