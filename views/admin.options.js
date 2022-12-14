import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import AdminJsMongoose from '@adminjs/mongoose'
AdminJS.registerAdapter(AdminJsMongoose);
import {Signup} from '../models/signup.js';
const usersNavigation = {
	name: 'Users',
	icon: 'User',
};
export const adminConfig = new AdminJS({
	// show data from all collections
	databases: [mongoose],
	// show data from particular collections

	resources: [
		{
			resource: Signup,

			options: {
				// user details custom Action
				actions: {
					Details: {
						actionType: 'record',
						component: false,
						handler: (request, response, context) => {
							const { record } = context;
							return {
								msg: 'Hello world',
							};
						},
					},
				},
				sort: {
					sortBy: 'user_status',
					direction: 'desc',
				},
				navigation: usersNavigation,
				id: 'profiles', // here the resource identifier has been renamed to "profiles"
				properties: {
					user_type: {
						isVisible: {
							edit: true,
							show: true,
							list: false,
							filter: false,
						},
					},
					user_status: {
						isVisible: {
							edit: false,
							show: true,
							list: false,
						},
					},
				},
				listProperties: [
					'_id',
					'uid',
					'email',
					'user_status',
					'  user_profile',
				],
				filterProperties: ['_id', 'email', 'user_status', 'uid'],
				// editProperties: ['_id', 'name', 'bio', 'createdAt'],

				href: ({ h, resource }) => {
					return h.resourceActionUrl({
						resourceId: resource.decorate().id(),
						actionName: 'list',
						params: {
							'filters.user_status': 'demo',
						},
					});
				},
			},
		},
		{
			resource: Signup,
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

// module.exports = admin;
