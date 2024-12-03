(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('FormController', FormController);

    FormController.$inject = ['especialidades', 'profesionales', '$scope'];

    function FormController(especialidades, profesionales, $scope) {
        var vm = this;

        vm.especialidades = especialidades;
        vm.profesionales = profesionales;
        vm.prosForDisplay = [];
        vm.schedules = [];
        $scope.selectedSpecialtyId = 0;
        $scope.selectedProfId = 0;
        $scope.selectedSchedule = 0;

        function resetSelectors () {
            vm.prosForDisplay = [];
            vm.schedules = [];
        }
        
        $scope.onSpecialtyChange = function (selectedEsp) {
            resetSelectors();
            $scope.selectedSpecialtyId = selectedEsp;
            vm.prosForDisplay = vm.profesionales.filter(profesionales => profesionales.esp_id == selectedEsp);
        }

        $scope.onProChange = function (prof = null) {
            if (prof == null) return
            vm.selectedProfId = prof;
            vm.schedules = vm.profesionales.filter(profesionales => profesionales.id == prof)[0].horarios;
        }

        $scope.onScheduleChange = function (schedule) {
            // vm.selectedProfId = schedule;
        }
    }
})();
