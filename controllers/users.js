const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST api/users
// @desc    Register a user
// @access  Public
exports.registerUser = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	let user = await User.findOne({ email });
	if (user) {
		return res.status(400).json({ msg: 'User already exists' });
	}
	user = await User.create(req.body);
	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(password, salt);

	await user.save();

	const payload = {
		user: {
			id: user.id,
		},
	};
	jwt.sign(
		payload,
		process.env.JWT_SECRET,
		{
			expiresIn: 360000,
		},
		(err, token) => {
			if (err) throw err;
			res.json({ token });
		}
	);
});
