$(window).on('load', function () {
  $('#preloader').fadeOut()
})

$(function () {

  // STICKY MAINMENU
  $("#mainmenu-area").sticky({
    topSpacing: 0
  });

  // percircle
  $(".c100").percircle();

  // nav scroll activr

  $('body').scrollspy({
    target: '#header-navbar',
    offset: 65
  });

  // nav scroll

  $('ul#nav li a[href^="#"], .rotate-title a, .push-menu ul li a, a.navbar-brand,a.scrolltotop,.call-to-action a,.home-button a').on('click', function (event) {
    var id = $(this).attr("href");
    var offset = 40;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
      scrollTop: target
    }, 1500, "easeInOutExpo");
    event.preventDefault();
  });
})