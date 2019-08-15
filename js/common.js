$(document).ready(function () {
  

    if($(window).width() < 1199) {
    $('.services-item').mouseenter(function () {
      $(this).children('.services-item_overlay').css('width', '200%');
      $(this).children('button').css('margin-left', '32%').css( 'padding', '20px' ).css('bottom', '60px');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '90%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    }
    else {
      $('.services-item').mouseenter(function () {
        $(this).children('.services-item_overlay').css('width', '200%');
        $(this).children('button').css('margin-left', '32%').css( 'padding', '20px' ).css('bottom', '60px');
        });
      $('.services-item').mouseleave(function () {
        $(this).children('.services-item_overlay').css('width', '70%');
        $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
        });
    }
    if($(window).width() < 578) {
    $('.services-item').mouseenter(function () {
      $(this).children('.services-item_overlay').css('width', '100%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '90%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    }
    else {
      $('.services-item').mouseenter(function () {
        $(this).children('.services-item_overlay').css('width', '200%');
        $(this).children('button').css('margin-left', '32%').css( 'padding', '20px' ).css('bottom', '60px');
        });
      $('.services-item').mouseleave(function () {
        $(this).children('.services-item_overlay').css('width', '70%');
        $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
        });
    }
    if($(window).width() < 450) {
    $('.services-item').mouseenter(function () {
      $(this).children('.services-item_overlay').css('width', '140%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '105%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    }
    else {
      $('.services-item').mouseenter(function () {
        $(this).children('.services-item_overlay').css('width', '200%');
        $(this).children('button').css('margin-left', '32%').css( 'padding', '20px' ).css('bottom', '60px');
        });
      $('.services-item').mouseleave(function () {
        $(this).children('.services-item_overlay').css('width', '70%');
        $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
        });
    }
    if($(window).width() < 365) {
    $('.services-item').mouseenter(function () {
      $(this).children('.services-item_overlay').css('width', '140%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    $('.services-item').mouseleave(function () {
      $(this).children('.services-item_overlay').css('width', '125%');
      $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
      });
    }
    else {
      $('.services-item').mouseenter(function () {
        $(this).children('.services-item_overlay').css('width', '200%');
        $(this).children('button').css('margin-left', '32%').css( 'padding', '20px' ).css('bottom', '60px');
        });
      $('.services-item').mouseleave(function () {
        $(this).children('.services-item_overlay').css('width', '70%');
        $(this).children('button').css('margin-left', '30px').css( 'padding', '15px' ).css('bottom', '20px');
        });
    }
});