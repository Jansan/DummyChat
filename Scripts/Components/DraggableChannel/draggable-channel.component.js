/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("dragChannel", {
        templateUrl: "Scripts/Components/DraggableChannel/DraggableChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            // Draggable function 
            setTimeout(function () {
                component = $("#draggable-" + scope.id);
                component.draggable({
                    grid: [10, 10],
                    cursor: "move",





                });
            });

        },
        controllerAs: "scope",
        bindings: {
            id: "<",
            name: "<"
        }
    });