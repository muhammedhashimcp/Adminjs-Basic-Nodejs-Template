import mongoose from 'mongoose'

const projectModal = mongoose.Schema({
	project_title: String,
	project_id: Number,
	used_stack: String,
	project_desc: 'string',
	tech_used: [{ type: String }],
	project_done: { type: String, default: 'demo', enum: ['self', 'guided'] },
	project_type: {
		type: String,
		default: 'mini',
		enum: ['mini', 'medium', 'high'],
	},
	project_status: {
		type: String,
		default: 'in-progress',
		enum: ['started', 'in-progress', 'completed', 'avoid'],
	},
	github_url: String,
	demo_url: String,
	project_img: String,
	created_at:Date
});

export const Project = mongoose.model('project', projectModal);
