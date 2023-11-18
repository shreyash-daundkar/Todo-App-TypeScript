"use strict";
const todos = [];
exports.displayTodos = (req, res, next) => {
    try {
        res.json(todos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in displaying Todos' });
    }
};
exports.addTodos = (req, res, next) => {
    try {
        const { text } = req.body;
        let id = new Date().toISOString();
        const todo = { id, text };
        todos.push(todo);
        res.json({ id });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in adding Todos' });
    }
};
exports.deleteTodos = (req, res, next) => {
    try {
        const id = req.body.id;
        let index = -1;
        todos.forEach((todo, i) => index = todo.id === id ? i : -1);
        if (index === -1) {
            return res.json({ message: "Todo not found" });
        }
        else {
            todos.splice(index, 1);
            return res.json({ Message: "Todo deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in adding Todos' });
    }
};
exports.editTodos = (req, res, next) => {
    try {
        const todo = req.body;
        let index = -1;
        todos.forEach((todo, i) => index = todo.id === todo.id ? i : -1);
        if (index === -1) {
            return res.json({ message: "Todo not found" });
        }
        else {
            todos[index] = todo;
            return res.json({ Message: "Todo edited" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in adding Todos' });
    }
};
