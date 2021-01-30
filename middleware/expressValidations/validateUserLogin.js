const { check, validationResult } = require('express-validator');

exports.validateUser = [
	check('email', 'Please include a valid Email').isEmail(),

	check('password', 'Password is required').not().isEmpty().exists(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];
