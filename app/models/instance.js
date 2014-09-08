var mongoose = require('mongoose'),
 	Schema = mongoose.Schema;
 
var instanceSchema = new Schema({
    date: {type: Date}
});
 
module.exports = mongoose.model('Instance', instanceSchema);