import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import AuthContext from '../../context/auth/authContext';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
	const authContext = useContext(AuthContext);

	const { loadUser } = authContext;
	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
