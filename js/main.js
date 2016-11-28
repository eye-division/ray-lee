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

    // Instafeed
    var feed = new Instafeed({
      get: 'user',
      userId: '505489356',
      clientId: 'e125663693f24d41981f622bd6305f32'
    });
    feed.run();

  });

})(jQuery); // End of use strict
