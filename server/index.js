const express = require("express");
const app = express();
const PORT = 2020;
const { getPeople } = require("./controllers/people");

app
  .get("/api/people", getPeople)
  // .post("/api/people")

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));