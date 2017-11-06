var PageTransitions = (function() {

  function init() {
    $(".arrow--prev").click(function() {
      Slider.prev();
    });
    $(".arrow--next").click(function() {
      Slider.next();
    });
  }

  return {
    init: init
  }
})();
