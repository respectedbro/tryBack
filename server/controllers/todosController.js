class TodosController {
  async getTodos(req, res) {
    try {
      res.send("TEst");
    } catch (e) {
      console.log(e);
    }
  }

  async addTodo(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTodo(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TodosController();
