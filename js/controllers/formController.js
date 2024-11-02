(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('FormController', FormController);

    FormController.$inject = ['especialidades'];

    function FormController(especialidades) {
        var vm = this;

        vm.especialidades = especialidades;
        vm.selectedSpecialtyId = 0;
        
        const onSpecialtyChange = function () {
            
        }
    }
})();
