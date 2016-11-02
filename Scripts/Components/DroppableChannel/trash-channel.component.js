/// <reference path="../../angular.js" />
angular.module("mainModule")
    .component("trashChannel", {
        templateUrl: "Scripts/Components/DroppableChannel/trashChannel.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#trashchannel-" + scope.id);
                component.droppable({
                    hoverClass: "trash-channel-hover",
                    drop: function (event, ui) {
                        var element = ui.draggable.css('position', '');
                        $(this).append(element);


                        $(ui.draggable).fadeOut(1000);
                    },
                });
            });


        },
        controllerAs: "scope",
        bindings: {
            id: "<"
        }
    });