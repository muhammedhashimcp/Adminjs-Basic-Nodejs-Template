// import { model } from 'mongoose'; 
import mongoose from 'mongoose';


// const Skills=model('Skills', {
	const skillsModal = mongoose.Schema({
		tech: String,
		title: String,
		color: String,
		official_doc: String,
		tutorials: [{ type: String }],
	});

// module.exports = Skills; 
export const Skills = mongoose.model('skills', skillsModal);
