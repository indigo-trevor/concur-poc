$(document).ready(function(){Slider.init(),PageTransitions.init()});var PageTransitions=function(){return{init:function(){$(".arrow--previous").click(function(){Slider.prev()}),$(".arrow--next").click(function(){Slider.next()})}}}(),Slider=function(){function i(i){i.each(function(){var i=$(this),n=i.data("delay");i.data("animation");i.css({"animation-delay":n,"-webkit-animation-delay":n}),i.addClass("animated growLarger").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i.removeClass("animated growLarger")})})}function n(i){i.each(function(){var i=$(this),n=i.data("delay");i.data("animation");i.css({"animation-delay":n,"-webkit-animation-delay":n}),i.addClass("animated zoomIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i.removeClass("animated zoomIn")})})}return{init:function(){$(".slideshow").slick({slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1,swipe:!1,arrows:!1,speed:500,fade:!0}),$(".slideshow").on("beforeChange",function(a,o,t,e){var d=$('div.slideshow__slide[data-slick-index="'+t+'"]').find("[data-animation]"),s=$('div.slideshow__slide[data-slick-index="'+e+'"]').find("[data-animation]");i(d),n(s)})},next:function(){$(".slideshow").slick("slickNext")},prev:function(){$(".slideshow").slick("slickPrev")}}}();