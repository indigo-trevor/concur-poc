var Doughnut = (function() {

  function init() {
    $(".doughnut-phase--1").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--1").hide();
      $(".doughnut-phase--2").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: 15 , x: -15, ease: Linear.easeNone });
      TweenLite.to("#doughnut--2--animated--1", .55, { x: 15 , y: 15, ease: Linear.Back });
      TweenLite.to("#doughnut--2--animated--2", .55, { rotation: -90, x: 55 , y: 75, ease: Linear.Back });
      TweenLite.to("#doughnut--2--animated--3", .55, { rotation: -90, x: 20 , y: 35, ease: Linear.Back });
    });
    $(".doughnut-phase--2").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--2").hide();
      $(".doughnut-phase--3").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: -15, x: -20, ease: Linear.easeNone });
      TweenLite.to("#doughnut--3--animated--1", .55, { rotation: 45, x: 65, y: -15, ease: Linear.Back });
      TweenLite.to("#doughnut--3--animated--2", .55, { rotation: -90, x: 70, ease: Linear.Back });
      TweenLite.to("#doughnut--3--animated--3", .55, { rotation: -90, x: 35, ease: Linear.Back });
    });
    $(".doughnut-phase--3").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--3").hide();
      $(".doughnut-phase--4").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: 5 , x: -25, ease: Linear.easeNone });
      TweenLite.to("#doughnut--4--animated--1", .55, { rotation: -90, x: 60, y: 45, ease: Linear.Back });
      TweenLite.to("#doughnut--4--animated--2", .55, { rotation: -90, x: 35, y: 15, ease: Linear.Back });
      TweenLite.to("#doughnut--4--animated--3", .55, { rotation: -90, x: 45, y: 5, ease: Linear.Back });
    });
    $(".doughnut-phase--4").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--4").hide();
      $(".doughnut-phase--5").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: 25 , x: -15, ease: Linear.easeNone });
      TweenLite.to("#doughnut--5--animated--1", .55, { rotation: -45, x: -55, y: -25, ease: Linear.Back });
      TweenLite.to("#doughnut--5--animated--2", .55, { rotation: 90, x: -15, y: 0, ease: Linear.Back });
      TweenLite.to("#doughnut--5--animated--3", .55, { rotation: -25, x: -30, y: -5, ease: Linear.Back });
    });
    $(".doughnut-phase--5").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--5").hide();
      $(".doughnut-phase--6").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: 0 , x: -20, ease: Linear.easeNone });
      TweenLite.to("#doughnut--6--animated--1", .55, { rotation: -90, x: 75, y: 40, ease: Linear.Back });
      TweenLite.to("#doughnut--6--animated--2", .55, { rotation: 25, x: 80, y: 0, ease: Linear.Back });
      TweenLite.to("#doughnut--6--animated--3", .55, { rotation: -90, x: 50, y: 25, ease: Linear.Back });
      TweenLite.to("#doughnut--6--animated--4", .55, { rotation: 70, x: 75, y: 30, ease: Linear.Back });
    });
    $(".doughnut-phase--6").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--6").hide();
      $(".doughnut-phase--7").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: -15 , x: -10, ease: Linear.easeNone });
      TweenLite.to("#doughnut--7--animated--1", .55, { rotation: 45, x: 0, y: -5, ease: Linear.Back });
      TweenLite.to("#doughnut--7--animated--2", .55, { rotation: -25, x: -5, y: -10, ease: Linear.Back });
      TweenLite.to("#doughnut--7--animated--3", .55, { rotation: -25, x: -15, y: -15, ease: Linear.Back });
    });
    $(".doughnut-phase--7").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--7").hide();
      $(".doughnut-phase--8").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: -30 , x: 0, ease: Linear.easeNone });
      TweenLite.to("#doughnut--8--animated--1", .55, { rotation: 45, x: -5, y: -50, ease: Linear.Back });
      TweenLite.to("#doughnut--8--animated--2", .55, { rotation: -45, x: -65, y: 5, ease: Linear.Back });
      TweenLite.to("#doughnut--8--animated--3", .55, { rotation: -45, x: -25, y: -5, ease: Linear.Back });
      TweenLite.to("#doughnut--8--animated--4", .55, { rotation: 45, x: -25, y: -15, ease: Linear.Back });
    });
    $(".doughnut-phase--8").click(function() {
      // Show next svg and hide current svg
      $(".doughnut-phase--8").hide();
      $(".doughnut-phase--9").show();
      // Play sound effect
      playAudioDoughnut();
      // Animation
      TweenLite.to(".doughnut-phase svg", .1, { rotation: 0 , x: 0, ease: Linear.easeNone });
      TweenLite.to("#doughnut--9--animated--0", .35, { y: -25, ease: Linear.Back });
      TweenLite.to("#doughnut--9--animated--1", .55, { rotation: 45, x: 45, y: 45, ease: Linear.Back });
      TweenLite.to("#doughnut--9--animated--2", .55, { rotation: -25, x: 5, y: 50, ease: Linear.Back });
      TweenLite.to("#doughnut--9--animated--3", .55, { rotation: -45, x: 10, y: 30, ease: Linear.Back });
      TweenLite.to("#doughnut--9--animated--4", .55, { rotation: 45, x: 10, y: 45, ease: Linear.Back });
      TweenLite.to("#doughnut--9--animated--5", .55, { rotation: 10, x: 15, y: 5, ease: Linear.Back });
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

  var x = document.getElementById("sound-effect--cookie");

  function playAudioDoughnut() {
    x.play();
  }

  function pauseAudioDoughnut() {
    x.pause();
  }

  return {
    init: init,
    resetDoughnut: resetDoughnut
  }
})();
