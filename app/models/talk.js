var mongoose = require('mongoose'),
 	Schema = mongoose.Schema;
 
var talkSchema = new Schema({
	author: {
		type: String,
		required: true,
		validate: [
			function(data) {
				return data && data.length <= 20;
			}, 'Talk author must be 20 characters or less'
		]
	},
	title: {
		type: String,
		required: true,
		validate: [
			function(data) {
				return data && data.length <= 30;
			}, 'Talk title must be 30 characters of less'
		]
	}
});

module.exports = mongoose.model('Talk', talkSchema);