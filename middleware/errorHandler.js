const ErrorResponse = require('../utils/ErrorRespons');
const errorHandler = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;
	// // mongoose bad object id
	// if (err.name === 'CastError') {
	// 	const message = `Bootcamp with the id of ${err.value} was not found`;
	// 	error = new ErrorResponse(message, 404);
	// }

	// // mongoose duplicates

	// if (err.code === 11000) {
	// 	const message = `Duplicate value entered`;
	// 	error = new ErrorResponse(message, 400);
	// }
	// // mongoose validators
	// if (err.name === 'ValidationError') {
	// 	const message = Object.values(error.errors)
	// 		.map((val) => val.message)
	// 		.join(',');
	// 	error = new ErrorResponse(message, 400);
	// }
	console.log('hello from handler');
	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Server Error',
	});
};

module.exports = errorHandler;
