const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todosRoutes = require("./routes/todosRoutes");

require("dotenv").config();

const app = express();

app.use(cors())

app.use(express.json());
app.use("/api/todos", todosRoutes);


const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
