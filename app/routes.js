var talks = require('./controllers/talks'),
	instances = require('./controllers/instances');

module.exports = function(app) {
	app.get('/api/talks', talks.all);

	app.post('/api/talks', talks.create);

	app.delete('/api/talks/:talk_id', talks.delete);

	app.get('/api/instance/date', instances.get);

	app.post('/api/instance/date/update', instances.update);

	app.delete('/api/instance/date/delete', instances.delete);


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/robots.txt', function(req, res) {
		res.sendfile('./public/robots.txt');
	});
};