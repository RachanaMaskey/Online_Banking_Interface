$(document).ready(function(){
    $('.banner').slick({
      dots: true,             // Show navigation dots
      infinite: true,         // Infinite looping
      speed: 500,             // Transition speed
      slidesToShow: 1,        // Show one slide at a time
      slidesToScroll: 1,      // Scroll one slide per navigation
      autoplay: true,         // Enable auto-play
      autoplaySpeed: 3400     // Auto-play speed in ms
    });
  });