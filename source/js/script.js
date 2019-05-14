/* ====================================
   Onload functions
   ==================================== */

var aeApp = aeApp || {};


aeApp.scrollThings = function(){
  $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var fadeOut   = (100 - (scrollTop * 0.3))/100;

      $('.site-title').css({
        'opacity': fadeOut
      });
  });
};

aeApp.bodyClass = function() {
  var pageClassElement = $('.page');
  var pageClass = pageClassElement.data('page-class');
  $('body').attr('class', '');
  $('body').addClass(pageClass);
};

aeApp.bgColor = function() {
  if($('body').hasClass('products-page')){
    $('body').velocity('stop').velocity({
        backgroundColor: '#B2D2C7',
      }, {
        duration: 2400,
        delay: 0
    });
  } else if ($('body').hasClass('sustainability-management-page')) {
    $('body').velocity('stop').velocity({
        backgroundColor: '#CAD5DF',
      }, {
        duration: 2400,
        delay: 0
    });
  } else if ($('body').hasClass('home-page')) {
    $('body').velocity('stop').velocity({
        backgroundColor: '#ffffff',
      }, {
        duration: 2400,
        delay: 1000
    });
  }
};


  aeApp.smoothState = function() {

    // SmoothState
    var $body = $('html, body');
    var targetElement;

    var options = {
        prefetch: true,
        prefetchOn: 'mouseover touchstart',
        cacheLength: 2,
        debug: true,
        blacklist: '.no-smoothState',

        onBefore: function(element) {
          targetElement = element;
        },

        onStart: {
          duration: 400, // Duration of our animation
          render: function($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
            // aeApp.onload();
          }
        },

        onReady: {
          duration: 0,
          render: function($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
            aeApp.onload();
          }
        }
      },
      smoothState = $('#main-container').smoothState(options).data('smoothState');
  };


  // Define load object
  aeApp.onload = function() {
    aeApp.smoothState();
    aeApp.bodyClass();
    aeApp.bgColor();
    // aeApp.sessionStorage();
    aeApp.scrollThings();
  };

  (function($, window, document) {

    aeApp.onload();

  }(window.jQuery, window, document));
