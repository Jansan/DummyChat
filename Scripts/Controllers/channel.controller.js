/// <reference path="../angular.js" />


angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "$rootScope",
        "Hub",
        "channelsApi",
        // main function
        function ($scope, $routeParams, $rootScope, Hub, channelsApi) {

            $scope.newMessage = {};


            var signalrPath = 'http://dummyapi.kodalagom.se/signalr';
            var hub = new Hub('chatHub', {

                rootPath: signalrPath,
                listeners: {
                    'recieveMessage': function (message) {
                        $rootScope.message = message;
                        angular.forEach($scope.models.channels, function (channel) {
                            channel.messages.push(message);
                        });
                        $rootScope.$apply();
                    }
                },
                //handle connection error
                errorHandler: function (error) {
                    console.error(error);
                },

                //SignalR connection status to the log.
                stateChanged: function (state) {
                    switch (state.newState) {
                        case $.signalR.connectionState.connecting:
                            console.log("signalR.connectionState.connecting" + state.newState);
                            break;
                        case $.signalR.connectionState.connected:
                            console.log("signalR.connectionState.connected" + state.newState);
                            break;
                        case $.signalR.connectionState.reconnecting:
                            console.log("signalR.connectionState.reconnecting" + state.newState);
                            break;
                        case $.signalR.connectionState.disconnected:
                            console.log("signalR.connectionState.disconnected" + state.newState);
                            break;
                    }


                }

            });


            //Get messages
            channelsApi.getMessages()
                .then(function (data) {
                    if (data != null) {
                        $scope.models.messages = data;
                    }

                });

            // Getting Channel
            $scope.$watch("models.channels", function (channels) {
                $scope.channel = $scope.models.channels.filter(function (channel) {
                    return channel.id == $routeParams.id;
                })[0];
            });


            $scope.addNewMessage = function () {
                channelsApi.postMessage($scope.newMessage)
                    .then(function (data) {
                        if (data != null) {
                            $scope.models.messages.push(data);
                            $scope.newMessage = {};
                        }


                    });

            }




        }


    ]);