$(document).ready(function () {
  

    if($(window).width() < 1199) {
    $('.services-item').mouseenter(function () {
      $('a.button').removeClass('serv_active');
      $(this).children('.services-item_overlay').css('width', '200%');
      $(this).children('a.button').toggleClass('serv_active');
      });
    $('.services-item').mouseleave(function () {

      $(this).children('.services-item_overlay').css('width', '90%');
      $(this).children('a.button').toggleClass('serv_active');
      $('a.button').removeClass('serv_active');
      });
    }
    if($(window).width() < 450) {
    $('.services-item').mouseenter(function () {
      $('a.button').removeClass('serv_active');
      $(this).children('.services-item_overlay').css('width', '200%');
      $(this).children('a.button').toggleClass('serv_active');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '115%');
      $(this).children('a.button').toggleClass('serv_active');
      $('a.button').removeClass('serv_active');
      });
    }
    if($(window).width() < 365) {
    $('.services-item').mouseenter(function () {
      $('a.button').removeClass('serv_active');
      $(this).children('.services-item_overlay').css('width', '200%');
      $(this).children('a.button').toggleClass('serv_active');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '125%');
      $(this).children('a.button').toggleClass('serv_active');
      $('a.button').removeClass('serv_active');
      });
    }
    else {
      $('.services-item').mouseenter(function () {
        $('a.button').removeClass('serv_active');
        $(this).children('.services-item_overlay').css('width', '200%');
        $(this).children('a.button').toggleClass('serv_active');

        });
      $('.services-item').mouseleave(function () {
        $(this).children('.services-item_overlay').css('width', '70%');
        $(this).children('a.button').toggleClass('serv_active');
        $('a.button').removeClass('serv_active');
        });
        
    }
    
});