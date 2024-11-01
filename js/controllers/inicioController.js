(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('InicioController', InicioController);

    InicioController.$inject = ['contenidoInicio', '$sce'];

    function InicioController(contenidoInicio, $sce) {
        var vm = this;
        debugger;
        vm.titulo = contenidoInicio.titulo;
        vm.contenido = $sce.trustAsHtml(contenidoInicio.contenido);
    }

})();
