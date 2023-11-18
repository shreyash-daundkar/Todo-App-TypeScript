"use strict";
const { Router } = require('express');
const { displayTodos, addTodos } = require('../controllers/todo');
const router = Router();
router.get('/', displayTodos);
router.post('/', addTodos);
module.exports = router;
