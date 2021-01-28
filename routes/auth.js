const express = require('express');
const { getLoggedInUser, loginUser } = require('../controllers/auth');
const router = express.Router();

router.route('/').get(getLoggedInUser).post(loginUser);

module.exports = router;
