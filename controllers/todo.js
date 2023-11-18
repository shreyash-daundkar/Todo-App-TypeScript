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
