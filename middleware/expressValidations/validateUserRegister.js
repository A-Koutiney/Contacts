const { check, validationResult } = require('express-validator');

exports.validateUser = [
	check('name', 'Please add a name').not().isEmpty(),
	check('email', 'Please include a valid Email').isEmail(),

	check('password', 'Please include a password with 6 or more charachters')
		.not()
		.isEmpty()
		.isLength({
			min: 6,
		}),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];
