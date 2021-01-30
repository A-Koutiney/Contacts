const express = require('express');
const { getLoggedInUser, loginUser } = require('../controllers/auth');
const {
	validateUser,
} = require('../middleware/expressValidations/validateUserLogin');
const auth = require('../middleware/auth');
const router = express.Router();

router.route('/').get(auth, getLoggedInUser).post(validateUser, loginUser);

module.exports = router;
