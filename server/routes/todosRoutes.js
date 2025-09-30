const { Router } = require("express");
const todosController = require("../controllers/todosController");

const todosRoutes = new Router();

todosRoutes.get("/list", todosController.getTodos);
todosRoutes.post("/add", (req, res) => {
  // Обработка добавления todo
  res.status(201).json({ message: "Todo added" });
});
todosRoutes.delete("/delete", (req, res) => {
  // Обработка удаления todo
  res.json({ message: "Todo deleted" });
});

module.exports = todosRoutes;
