const TodosModel = require('../models/todosModel');

class TodosController {
    async getTodos(req, res) {
        try {
            const result = await TodosModel.find({}, 'title');
            if (!result) {
                return res.status(400).json({message: 'Произошла ошибка при получении'});
            }
            return res.status(200).json({todos: result});
        } catch (e) {
            return res.status(400).json({message: 'Произошла ошибка при получении'});
        }
    }

    async addTodo(req, res) {
        try {
            if (!req.body.title) {
                return res.status(400).json({message: 'Пожалуйста добавьте заголовок'});

            }

            const todoModel = new TodosModel({title: req.body.title});

            await todoModel.save();

            return res.status(200).json({message: 'Элемент успешно добавлен'});
        } catch (e) {
            return res.status(400).json({message: 'Произошла ошибка при добавлении'});
        }
    }

    async editTodo(req, res) {
        try {

            await TodosModel.findByIdAndUpdate(req.body.id, {
                title: req.body.title
            });


            return res.status(200).json({message: 'Элемент успешно обновлён'});
        } catch (e) {
            return res.status(400).json({message: 'Произошла ошибка при редактировании'});
        }
    }

    async deleteTodo(req, res) {
        try {
            if (!req.body.title) {
                res.status(400).json({message: 'Пожалуйста укажите заголовок'});
            }

            const {deletedCount} = await TodosModel.deleteOne({
                title: req.body.title
            });

            if (deletedCount === 0) {
                return res
                    .status(400)
                    .json({message: 'Удаления не произошло, проверьте заголовок'});
            }

           return res.status(200).json({message: 'Элемент был успешно удалён'});
        } catch (e) {
           return res.status(400).json({message: 'Произошла ошибка при удалении'});
        }
    }
}

module.exports = new TodosController();
