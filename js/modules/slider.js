var Slider = (function() {

  function init() {
    $('.slideshow').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      swipe: false,
      arrows: false,
      speed: 500,
      fade: true
    });

    // $('.slideshow').on('init', function(e, slick) {
    //   var $firstAnimatingElements = $('div.slideshow__slide:first-child').find('[data-animation]');
    //   doAnimations($firstAnimatingElements);
    // });

    $('.slideshow').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingLeavingElements = $('div.slideshow__slide[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
      var $animatingEnteringElements = $('div.slideshow__slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      animatePrev($animatingLeavingElements);
      animateNext($animatingEnteringElements);
    });

  }

  function next() {
    $('.slideshow').slick('slickNext');
  }

  function prev() {
    $('.slideshow').slick('slickPrev');
  }

  function animatePrev(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $animationType = 'animated growLarger';
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }

  function animateNext(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $animationType = 'animated zoomIn';
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }


  return {
    init: init,
    next: next,
    prev: prev
  }
})();
