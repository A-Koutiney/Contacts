const { check, validationResult } = require('express-validator');

exports.validateContact = [
	check('name', 'Name is required').not().isEmpty(),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() });
		next();
	},
];
