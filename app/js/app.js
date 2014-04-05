var app = (function(document, $) {
  'use strict';
  var docElem = document.documentElement,

  _userAgentInit = function() {
    docElem.setAttribute('data-useragent', navigator.userAgent);
  },
  _init = function() {
    $(document).foundation();
    _userAgentInit();
  };

  return {
    init: _init
  };
}(document, jQuery));

(function($, smoothScroll) {
  'use strict';
  app.init();

  smoothScroll.init();

  $('.phone-slider').each(function (i, e) {
    var slider = $(e).unslider({
      speed: 500,
      delay: 5000,
      keys: true,
      dots: true,
      fluid: false
    });

    $(slider).click(function() {
      slider.data('unslider').next();
    });

  });

  $('.menu-button').click(function () {
    $('header').toggleClass('menu-open');
  });

  $('a', '.menu-items').click(function () {
    $('header').removeClass('menu-open');
  });
}(jQuery, smoothScroll));

