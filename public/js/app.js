var app = angular.module('lightningTalks', ['mainController', 'talksService', 'instanceService', 'ngQuickDate']);

app.config(function(ngQuickDateDefaultsProvider) {
  ngQuickDateDefaultsProvider.set('parseDateFunction', function(str) {
    d = Date.create(str);
    return d.isValid() ? d : null;
  });
});