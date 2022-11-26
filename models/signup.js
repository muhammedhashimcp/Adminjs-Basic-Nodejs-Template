const mongoose = require('mongoose');

const signupModal = mongoose.Schema({
	email: String,
	uid: String,
	user_profile: Object,
	isDeleted: { type: Boolean, default: false },
	user_status: { type: String, default: 'Pending' },
	user_type: { type: String, default: 'demo' },
});

const Signup = mongoose.model('sample-user-data', signupModal);
module.exports = Signup;
