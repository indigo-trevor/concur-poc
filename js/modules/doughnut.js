var Doughnut = (function() {

  function init() {
    $(".doughnut-phase--1").click(function() {
      $(".doughnut-phase--1").hide();
      $(".doughnut-phase--2").show();
      // Animation
      TweenLite.to(".doughnut-phase--2 svg", .1, { rotation: 15 , x: -20, ease: Linear.easeNone });
      TweenLite.to("#doughnut--1--animated--1", .55, { x: 15 , y: 15, ease: Linear.Back });
      TweenLite.to("#doughnut--1--animated--2", .55, { rotation: -90, x: 55 , y: 75, ease: Linear.Back });
      TweenLite.to("#doughnut--1--animated--3", .55, { rotation: -90, x: 20 , y: 35, ease: Linear.Back });
    });
    $(".doughnut-phase--2").click(function() {
      $(".doughnut-phase--2").hide();
      $(".doughnut-phase--3").show();
    });
    $(".doughnut-phase--3").click(function() {
      $(".doughnut-phase--3").hide();
      $(".doughnut-phase--4").show();
    });
    $(".doughnut-phase--4").click(function() {
      $(".doughnut-phase--4").hide();
      $(".doughnut-phase--5").show();
    });
    $(".doughnut-phase--5").click(function() {
      $(".doughnut-phase--5").hide();
      $(".doughnut-phase--6").show();
    });
    $(".doughnut-phase--6").click(function() {
      $(".doughnut-phase--6").hide();
      $(".doughnut-phase--7").show();
    });
    $(".doughnut-phase--7").click(function() {
      $(".doughnut-phase--7").hide();
      $(".doughnut-phase--8").show();
    });
    $(".doughnut-phase--8").click(function() {
      $(".doughnut-phase--8").hide();
      $(".doughnut-phase--9").show();
    });
  }

  function resetDoughnut() {
    $(".doughnut-phase--1").show();
    $(".doughnut-phase--2").hide();
    $(".doughnut-phase--3").hide();
    $(".doughnut-phase--4").hide();
    $(".doughnut-phase--5").hide();
    $(".doughnut-phase--6").hide();
    $(".doughnut-phase--7").hide();
    $(".doughnut-phase--8").hide();
    $(".doughnut-phase--9").hide();
    // Phase 1 reset
    TweenLite.to(".doughnut-phase--2 svg", .1, { rotation: 0 , ease: Linear.easeNone });
    TweenLite.to("#doughnut--1--animated--1", .1, { x: 0 , y: 0, ease: Linear.easeNone });
  }

  return {
    init: init,
    resetDoughnut: resetDoughnut
  }
})();
