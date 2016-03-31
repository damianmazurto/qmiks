(function() {
  'use strict';

  angular
    .module('qmiks')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($timeout, $stateParams, book, $rootScope, $location, ezfb) {

    var vm = this;

      
    vm.myInterval = 5000;
    vm.noWrapSlides = false;
    var book_id = $stateParams.id ;

    var slides = vm.slides = [] ;

    for (var i=1; i <= 6; i++) {
      slides.push({
        image: 'assets/images/qmiks' + i + '.jpg'
      }) ;
   
    }
    console.log(book) ;

    $rootScope.title = book.PageTitle ;
    $rootScope.description = book.ShortDescription ;
    
    vm.shareLink = $location.path() ;
    
    vm.getLocation = function() {

      return $location.absUrl() ;
    }

    vm.share = function () {
    ezfb.ui(
      {
        method: 'share',
        title: book.Title,
        picture: book.CoverUrl,
        href: $location.absUrl(),
        description: book.Description
      },
      function (res) {
        // res: FB.ui response
      }
    );
    };

    vm.screengroup = {
                'transitionIn'    : 'none',
                'transitionOut'   : 'none',
                'titlePosition'   : 'over',
                'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fbplus-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
                }
            } ;

    var books = vm.books = [{id: '1', name: 'Dziewczynka z zapałkami', src: 'assets/images/cover1.jpg'},
                            {id: '2', name: 'Brzydkie kaczątko', src: 'assets/images/cover2.jpg'},
                            {id: '3', name: 'Calineczka', src: 'assets/images/cover3.jpg'},
                            {id: '4', name: 'The little match-seller', src: 'assets/images/cover4.jpg'},
                            {id: '5', name: 'The Ugly Ducking', src: 'assets/images/cover5.jpg'},
                            {id: '6', name: 'Thumbelina', src: 'assets/images/cover6.jpg'}, 
                            {id: '7', name: 'The Snow Queen', src: 'assets/images/cover7.jpg'}]

    var books_details = vm.book_details = [{

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover1.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover2.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover3.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover1.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover2.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover3.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover4.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover5.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover6.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    },
    {

      "Title": "The Snow Queen",
      "Authors": "Hans Christian Andersen, Kate Friend, Mateya Arkova",
      "Description": "Read Aloud version of beloved classic fairy tale. Retold and bountifully illustrated.  Read and listen in the same time. \n\t\tTwo playmates live happily in a village until one of them is struck with a shard of glass from a mirror made by an evil fairy. The boy’s heart turns cruel and sad, and he is taken away by the Snow Queen to be her vassal. The girl must go on an epic journey to rescue him from the Snow Queen and bring him back to the family and friends who love him. Will she rescue her playmate, or will they both fall into the power of the Snow Queen and live in the frozen ice forever? This beautiful tale of love and friendship comes to life with charming illustrations to delight readers of all ages.",
      "Publisher": "Qmiks",
      "PageNum": 41,
      "Language": "en-US",
      "Date": "2015-9-12",
      "CoverPath": "assets/images/cover7.jpg",
      "BuyLinks":[{"Name":"IBooks","Url":"https://itunes.apple.com","LinkImageURL":"kindle.png"}],
      "Screenshots":[{"Url":"screenshot1.jpg"},{"Url":"screenshot2.jpg"},{"Url":"screenshot3.jpg"},{"Url":"screenshot4.jpg"},{"Url":"screenshot5.jpg"}]
    }] ;

    vm.details = book ;

  }


})();
