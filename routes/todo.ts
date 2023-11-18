const { Router } = require('express');
const { displayTodos } = require('../controllers/todo');

const router = Router();

router.get('/', displayTodos);

module.exports = router;