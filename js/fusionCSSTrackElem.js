/**
 * Copyright (c) 2013 - 2018 fusionCSS. All rights reserved.
 * @link http://fusionCSS.com
 * @version 3.0.12
 */
!function(){function t(t,n){i>=e[t].top&&e[t].before?(e[t].before=!1,e[t].handler.call(e[t].element,n)):i<=e[t].top&&!e[t].before&&(e[t].before=!0,e[t].handler.call(e[t].element,n))}var n=window.jQuery||window.fusionLib,e=[],i=n(window).scrollTop(),s=[];n.fn.extend({trackPoint:function(s){var o=(s=s||{}).offset?s.offset:0,a=s.handler?s.handler:function(){},h="string"==typeof o&&o.match(/%$/)?"%":"px";return this.each(function(){var s=n(this),r={element:s,top:s.offset().top+("%"==h?parseInt(o)/100*n(window).height():parseInt(o)),before:!0,offset:o,handler:a};e.push(r),i>=r.top&&t(e.length-1,"down")})},trackPointSetOffset:function(i){var s="string"==typeof i&&i.match(/%$/)?"%":"px";return this.each(function(){n(this);for(var o=0;o<e.length;o++)if(this===e[o].element.get(0)){var a=e[o].top,h=e[o].element.offset().top+("%"==s?parseInt(i)/100*n(window).height():parseInt(i));e[o].offset=i,e[o].top=h,a!=e[o].top&&t(o,e[o].top>a?"up":"down");break}})}}),n(window).on("scroll",function(){var s=n(window).scrollTop(),o=s>i?"down":"up";if(s!=i){i=s;for(var a=0;a<e.length;a++)t(a,o)}}).on("resize",function(){for(var i=0;i<e[i].length;i++){var s=e[i].top,o="string"==typeof e[i].offset&&e[i].offset.match(/%$/)?"%":"px",a=e[i].element.offset().top+("%"==o?parseInt(e[i].offset)/100*n(window).height():parseInt(e[i].offset));e[i].top=a,s!=e[i].top&&t(i,e[i].top>s?"up":"down")}}),n.fn.extend({stickyOnScroll:function(t){return t=t||{},t.stuckClass=t.stuckClass?t.stuckClass:"stuck",t.handler=t.handler?t.handler:function(){},t.minWidth=t.minWidth?t.minWidth:null,t.maxWidth=t.maxWidth?t.maxWidth:null,t.offset=t.offset?t.offset:0,t.stuck=!1,t.canStick=!1,this.each(function(){var e=n(this);e.get(0)._stickyOpts=Object.assign({},t),e.wrap('<div class="stickyWrapper"></div>'),e.trackPoint({handler:function(t){var n=this.get(0)._stickyOpts;if("down"==t){n.canStick=!0;e=$(window).width();(null==n.minWidth||e>=n.minWidth)&&(null==n.maxWidth||e<=n.maxWidth)&&(n.stuck=!0,this.parent().height(this.outerHeight(!0)),this.addClass(n.stuckClass),n.handler.call(this,"stuck"))}else{n.canStick=!1;var e=$(window).width();(n.stuck||(null==n.minWidth||e>=n.minWidth)&&(null==n.maxWidth||e<=n.maxWidth))&&(n.stuck=!1,this.parent().height(""),this.removeClass(n.stuckClass),n.handler.call(this,"unstuck"))}},offset:t.offset}),s.push(e)})},stickyOnScrollOffset:function(t){return this.each(function(){for(var n=0;n<s.length;n++)if(s[n].get(0)===this){sticky[n].get(0)._stickyOpts.offset=t,sticky[n].trackPointSetOffset(t);break}})}}),n(window).on("resize",function(){for(var t=n(window).width(),e=0;e<s.length;e++){var i=s[e].get(0)._stickyOpts;i.stuck&&(null!=i.minWidth&&t<i.minWidth||null!=i.maxWidth&&t>i.maxWidth)?(i.stuck=!1,s[e].parent().height(""),s[e].removeClass(i.stuckClass),i.handler.call(s[e],"unstuck")):i.canStick&&!i.stuck&&(null==i.minWidth||t>=i.minWidth)&&(null==i.maxWidth||t<=i.maxWidth)&&(i.stuck=!0,s[e].parent().height(s[e].outerHeight(!0)),s[e].addClass(i.stuckClass),i.handler.call(s[e],"stuck"))}})}();