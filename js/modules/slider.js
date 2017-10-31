var Slider = (function() {

  function init() {
    $('.slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      swipe: false,
      arrows: false,
      speed: 350
    });

    $('.slideshow').on('init', function(e, slick) {
      var $firstAnimatingElements = $('div.slideshow__slide:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });

    $('.slideshow').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.slideshow__slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      console.log(currentSlide)
      console.log(nextSlide)
      if (nextSlide > currentSlide) {
        animateNext($animatingElements);
      } else {
        animatePrev($animatingElements);
      }
    });

  }

  function next() {
    $('.slideshow').slick('slickNext');
  }

  function prev() {
    $('.slideshow').slick('slickPrev');
  }

  function animateNext(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $animationType = 'animated fadeInRight';
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }

  function animatePrev(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $animationType = 'animated fadeInLeft';
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
