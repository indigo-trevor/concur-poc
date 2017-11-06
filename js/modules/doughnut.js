var Doughnut = (function() {

  function init() {
    $(".doughnut-phase--1").click(function() {
      $(".doughnut-phase--1").hide();
      $(".doughnut-phase--2").show();
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
  }

  return {
    init: init,
    resetDoughnut: resetDoughnut
  }
})();
