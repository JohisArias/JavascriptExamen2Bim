(function () {
    'use strict';

    angular
        .module('app.autor')
        .controller('AutorController', AutorController);

    AutorController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Autor',
        'TableSettings',
        'AutorForm'];
    /* @ngInject */
    function AutorController(logger,
        $stateParams,
        $location,
        Autor,
        TableSettings,
        AutorForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Autor);
        vm.autor = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = AutorForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Autor object
            var autor = new Autor(vm.autor);

            // Redirect after save
            autor.$save(function(response) {
                logger.success('Autor created');
                $location.path('autor/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Autor
        vm.remove = function(autor) {

            if (autor) {
                autor = Autor.get({autorId:autor.id}, function() {
                    autor.$remove(function() {
                        logger.success('Autor deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.autor.$remove(function() {
                    logger.success('Autor deleted');
                    $location.path('/autor');
                });
            }

        };

        // Update existing Autor
        vm.update = function() {
            var autor = vm.autor;

            autor.$update(function() {
                logger.success('Autor updated');
                $location.path('autor/' + autor.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewAutor = function() {
            vm.autor = Autor.get({autorId: $stateParams.autorId});
            vm.setFormFields(true);
        };

        vm.toEditAutor = function() {
            vm.autor = Autor.get({autorId: $stateParams.autorId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Autor View');
        }
    }

})();
