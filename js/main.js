(function($){
    'use strict';


      jQuery(document).ready(function($){
          
          $(".case-studies-carousel").owlCarousel({
              items: 3,
              margin: 35,
              loop: true,
              autoplay: false,
              nav: false,
              dots: true,
          })
         
          $(".testimonial-studies-carousel").owlCarousel({
              items: 1,
              loop: true,
              autoplay: false,
              nav: false,
              dots: true,
          })
         
      });



      jQuery(window).load(function(){
          
      });




    
})(jQuery);