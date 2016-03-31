(function() {
  'use strict';

  angular
    .module('qmiks')
    .controller('HeadController', HeadController);

  /** @ngInject */
  function HeadController($state, $rootScope) {

  
    var vm = this ;
    
    vm.title  = '' ;
    vm.description = '' ;
  

    $rootScope.$watch('title', function(newValue, oldValue) {
     console.log(newValue) ;
     vm.title = newValue ;     
    });

    $rootScope.$watch('description', function(newValue, oldValue) {
     console.log(newValue) ;
     vm.description = newValue ;     
    });

   

  }
})();