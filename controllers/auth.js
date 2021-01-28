// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
exports.getLoggedInUser = (req, res, next) => {
	res.json({ msg: 'Get a logged in user' });
};

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
exports.loginUser = (req, res, next) => {
	res.json({ msg: 'login user' });
};
