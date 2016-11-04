/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

            // Channels page
            .when("/", {
                templateUrl: "Views/Channels.html",
                controller: "ChannelsController",
                caseInsensitiveMatch: true,
                activeTab: "Channels"
            })
                // Messages page
                .when("/Channel/:id", {
                    templateUrl: "Views/Messages.html",
                    controller: "ChannelController",
                    caseInsensitiveMatch: true,
                    activeTab: "Channels"
                })
                // Admin page
            .when("/Admin", {
                templateUrl: "Views/Admin.html",
                controller: "AdminController",
                caseInsensitiveMatch: true,
                activeTab: "Admin"
            })
                // start page
            .otherwise({
                redirectTo: "/"
            });
        }
    ]);