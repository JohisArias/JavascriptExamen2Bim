(function() {
    'use strict';

    angular
        .module('app.autor')
        .factory('Autor', Autor);

    Autor.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Autor($resource, API_BASE_URL) {

        var params = {
            autorId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/autor/:autorId';

        return $resource(API_URL, params, actions);

    }

})();
