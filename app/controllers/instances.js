var Instance = require('../models/instance');

var getInstance = function(res) {
	Instance.findOne(function(err, instance) {
		if (err) {
			res.send(err);
		}

		res.json(instance);
	});
};

exports.get = function(req, res) {
	getInstance(res);
};

exports.update = function(req, res) {
	Instance.find({}, function(err, instances) {
		if(err) {
			res.send(err);
		}

		if(instances.length > 0) {
			instances[0].date = req.body.date;
			instances[0].save();

			getInstance(res);
		}
		else {
			Instance.create({
				date: req.body.date
			}, function(err, instance) {
				if (err)
					res.send(err);

				getInstance(res);
			});
		}
	});
};

exports.delete = function(req, res) {

	Instance.find({}, function(err, instances) {
		if(err) {
			res.send(err);
		}

		if(instances.length > 0) {
			instances[0].remove();
		}
	});
};
