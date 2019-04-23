$(window).on('load', function() { // makes sure the whole site is loaded 
  $('.preloader').fadeOut(); // will first fade out the loading animation 
  $('.preloaderWrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(3000).css({'overflow':'visible'});
})	