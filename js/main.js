(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    // hljs.initHighlightingOnLoad();

    // Header
    /*

    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });
    */

    // drop down list
    $(function() {
      $('#menu__button').on('click touchstart', function(e) {
        e.preventDefault();
        $('#menu__container').toggleClass('is-active').removeClass('is-hovered');
      });

    });

    // Lightbox2 options
    lightbox.option({
      'wrapAround': true
    });

    // fitvid on embed
    $('.media').fitVids();


    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      randomize: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      touch: true
    });



  });

})(jQuery); // End of use strict
