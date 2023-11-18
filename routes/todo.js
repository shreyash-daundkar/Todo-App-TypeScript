"use strict";
const { Router } = require('express');
const { displayTodos, addTodos, deleteTodos } = require('../controllers/todo');
const router = Router();
router.get('/', displayTodos);
router.post('/', addTodos);
router.delete('/', deleteTodos);
module.exports = router;
