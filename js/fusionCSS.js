/*
 Copyright (c) 2013 - 2014 fusionCSS. All rights reserved.
 @link http://fusionCSS.com
*/
window.fusionLib||(window.$fl=window.fusionLib=jQuery);
$fl(document).ready(function(){$fl(".collapseMenu").each(function(a){var b='<option value="" selected="selected">Menu...</option>',c=$fl(this),d=!1;c.find("a").each(function(){for(var a=$fl(this),c=0,d="",e=a.parent();null!=e[0];)"ul"==e[0].nodeName.toLowerCase()&&c++&&(d+=" - "),e=e.parent();b+='<option value="'+a.attr("href")+'">'+d+a.text()+"</option>"});c.after('<select id="collapsedMenu'+a+'">'+b+"</select>");a=$fl("#collapsedMenu"+a);c.hasClass("hidden-t")&&(a.addClass("visible-t"),d=!0);c.hasClass("hidden-s")&&
(a.addClass("visible-s"),d=!0);c.hasClass("hidden-phone")&&(a.addClass("visible-phone"),d=!0);if(c.hasClass("hidden-m")||c.hasClass("hidden-desktop"))a.addClass("visible-m"),d=!0;c.hasClass("hidden-l")&&(a.addClass("visible-l"),d=!0);d||(c.addClass("hidden-t").addClass("hidden-s"),a.addClass("visible-t").addClass("visible-s"));a.bind("change",function(){window.location=$fl(this).val()})});$fl(".uploadButton input").bind("change",function(a){$fl(this).parent().find("span").html($fl(this).val().split(/(\\|\/)/g).pop())});
$fl("table.responsive").each(function(a,b){$fl(b).wrap('<div class="responsiveTableWrapper" />');$fl(b).wrap('<div class="responsiveTableWrapperInner" />')});$fl("#viewSlideInMenu").length&&($fl("body").append('<div id="slideInMenuOverlay"></div>').append('<div id="slideInMenu" role="menu"></div>'),$fl("#slideInMenu").attr("aria-hidden",!0),$fl("ul.slideInMenu").each(function(a){$fl(this).hasClass("slideInMenuRootOnly")?($fl("#slideInMenuOverlay").html("<ul>"+$fl(this).html()+"</ul>").find("li ul").remove(),
$fl("#slideInMenu").append($fl("#slideInMenuOverlay").html())):$fl("#slideInMenu").append("<ul>"+$fl(this).html()+"</ul>")}),$fl("#slideInMenuOverlay").html("").bind("click",function(a){$fl("#slideInMenuOverlay").removeClass("slideInMenuShow");$fl("#slideInMenu").removeClass("slideInMenuShow").attr("aria-hidden",!0)}),$fl("#viewSlideInMenu").bind("click",function(a){$fl("#slideInMenuOverlay").addClass("slideInMenuShow");$fl("#slideInMenu").addClass("slideInMenuShow").attr("aria-hidden",!1)}));var b=
$fl("#scrollToTop");if(b.length){var f=function(){var a=$fl(window);0<a.scrollTop()&&(a.scrollTop(Math.max(0,a.scrollTop()-Math.max(10,a.scrollTop()/20))),window.setTimeout(f,10))};b.bind("click",f);$fl(window).bind("scroll",function(){$fl(this).scrollTop()>(null!=b.attr("data-showat")?b.attr("data-showat"):600)?b.removeClass("hide"):b.addClass("hide")})}});
