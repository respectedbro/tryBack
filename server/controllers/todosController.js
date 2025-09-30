const TodosModel = require("../models/todosModel");

class TodosController {
  async getTodos(req, res) {
    try {
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при получении" });
    }
  }

  async addTodo(req, res) {
    try {
      if (!req.body.title) {
        res.status(400).json({ message: "Пожалуйста добавьте заголовок" });
      }

      const todoModel = new TodosModel({ title: req.body.title });

      await todoModel.save();

      res.status(200).json({ message: "Элемент успешно добавлен" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при добавлении" });
    }
  }

  async deleteTodo(req, res) {
    try {
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при удалении" });
    }
  }
}

module.exports = new TodosController();
