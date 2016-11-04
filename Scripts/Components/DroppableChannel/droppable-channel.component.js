/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("dropChannel", {
        templateUrl: "Scripts/Components/DroppableChannel/DroppableChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            // Droppable function
            setTimeout(function () {
                component = $('#dropchannel-' + scope.id);
                component.droppable({
                    drop: function (event, ui) {

                        $(this)
                          .addClass("ui-state-highlight")
                          .find("p")
                            .html("Dropped!");

                        console.log(ui.draggable)
                    }
                });

            });

        },
        controllerAs: "scope",
        bindings: {
            id: "<"
        }

    });