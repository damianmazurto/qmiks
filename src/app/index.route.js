(function() {
  'use strict';

  angular
    .module('qmiks')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    console.log('route') ;

/*
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: 
        {
          books: function(BookService)
          {
            BookService.load() ;
            return BookService.get() ;
          }
           
        }
      })
      .state('book', {
        url: '/book/:section/:id',
        templateUrl: 'app/book/book.html',
        controller: 'BookController',
        controllerAs: 'book',
        resolve: {
          book: function(BookService, $stateParams)
          {
             
            return BookService.book($stateParams.section, $stateParams.id) ;
          }
        }
      })
      .state('ebook', {
        url: '/ebook/:slug',
        templateUrl: 'app/ebook/ebook.html',
        controller: 'EbookController',
        controllerAs: 'ebook',
        resolve: {
          ebook: function(BookService, $stateParams)
          {
             
            return BookService.ebook($stateParams.slug) ;
          }
        }
      })
      .state('about1', {
        url: '/about1',
        templateUrl: 'app/about/about.html'
      })
      .state('service1', {
        url: '/service1',
        templateUrl: 'app/service/service.html'
      }) ;

    $urlRouterProvider.otherwise('/pl/ebooki');
*/    
  }



angular.module('qmiks').service('BookService', BookService);
angular.module('qmiks').service('MenuService', MenuService);

function BookService($timeout, $stateParams, $http) {

        var api = 'Catalog.json' ; //'http://qmiks.blob.core.windows.net/catalog/Catalog.json' ;
        var website = 'website.json' ;

        return { get: getBooks,
                 book: getSingleBook,
                 ebook: getBookFromSlug,
                 load: loadSlugs } ;


        function getBookFromSlug()
        {


        }


        function loadSlugs()
        {
            return $http.get(website).then(function(res) {
              console.log(res) ;
            }) ;            
        }

        function getBooks()
        {
            return $http.get(api).then(function(res){
                          
              var i, j ;

              for(i = 0 ; i < res.data.Sections.length ; i++)
              {
                for(j = 0; j < res.data.Sections[i].Books.length ; j++)
                {
                  res.data.Sections[i].Books[j].section_id = i  ;
                }
              }
              
          
              return res.data ;
            }) ;

        }

        function getSingleBook(section_id, book_id)
        {
      
          return $http.get(api).then(function(res){
          
            return res.data.Sections[section_id].Books[book_id] ;
          })
        }
}


function MenuService() {

  var menu = {} ;

  var languages = website.Languages ;

  for(var i in languages)
  {
                
      var language = languages[i].Display.toLowerCase() ;       

      var pages = languages[i].Pages ;                

      menu[language] = [] ;

      for(var j in pages)
      {
          var page = pages[j] ; 
          
          url: '/' + language + '/' + page.Slug,
          menu[language].push({slug: page.Slug, title:page.Title}) ;
      }


  }

  return {'menu': menu} ;

}


})();
