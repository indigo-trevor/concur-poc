$(document).ready(function(){Slider.init(),PageTransitions.init()});var PageTransitions=function(){return{init:function(){$(".arrow--previous").click(function(){Slider.prev()}),$(".arrow--next").click(function(){Slider.next()})}}}(),Slider=function(){function n(n){n.each(function(){var n=$(this),i=n.data("delay");n.data("animation");n.css({"animation-delay":i,"-webkit-animation-delay":i}),n.addClass("animated fadeInRight").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n.removeClass("animated fadeInRight")})})}function i(n){n.each(function(){var n=$(this),i=n.data("delay");n.data("animation");n.css({"animation-delay":i,"-webkit-animation-delay":i}),n.addClass("animated fadeInLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n.removeClass("animated fadeInLeft")})})}return{init:function(){$(".slideshow").slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1,swipe:!1,arrows:!1,speed:350}),$(".slideshow").on("init",function(n,i){var a=$("div.slideshow__slide:first-child").find("[data-animation]");doAnimations(a)}),$(".slideshow").on("beforeChange",function(a,o,t,e){var d=$('div.slideshow__slide[data-slick-index="'+e+'"]').find("[data-animation]");console.log(t),console.log(e),e>t?n(d):i(d)})},next:function(){$(".slideshow").slick("slickNext")},prev:function(){$(".slideshow").slick("slickPrev")}}}();