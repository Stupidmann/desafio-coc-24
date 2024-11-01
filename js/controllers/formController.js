(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('FormController', FormController);

    FormController.$inject = ['especialidades', '$scope'];

    function FormController(especialidades, $scope ) {
        var vm = this;

        vm.especialidades = [...new Set(especialidades.especialidades_medicas)];
        
    }
})();
