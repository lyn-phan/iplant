const { json } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get("/plants", (req, res) => {
  console.log("here");
  fs.readFile("server/data/plants.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    res.json(JSON.parse(jsonString));
  });
});
