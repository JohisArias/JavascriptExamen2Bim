(function() {
    'use strict';

    angular
        .module('app.autor')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listAutor',
                config: {
                    url: '/autor',
                    templateUrl: 'app/autor/views/list.html',
                    controller: 'AutorController',
                    controllerAs: 'vm',
                    title: 'List Autors',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Autors'
                    }
                }
            },
            {
                state: 'createAutor',
                config: {
                    url: '/autor/create',
                    templateUrl: 'app/autor/views/create.html',
                    controller: 'AutorController',
                    controllerAs: 'vm',
                    title: 'Create Autor'
                }
            },
            {
                state: 'viewAutor',
                config: {
                    url: '/autor/:autorId',
                    templateUrl: 'app/autor/views/view.html',
                    controller: 'AutorController',
                    controllerAs: 'vm',
                    title: 'View Autor'
                }
            },
            {
                state: 'editAutor',
                config: {
                    url: '/autor/:autorId/edit',
                    templateUrl: 'app/autor/views/edit.html',
                    controller: 'AutorController',
                    controllerAs: 'vm',
                    title: 'Edit Autor'
                }
            }
        ];
    }
})();
