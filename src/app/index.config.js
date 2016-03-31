
(function() {
  'use strict';

  angular
    .module('qmiks')
    .config(config);

  /** @ngInject */
  function config($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider) {
    // Enable log
    var languages = website.Languages ;


        $stateProvider.state('ebook', {
          url: '/:language/ebook/:slug',
          views: {
              'menu@': {

                templateUrl: 'app/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menu'
              },
              'content@': {
                templateUrl: 'app/book/book.html',
                controller: 'BookController',
                controllerAs: 'book',
              }

            },
            resolve: {
              book: function(CatalogService, $stateParams)
              {
                return CatalogService.book($stateParams.slug, $stateParams.language) ;
              }
            }
            
        }) ;

    for(var i in languages)
    {
                
        var language = languages[i].Display.toLowerCase() ;       


        var pages = languages[i].Pages ;                

        for(var j in pages)
        {
           var page = pages[j] ;

           if(page.Type == 'Text')
           {
              $stateProvider.state(page.Slug, {
              url: '/' + language + '/' + page.Slug,
              views: {
                'menu@': {
                  templateUrl: 'app/menu/menu.html',
                  controller: 'MenuController',
                  controllerAs: 'menu'
                },
                'content@': {
                  template: page.BodyTextHtml    
                }
              },
              params : { page: page, language: language }
              
              }) ;
           }
           else if(page.Type == 'Catalog')
           {      
              catalogs[language] =  page.CatalogUrl ;

              var _page = page ;
              console.log(_page) ;

              $stateProvider.state(_page.Slug, {
                url: '/' + language + '/' + _page.Slug,
                views: {
                  'menu@': {
                    templateUrl: 'app/menu/menu.html',
                    controller: 'MenuController',
                    controllerAs: 'menu'
                  },
                  'content@': {
                    templateUrl: 'app/catalog/catalog.html',
                    controller: 'CatalogController',
                    controllerAs: 'catalog',
                  }
                },                
                params : { page: _page, language: language },
                resolve: 
                {                                                  
                   catalog: function(CatalogService, $stateParams)
                   {                                                 
                      return CatalogService.load($stateParams.page) ;                       
                   },
                   slides: function(CatalogService, $stateParams)
                   {
                    return CatalogService.getSlides($stateParams.page) ;
                   }
             
                }
            }) ;

        }

       } 
   }

   $stateProvider.state('book', {
        url: '/book/:slug',
         views: {
           'menu@': {
              templateUrl: 'app/menu/menu.html',
              controller: 'MenuController',
             controllerAs: 'menu'
            },
            'content@': {
              templateUrl: 'app/book/book.html',
              controller: 'BookController',
              controllerAs: 'book',
           }
         },
         resolve: {
          book: function(CatalogService, $stateParams)
          {
             
            return CatalogService.book($stateParams.slug) ;
          }
        }
    }) ;

   $urlRouterProvider.otherwise('/en/ebooks');
   $locationProvider.html5Mode(true);
 
  ezfbProvider.setInitParams({
    appId: '1721055311462840',
    version: 'v2.5'
  });  

  }

})();
