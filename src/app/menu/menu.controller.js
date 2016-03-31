(function() {
  'use strict';

  angular
    .module('qmiks')
    .controller('MenuController', MenuController);

    function MenuController($stateParams, MenuService) {

    	var language = $stateParams.language ;
    	this.menu = MenuService.menu[language] ;
    	this.test = MenuService.menu[language] ;

    	this.lang = {
    		'label': 'PL',
    		'state': 'pl',
    		'slug': 'ebooki'
    	} ;
    	
    	if(language == 'pl') {
    		this.lang.state = 'en' ;
    		this.lang.label = 'US' ;	
    		this.lang.slug = 'ebooks' ;	
    	}

    	this.lang.menu = MenuService.menu[this.lang.state] ;

    	
    }

})();