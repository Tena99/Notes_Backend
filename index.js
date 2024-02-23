const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/:user", (req, res) => {
  const { user } = req.params;

  res.send(`Hi ${user}`);
});

app.get("/*", (req, res) => {
  res.send("Sorry. Page not found.");
});

app.listen(3000);
