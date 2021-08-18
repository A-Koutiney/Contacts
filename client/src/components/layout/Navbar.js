import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;
	const onlogout = () => {
		logout();
		clearContacts();
	};
	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<a onClick={onlogout} href='#'>
					<FontAwesomeIcon icon={faSignOutAlt} />{' '}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);
	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1>
				<FontAwesomeIcon icon={faIdCardAlt} /> {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
	title: 'Contacts',
};

export default Navbar;
