angular.module('talksService', [])

	.factory('Talks', function($http) {
		return {
			get: function() {
				return $http.get('/api/talks');
			},
			create: function(talkData) {
				return $http.post('/api/talks', talkData);
			},
			delete: function(id) {
				return $http.delete('/api/talks/' + id);
			},
			deleteAll: function() {
				return $http.delete('/api/talks/all');
			}
		};
	});