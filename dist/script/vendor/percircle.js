<<<<<<< HEAD
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,r){"use strict";t.fn.percircle=function(r){r||(r={}),t.extend(r,{animate:!0});return this.each(function(){var s=t(this),o="",n=function(t,r){s.on("mouseover",function(){t.children("span").css("color",r)}),s.on("mouseleave",function(){t.children("span").attr("style","")})};s.hasClass("percircle")||s.addClass("percircle"),void 0!==s.attr("data-animate")&&(r.animate="true"==s.attr("data-animate")),r.animate&&s.addClass("animate"),void 0!==s.attr("data-progressBarColor")?(r.progressBarColor=s.attr("data-progressBarColor"),o="style='border-color: "+r.progressBarColor+"'",n(t(this),r.progressBarColor)):void 0!==r.progressBarColor&&(o="style='border-color: "+r.progressBarColor+"'",n(t(this),r.progressBarColor));var d=s.attr("data-percent")||r.percent||0,i=s.attr("data-perclock")||r.perclock||0,c=s.attr("data-perdown")||r.perdown||0;if(d){d>50&&s.addClass("gt50");var l=s.attr("data-text")||r.text||d+"%";t("<span>"+l+"</span>").appendTo(s),t('<div class="slice"><div class="bar" '+o+'></div><div class="fill" '+o+"></div></div>").appendTo(s),d>50&&t(".bar",s).css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)",transform:"rotate(180deg)"});var f=3.6*d;setTimeout(function(){t(".bar",s).css({"-webkit-transform":"rotate("+f+"deg)","-moz-transform":"rotate("+f+"deg)","-ms-transform":"rotate("+f+"deg)","-o-transform":"rotate("+f+"deg)",transform:"rotate("+f+"deg)"})},0)}else i?(s.hasClass("perclock")||s.addClass("perclock"),setInterval(function(){var r=new Date,e=a(r.getHours())+":"+a(r.getMinutes())+":"+a(r.getSeconds());s.html("<span>"+e+"</span>"),t('<div class="slice"><div class="bar" '+o+'></div><div class="fill" '+o+"></div></div>").appendTo(s);var n=r.getSeconds();0===n&&s.removeClass("gt50"),n>30&&(s.addClass("gt50"),t(".bar",s).css({"-webkit-transform":"rotate(180deg);scale(1,3)","-moz-transform":"rotate(180deg);scale(1,3)","-ms-transform":"rotate(180deg);scale(1,3)","-o-transform":"rotate(180deg);scale(1,3)",transform:"rotate(180deg);scale(1,3)"}));var d=6*n;t(".bar",s).css({"-webkit-transform":"rotate("+d+"deg)","-moz-transform":"rotate("+d+"deg)","-ms-transform":"rotate("+d+"deg)","-o-transform":"rotate("+d+"deg)",transform:"rotate("+d+"deg)"})},1e3)):c&&e(s,r,o)})};var e=function(r,e,a){var s,o=r.attr("data-secs")||e.secs,n=r.attr("data-timeUpText")||e.timeUpText,d=r[0].hasAttribute("data-reset")||e.reset;function i(){if((o-=1)>30&&r.addClass("gt50"),o<30&&r.removeClass("gt50"),f(),o<=0)return l(),void r.html("<span>"+n+"</span>")}function c(){s=setInterval(i,1e3)}function l(){clearInterval(s)}function f(){r.html("<span>"+o+"</span>"),t('<div class="slice"><div class="bar" '+a+'></div><div class="fill" '+a+"></div></div>").appendTo(r);var e=6*o;t(".bar",r).css({"-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-ms-transform":"rotate("+e+"deg)","-o-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"})}n.length>8&&(n="the end"),d&&r.on("click",function(){l(),o=e.secs,f(),c()}),c()},a=function(t){return t<10?"0"+t:t}});
=======
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,r){"use strict";t.fn.percircle=function(r){var s={animate:!0};r||(r={}),t.extend(r,s);return this.each(function(){var s=t(this),o="",n=function(t,r){s.on("mouseover",function(){t.children("span").css("color",r)}),s.on("mouseleave",function(){t.children("span").attr("style","")})};s.hasClass("percircle")||s.addClass("percircle"),void 0!==s.attr("data-animate")&&(r.animate="true"==s.attr("data-animate")),r.animate&&s.addClass("animate"),void 0!==s.attr("data-progressBarColor")?(r.progressBarColor=s.attr("data-progressBarColor"),o="style='border-color: "+r.progressBarColor+"'",n(t(this),r.progressBarColor)):void 0!==r.progressBarColor&&(o="style='border-color: "+r.progressBarColor+"'",n(t(this),r.progressBarColor));var d=s.attr("data-percent")||r.percent||0,i=s.attr("data-perclock")||r.perclock||0,c=s.attr("data-perdown")||r.perdown||0;if(d){d>50&&s.addClass("gt50");var l=s.attr("data-text")||r.text||d+"%";t("<span>"+l+"</span>").appendTo(s),t('<div class="slice"><div class="bar" '+o+'></div><div class="fill" '+o+"></div></div>").appendTo(s),d>50&&t(".bar",s).css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)",transform:"rotate(180deg)"});var f=3.6*d;setTimeout(function(){t(".bar",s).css({"-webkit-transform":"rotate("+f+"deg)","-moz-transform":"rotate("+f+"deg)","-ms-transform":"rotate("+f+"deg)","-o-transform":"rotate("+f+"deg)",transform:"rotate("+f+"deg)"})},0)}else i?(s.hasClass("perclock")||s.addClass("perclock"),setInterval(function(){var r=new Date,e=a(r.getHours())+":"+a(r.getMinutes())+":"+a(r.getSeconds());s.html("<span>"+e+"</span>"),t('<div class="slice"><div class="bar" '+o+'></div><div class="fill" '+o+"></div></div>").appendTo(s);var n=r.getSeconds();0===n&&s.removeClass("gt50"),n>30&&(s.addClass("gt50"),t(".bar",s).css({"-webkit-transform":"rotate(180deg);scale(1,3)","-moz-transform":"rotate(180deg);scale(1,3)","-ms-transform":"rotate(180deg);scale(1,3)","-o-transform":"rotate(180deg);scale(1,3)",transform:"rotate(180deg);scale(1,3)"}));var d=6*n;t(".bar",s).css({"-webkit-transform":"rotate("+d+"deg)","-moz-transform":"rotate("+d+"deg)","-ms-transform":"rotate("+d+"deg)","-o-transform":"rotate("+d+"deg)",transform:"rotate("+d+"deg)"})},1e3)):c&&e(s,r,o)})};var e=function(r,e,a){function s(){if((i-=1)>30&&r.addClass("gt50"),i<30&&r.removeClass("gt50"),d(),i<=0)return n(),void r.html("<span>"+c+"</span>")}function o(){f=setInterval(s,1e3)}function n(){clearInterval(f)}function d(){r.html("<span>"+i+"</span>"),t('<div class="slice"><div class="bar" '+a+'></div><div class="fill" '+a+"></div></div>").appendTo(r);var e=6*i;t(".bar",r).css({"-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-ms-transform":"rotate("+e+"deg)","-o-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"})}var i=r.attr("data-secs")||e.secs,c=r.attr("data-timeUpText")||e.timeUpText,l=r[0].hasAttribute("data-reset")||e.reset;c.length>8&&(c="the end");var f;l&&r.on("click",function(){n(),i=e.secs,d(),o()}),o()},a=function(t){return t<10?"0"+t:t}});
>>>>>>> e92c2690334abc8f8b5e7c3b30d28b2d3441968d
