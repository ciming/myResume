$(window).on("load",function(){$("#preloader").fadeOut()}),$(function(){$("#mainmenu-area").sticky({topSpacing:0}),$(".c100").percircle(),$("body").scrollspy({target:"#header-navbar",offset:65}),$('ul#nav li a[href^="#"], .rotate-title a, .push-menu ul li a, a.navbar-brand,a.scrolltotop,.call-to-action a,.home-button a').on("click",function(a){var t=$(this).attr("href"),o=$(t).offset().top-40;$("html, body").animate({scrollTop:o},1500,"easeInOutExpo"),a.preventDefault()})});