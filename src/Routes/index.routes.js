const express = require ('express');
const { main, login } = require('../Controllers/ahorrosYprestamos');

const router = express.Router();

router.get('/index', main);
router.get('/login', login);

module.exports = router;