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
