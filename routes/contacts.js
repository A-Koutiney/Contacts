const express = require('express');
const auth = require('../middleware/auth');
const {
	validateContact,
} = require('../middleware/expressValidations/validateContact');
const {
	getContacts,
	addContact,
	updateContact,
	deleteContact,
} = require('../controllers/contacts');

const router = express.Router();

router
	.route('/')
	.get(auth, getContacts)
	.post(auth, validateContact, addContact);
router
	.route('/:id')
	.put(auth, validateContact, updateContact)
	.delete(auth, deleteContact);

module.exports = router;
