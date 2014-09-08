angular.module('instanceService', [])

	.factory('Instance', function($http) {
		return {
			get: function() {
				return $http.get('/api/instance/date');
			},
			update: function(instanceData) {
				return $http.post('/api/instance/date/update', instanceData);
			},
			delete: function() {
				return $http.delete('/api/instance/date/delete');
			},
		};
	});