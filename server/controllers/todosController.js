const TodosModel = require("../models/todosModel");

class TodosController {
  async getTodos(req, res) {
    try {
      const result = await TodosModel.find({}, "title");
      if (!result) {
        res.status(400).json({ message: "Произошла ошибка при получении" });
      }
      res.status(200).json({ todos: result });
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
      if (!req.body.title) {
        res.status(400).json({ message: "Пожалуйста укажите заголовок" });
      }

      const { deletedCount } = await TodosModel.deleteOne({
        title: req.body.title,
      });

      if (deletedCount === 0) {
        res
          .status(400)
          .json({ message: "Удаления не произошло, проверьте заголовок" });
      }

      res.status(200).json({ message: "Элемент был успешно удалён" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при удалении" });
    }
  }
}

module.exports = new TodosController();
