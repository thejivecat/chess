const router = require('express').Router();
const { createAccount } = require('./../handlers/auth.js');

router.post('/createAccount', createAccount);

module.exports = router;