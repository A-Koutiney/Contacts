// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
exports.getContacts = (req, res, next) => {
	res.json({ msg: 'Get contacts' });
};

// @route   POST api/contacts
// @desc    Add new
// @access  Private
exports.addContact = (req, res, next) => {
	res.json({ msg: 'Add contact' });
};

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  Private
exports.updateContact = (req, res, next) => {
	res.json({ msg: `update contact with the id of ${req.params.id}` });
};

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  Private
exports.deleteContact = (req, res, next) => {
	res.json({ msg: `delete contact with the id of ${req.params.id}` });
};
