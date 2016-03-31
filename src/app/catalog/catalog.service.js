(function() {
  'use strict';

angular.module('qmiks').service('CatalogService', CatalogService);


function CatalogService($timeout, $stateParams, $http) {

        var api = 'Catalog.json' ; //'http://qmiks.blob.core.windows.net/catalog/Catalog.json' ;
        var website = 'website.json' ;
        var sections = {} ;
        var slugs = {} ;

        return { load: loadCatalog, getSlides: getSlides, book: getSingleBook } ;

        
        function loadCatalog(page)
        {
            return $http.get(page.CatalogUrl).then(function(res) {
                sections = res.data.Sections ;
                slugs = loadSlugs() ;
                return res.data.Sections ;

            }) ;
            
        }

        function getSlides(page)
        {
          return page.Banner.Images ;
        }

        function loadSlugs()
        {
          console.log(sections[0].Books) ;
          var slugs = {} ;

          for(var i in sections)
          {
            var books = sections[i].Books ;

            for(var j in books)
            {
                var book = books[j] ;              
                slugs[book.Slug] = {section: i, book: j} ;
            }
          }

          return slugs ;
        }


        function getSingleBook(slug,language)
        {         
            return $http.get(catalogs[language]).then(function(res) {
                sections = res.data.Sections ;
                slugs = loadSlugs() ;
                return sections[slugs[slug].section].Books[slugs[slug].book] ;
            }) ;            
        }
}

})();