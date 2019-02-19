'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name: {
		type: String,
		required: 'Enter the task title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['current', 'completed', 'pending']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Task', TaskSchema)