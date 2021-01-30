const User = require('../models/User');
const Contact = require('../models/Contact');
const asyncHandler = require('../middleware/asyncHandler');

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res, next) => {
	const contacts = await Contact.find({ user: req.user.id }).sort({ data: -1 });
	res.status(200).json(contacts);
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
exports.addContact = asyncHandler(async (req, res, next) => {
	const { name, email, phone, type } = req.body;

	const newContact = new Contact({
		name,
		email,
		phone,
		type,
		user: req.user.id,
	});
	const contact = await newContact.save();
	res.status(200).json(contact);
});

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  Private
exports.updateContact = asyncHandler(async (req, res, next) => {
	const { name, email, phone, type } = req.body;
	const cntactFields = {};
	if (name) contactFields.name = name;
	if (email) contactFields.email = email;
	if (phone) contactFields.phone = phone;
	if (type) contactFields.type = type;
	let contact = await Contact.findById(req.params.id);
	if (!contact) return res.status(404).json({ msg: 'Contact not found' });
	// make sure user owns contact
	if (contact.user.toString() !== req.user.id) {
		return res.status(401).json({ msg: 'Not authorized' });
	}
	contact = await Contact.findByIdAndUpdate(
		req.params.id,
		{ $set: contactFields },
		{ new: true }
	);
	res.status(200).json(contact);
});

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
	let contact = await Contact.findById(req.params.id);
	if (!contact) return res.status(404).json({ msg: 'Contact not found' });
	// make sure user owns contact
	if (contact.user.toString() !== req.user.id) {
		return res.status(401).json({ msg: 'Not authorized' });
	}
	await Contact.findByIdAndRemove(req.params.id);
	res.status(200).json({ msg: 'Contact removed' });
});
