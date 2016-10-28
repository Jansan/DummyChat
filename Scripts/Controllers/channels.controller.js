/// <reference path="../angular.js" />
angular.module("mainModule")
    .controller("ChannelsController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Channels";

        }
    ]);