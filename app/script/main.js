$(window).on('load', function () {
  $('#preloader').fadeOut()
})

$(function () {
  // STICKY MAINMENU
  $("#mainmenu-area").sticky({
    topSpacing: 0
  });
  //percircle
  $(".c100").percircle();
})