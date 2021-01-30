const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const users = require('./routes/users');

// Load env vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();
// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// Body parser
app.use(express.json());
app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to the ContactKeeper API' });
});
// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const server = app.listen(PORT, () =>
	console.log(`App is running in ${process.env.NODE_ENV} mode on port:${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`);
	// Close the server & exit process
	server.close(() => {
		process.exit(1);
	});
});
