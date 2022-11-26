const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJsMongoose = require('@adminjs/mongoose');
AdminJS.registerAdapter(AdminJsMongoose);
const User = require('../models/signup')
const admin = new AdminJS({
	// show data from all collections 
	databases: [mongoose],
	// show data from particular collections
	resources: [
		{
			resource: User,
			// options for collection
			options: {
				// config particular field (property) from collection
				properties: {
					user_profile: {
						isVisible: {
							edit: true,
							show: true,
							list: false,
							filter: false,
						},
					},
					user_status: {
						availableValues: [
							{ value: 'pending', label: 'Pending' },
							{ value: 'approve', label: 'Approve' },
							{ value: 'rejected', label: 'Rejected' },
							{ value: 'denied', label: 'Denied' },
						],
					},

					actions: {
						new: {
							layout: ['email', 'password'], // Array with the properties
						},
					},
				},
				filterProperties: [
					'email',
					'_id',
					'uid',
					'user_status',
					'user_type',
				],
				editProperties: [
					'email',
					'user_profile',
					'isDeleted',
					'user_status',
					'user_type',
				],
			},
		},
	],
	locale: {
		language: 'en',
		translations: {
			labels: {
				User: 'People',
			},
		},
	},
	rootPath: '/admin',
});

module.exports = admin;
