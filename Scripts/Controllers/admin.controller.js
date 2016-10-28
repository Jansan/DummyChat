/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "channelsApi",
        function ($scope, channelsApi) {
            $scope.title = "Admin Page";

            $scope.newChannel = {};

            // Creating Channel
            $scope.addChannel = function () {
                channelsApi.addChannel($scope.newChannel)
                        .then(function (data) {
                            $scope.models.channels.push(data);
                            $scope.newChannel = {};
                        })
            } // End


            //Delete Channel
            $scope.deleteChannel = function (channel) {
                channelsApi.deleteChannel(channel.id)
                .then(function () {
                    var index = $scope.models.channels.map(function (channel) {
                        return channel.id;
                    }).indexOf(channel.id);

                    $scope.models.channels.splice(index, 1);
                });
            } //End 


        }

    ]);