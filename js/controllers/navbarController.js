(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state'];

    function NavbarController($scope, $state) {
        var vm = this;
        $scope.openForm = function() {
            $state.go('formUser');
        };
    }
})();
