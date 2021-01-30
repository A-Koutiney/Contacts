const mongoose = require('mongoose');
const dotenv = require('dotenv');
const asyncHandler = require('../middleware/asyncHandler');
// load dotenv vars
dotenv.config({ path: './config.env' });

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
	console.log(`MongoDB connected on: ${conn.connection.host}`);
};

module.exports = connectDB;
