const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello world");
});

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
