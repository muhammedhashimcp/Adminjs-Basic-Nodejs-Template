import mongoose from 'mongoose'

const signupModal = mongoose.Schema({
	email: String,
	uid: String,
	user_profile: Object,
	isDeleted: { type: Boolean, default: false },
	user_status: { type: String, default: 'Pending' },
	user_type: { type: String, default: 'demo' },
});

export const Signup = mongoose.model('sample-user-data', signupModal);
