const { Router } = require('express');
const { displayTodos, addTodos, deleteTodos, editTodos } = require('../controllers/todo');

const router = Router();

router.get('/', displayTodos);
router.post('/', addTodos);
router.delete('/', deleteTodos);
router.put('/', editTodos);

module.exports = router;