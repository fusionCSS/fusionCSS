/**
 * Copyright (c) 2013 - 2019 fusionCSS. All rights reserved.
 * @link http://fusionCSS.com
 * @version 3.2.1
 */
!function(){var f=[],l=$(window).scrollTop(),e=[];function c(e,t){l>=f[e].top&&f[e].before?(f[e].before=!1,f[e].handler.call(f[e].element,t,f[e]),f[e].element.trigger("pointReached",[t])):l<f[e].top&&!f[e].before&&(f[e].before=!0,f[e].handler.call(f[e].element,t,f[e]),f[e].element.trigger("pointReached",[t]))}function s(e){var t=e.offset;if(e.stoppedBy)for(var s=e.stoppedBy;t+=s.outerHeight(!0),s=s[0]._stickyOpts?s[0]._stickyOpts.stoppedBy:null;);return t}$.fn.extend({trackPoint:function(e){var o=(e=e||{}).offset?e.offset:0,i=e.handler?e.handler:function(){},n=e.onBeforeResize?e.onBeforeResize:function(){},r=e.onAfterResize?e.onAfterResize:function(){},a="string"==typeof o&&o.match(/%$/)?"%":"px";return this.each(function(){var e=$(this),t="%"==a?parseInt(o)/100*$(window).height():parseInt(o),s={element:e,top:e.offset().top-t,before:!0,offset:o,offsetPixels:t,handler:i,onBeforeResize:n,onAfterResize:r};f.push(s),e.wrap('<div class="trackPointWrapper"></div>'),s.top<=l&&c(f.length-1,"down"),f.sort(function(e,t){return t.top-e.top})})},trackPointSetOffset:function(o){var i="string"==typeof o&&o.match(/%$/)?"%":"px";return this.each(function(){for(var e=0;e<f.length;e++)if(this===f[e].element[0]){var t=f[e].top,s="%"==i?parseInt(o)/100*$(window).height():parseInt(o);f[e].top=f[e].element.offset().top-s,f[e].offset=o,f[e].offsetPixels=s,t!=f[e].top&&c(e,f[e].top>t?"up":"down");break}})}}),$(window).on("scroll",function(){var e=$(window).scrollTop(),t=l<e?"down":"up";if(e!=l){l=e;for(var s=0;s<f.length;s++)c(s,t)}}).on("resize",function(){for(var e=0;e<f.length;e++){f[e].onBeforeResize.call(f[e].element,f[e]);var t=f[e].top,s="%"==("string"==typeof f[e].offset&&f[e].offset.match(/%$/)?"%":"px")?parseInt(f[e].offset)/100*$(window).height():parseInt(f[e].offset);f[e].top=f[e].element.offset().top-s,f[e].offsetPixels=s,t!=f[e].top&&c(e,f[e].top>t?"up":"down"),f[e].onAfterResize.call(f[e].element,f[e])}}),$.fn.extend({stickyOnScroll:function(t){return(t=t||{}).stuckClass=t.stuckClass?t.stuckClass:"stuck",t.handler=t.handler?t.handler:function(){},t.minWidth=t.minWidth?t.minWidth:null,t.maxWidth=t.maxWidth?t.maxWidth:null,t.offset=t.offset?t.offset:0,t.stuck=!1,t.stoppedBy=t.stoppedBy?t.stoppedBy:null,t.releasedBy=t.releasedBy?t.releasedBy:null,t.releasedByEdge=t.releasedByEdge?t.releasedByEdge:"bottom",t.released=!1,this.each(function(){var o=$(this);o[0]._stickyOpts=t,o.trackPoint({handler:function(e,t){var s=this[0]._stickyOpts;"down"==e?(s.stuck=!0,this.parent().height(this.outerHeight(!0)),this.addClass(s.stuckClass).css("top",t.offsetPixels+"px"),s.handler.call(this,"stuck"),this.trigger("stuck"),s.releasedBy&&s.releasedBy.trackPointSetOffset(-("top"===s.releasedByEdge?0:s.releasedBy.outerHeight(!1))+(this.position().top+this.outerHeight(!1)))):"up"==e&&(s.stuck=!1,this.parent().height(""),this.removeClass(s.stuckClass),s.handler.call(this,"unstuck"),this.trigger("unstuck"))},onBeforeResize:function(){this[0]._stickyOpts.stuck&&(this.parent().height(""),this.removeClass(t.stuckClass)),this.trackPointSetOffset(s(this[0]._stickyOpts))},onAfterResize:function(e){this[0]._stickyOpts.stuck&&(this.parent().height(this.outerHeight(!0)),this.addClass(t.stuckClass).css("top",e.offsetPixels+"px"),t.releasedBy&&t.releasedBy.trackPointSetOffset(-("top"===t.releasedByEdge?0:t.releasedBy.outerHeight(!1))+(this.position().top+this.outerHeight(!1))))},offset:s(t)}),t.releasedBy&&t.releasedBy.trackPoint({handler:function(e,t){var s=o[0]._stickyOpts;s.stuck&&("up"==e?(o.addClass(s.stuckClass),s.released=!1):"down"==e&&(o.removeClass(s.stuckClass),s.released=!0))},onBeforeResize:function(){o[0]._stickyOpts.released&&o[0]._stickyOpts.stuck&&o.add(t.stuckClass)},onAfterResize:function(e){o[0]._stickyOpts.released&&o[0]._stickyOpts.stuck&&o.removeClass(t.stuckClass)},offset:-("top"===t.releasedByEdge?0:t.releasedBy.outerHeight(!1))+(o.position().top+o.outerHeight(!1))}),o.parent().addClass("stickyWrapper"),e.push(o)})},stickyOnScrollOffset:function(e){return this.each(function(){this._stickyOpts.offset=e,$(this).trackPointSetOffset(s(this._stickyOpts))})}})}();