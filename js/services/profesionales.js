(function() {
    'use strict';
  
    angular
        .module('miApp')
        .factory('ProService', ProService);
  
    ProService.$inject = ['$http'];
  
    function ProService($http) {
        var service = this;
  
        // Definir la URL base del servicio
        var apiBaseUrl = `${window.location.origin}`;
  
        service.obtenerEspecialidadUrl = apiBaseUrl + '/data/especialidades.json';
  
        service.obtenerEspecialidad = function() {
            var promise = $http.get(service.obtenerEspecialidadUrl)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error('Error al recuperar especialidades:', error);
                    throw error;
                });
  
            return promise;
        };

        service.obtenerProfesionalesUrl = apiBaseUrl + '/data/profesionales.json';

        service.obtenerProfesionales = function() {
            var promise = $http.get(service.obtenerProfesionalesUrl)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error('Error al recuperar profesionales:', error);
                    throw error;
                });
  
            return promise;
        };
  
        return {
            obtenerEspecialidad: function() {
                return service.obtenerEspecialidad();
            },
            obtenerProfesionales: function() {
                return service.obtenerProfesionales();
            }
        };
    }
  })();
  