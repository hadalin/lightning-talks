var Talk = require('../models/talk');

var getTalks = function(res) {
	Talk.find(function(err, talks) {
		if (err)
			res.send(err);

		res.json(talks);
	});
};


exports.all = function(req, res) {
	getTalks(res);
};

exports.create = function(req, res) {
	Talk.count({}, function(err, count) {
		if(count <= 9) {
			Talk.create({
				author: req.body.author,
				title: req.body.title
			}, function(err, talk) {
				if (err) {
					res.send(err);
				}
				else {
					getTalks(res);
				}
			});
		}
		else {
			res.json({
				errors: {
					talks: {
						type: 'Max 10 talks.'
					}
				}
			});
		}
	});
};

exports.delete = function(req, res) {
	if(req.params.talk_id == 'all') {
		Talk.remove({}, function(err, talks) {
			if (err) {
				res.send(err);
			}
			else {
				getTalks(res);
			}
		});
	}
	else {
		Talk.remove({
			_id : req.params.talk_id
		}, function(err, talk) {
			if (err) {
				res.send(err);
			}
			else {
				getTalks(res);
			}
		});
	}
};
