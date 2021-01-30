const asyncHandler = require('../middleware/asyncHandler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// @route   GET api/auth
// @desc    Get logged in user

// @access  Private
exports.getLoggedInUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('-password');
	res.json(user);
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
exports.loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	let user = await User.findOne({ email });
	if (!user) {
		return res.status(400).json({ msg: 'Invalid Credentials' });
	}
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return res.status(400).json({ msg: 'Invalid Credentials' });
	}
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
