const express = require ('express');
const { main, login, home } = require('../Controllers/ahorrosYprestamos');

const router = express.Router();


router.get('', home)
router.get('/index', main);
router.get('/login', login);

module.exports = router;