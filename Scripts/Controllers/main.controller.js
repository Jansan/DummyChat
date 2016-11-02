/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "channelsApi",
        function ($scope, $location, $route, channelsApi) {
            $scope.$route = $route;
            $scope.models = {
                channels: [],
                messages: []
            }
            // Get channels
            channelsApi.getChannels()
                .then(function (data) {
                    if (data != null) {
                        $scope.models.channels = data;
                    }

                });

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);