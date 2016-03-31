(function() {
  'use strict';

  angular
    .module('qmiks')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, books) {

    var vm = this;
      
    vm.myInterval = 5000;
    vm.noWrapSlides = false;

    var slides = vm.slides = [] ;

    for (var i=1; i <= 6; i++) {
      slides.push({
        image: 'assets/images/qmiks' + i + '.jpg'
      }) ;
   
    }
    vm.sections = books.Sections ;
    console.log(vm.sections) ;
    /*
    var sections = vm.sections = {
                                Title:"Free Read Aloud Books",
                                Books:[
                                {id: '1', name: 'Dziewczynka z zapałkami', src: 'assets/images/cover1.jpg'},
                                {id: '2', name: 'Brzydkie kaczątko', src: 'assets/images/cover2.jpg'},
                                {id: '3', name: 'Calineczka', src: 'assets/images/cover3.jpg'},                                
                                {id: '4', name: 'Dziewczynka z zapałkami', src: 'assets/images/cover1.jpg'},
                                {id: '5', name: 'Brzydkie kaczątko', src: 'assets/images/cover2.jpg'},
                                {id: '6', name: 'Calineczka', src: 'assets/images/cover3.jpg'}]                                
                            },
                            {                            
                                Title:"Fairy Tales Retold",
                                Books:[ {id: '7', name: 'The little match-seller', src: 'assets/images/cover4.jpg'},
                                {id: '8', name: 'The Ugly Ducking', src: 'assets/images/cover5.jpg'},
                                {id: '9', name: 'Thumbelina', src: 'assets/images/cover6.jpg'}]
                            },
                            {
                                Title:"Young Readers Classics",
                                Books:[{id: '10', name: 'The Snow Queen', src: 'assets/images/cover7.jpg'}]
                             }] ;

                             console.log(sections) ;
    */                             
  }



angular.module('qmiks').directive('imageloaded', [

    function () {

        'use strict';

        return {
            restrict: 'A',

            link: function(scope, element, attrs) {   
                var cssClass = attrs.loadedclass;

                element.bind('load', function (e) {
                    angular.element(element).addClass(cssClass);
                });
            }
        }
    }
]);

})();
