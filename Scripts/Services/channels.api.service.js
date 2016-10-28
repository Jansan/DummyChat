angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {

            var api = "http://dummyapi.kodalagom.se/api";
            var channels = api + "/channels";  // Api channels
            var messages = api + "/messages";  // Api messages

            // Getting the Channels. 
            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                    .then(function (response) {

                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);

                    });
                return deferred.promise;
            }; //End 


            // Getting the Messages
            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            }; //End

            // Send post
            this.postMessage = function (newMessage) {
                var deferred = $q.defer();

                $http.post(messages, newMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {

                        deferred.resolve([]);
                    });
                return deferred.promise;

            }; // End Send post

            // Adding Channel
            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.post(channels, newChannel)
					.then(function (response) {
					    deferred.resolve(response.data);
					}, function () {
					    deferred.resolve([]);

					});
                return deferred.promise;
            }; //End

            //Deleting Channel
            this.deleteChannel = function (id) {
                var deferred = $q.defer();

                $http.delete(channels + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            }; //End



        }
    ]);