var PageTransitions = (function() {

    function init() {
      $( ".arrow--previous" ).click(function() {
        Slider.prev();
      });
      $( ".arrow--next" ).click(function() {
        Slider.next();
      });
    }

    return {
      init: init
    }
})();
