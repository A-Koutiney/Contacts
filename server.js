const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users');

// Load env vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();
// Body parser
app.use(express.json());
app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to the ContactKeeper API' });
});
// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () =>
	console.log(`App is running in ${process.env.NODE_ENV} mode on port:${PORT}`)
);
