angular.module('mainController', [])

    .controller('mainController', function($scope, $http, Talks, Instance) {
        $scope.talkData = {};
        $scope.instanceData = {};

        Talks.get()
            .success(function(data) {
                $scope.talks = data;
        });

        Instance.get()
            .success(function(data) {
                $scope.instanceData.date = data.date;
            });

        $scope.createTalk = function() {

            if ($scope.talkData.author !== undefined && $scope.talkData.title !== undefined) {

                Talks.create($scope.talkData)
                    .success(function(response) {
                        if(response.errors) {
                            for(var key in response.errors) {
                                alert(response.errors[key].type);
                            }
                        }
                        else {
                            $scope.talkData = {};
                            $scope.talks = response;
                        }
                    });
            }
        };

        $scope.deleteTalk = function(id) {

            Talks.delete(id)
                .success(function(data) {
                    $scope.talks = data;
                });
        };

        $scope.deleteAllTalks = function() {
            if(confirm("You sure?")) {
                Talks.deleteAll()
                    .success(function(data) {
                        $scope.talks = data;
                    });
                }
            };

        $scope.updateDate = function() {
            if($scope.instanceData.date !== null) {
                Instance.update($scope.instanceData);
            }
            else {
                Instance.delete();
            }
        };

    });