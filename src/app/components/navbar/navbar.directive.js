(function() {
  'use strict';

  angular
    .module('qmiks')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          menu: '=',
          lang: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state, $stateParams, $rootScope) {
      var vm = this;

      vm.current = $state.$current.name ;
      console.log($state) ;
      console.log(vm) ;

      if($stateParams.page)
      {
        console.log($stateParams.page) ;
        $rootScope.title = $stateParams.page.Title ;
        $rootScope.description = $stateParams.page.ShortDescription ;
        
      }
    }
  }

})();
