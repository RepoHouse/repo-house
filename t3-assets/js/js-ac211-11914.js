

/*===============================
/investor/components/com_sppagebuilder/assets/js/jquery.parallax.js
================================================================================*/;
!function(t){var n=t(window),a=n.height();n.resize(function(){a=n.height()}),t.fn.parallax=function(o,r,i){var s,c,e=t(this);function l(){var i=n.scrollTop();e.each(function(){var n=t(this),l=n.offset().top;l+s(n)<i||l>i+a||!e.data("sppbparallax")||e.css("backgroundPosition",o+" "+Math.round((c-i)*r)+"px")})}e.data("sppbparallax",!0),e.css("backgroundAttachment","fixed"),e.each(function(){c=e.offset().top}),s=i?function(t){return t.outerHeight(!0)}:function(t){return t.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===r)&&(r=.15),(arguments.length<3||null===i)&&(i=!0),n.bind("scroll",l).resize(l),l()},t.fn.parallaxDestroy=function(n,a){var o=t(this);o.data("sppbparallax")&&(n?o.css("backgroundPosition",n):o.css("backgroundPosition","0% 0%"),a?o.css("backgroundAttachment",a):o.css("backgroundAttachment","inherit"),o.data("sppbparallax",!1))}}(jQuery);


/*===============================
/investor/components/com_sppagebuilder/assets/js/sppagebuilder.js
================================================================================*/;
!function(t){"use strict";var e='[data-dismiss="sppb-alert"]',i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.2.0",i.prototype.close=function(e){var i=t(this),n=i.attr("data-target");n||(n=(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);function a(){s.detach().trigger("closed.sppb.alert").remove()}e&&e.preventDefault(),s.length||(s=i.hasClass("sppb-alert")?i:i.parent()),s.trigger(e=t.Event("close.sppb.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("sppb-fade")?s.one("bsTransitionEnd",a).emulateTransitionEnd(150):a())};var n=t.fn.spbalert;t.fn.spbalert=function(e){return this.each(function(){var n=t(this),s=n.data("sppb.alert");s||n.data("sppb.alert",s=new i(this)),"string"==typeof e&&s[e].call(n)})},t.fn.spbalert.Constructor=i,t.fn.spbalert.noConflict=function(){return t.fn.spbalert=n,this},t(document).on("click.sppb.alert.data-api",e,i.prototype.close)}(jQuery),function(t){"use strict";var e=function(e,i){this.$element=t(e).on("keydown.sppb.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".sppb-carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.sppb.carousel",t.proxy(this.pause,this)).on("mouseleave.sppb.carousel",t.proxy(this.cycle,this))};function i(i){return this.each(function(){var n=t(this),s=n.data("sppb.carousel"),a=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i),o="string"==typeof i?i:a.slide;s||n.data("sppb.carousel",s=new e(this,a)),"number"==typeof i?s.to(i):o?s[o]():a.interval&&s.pause().cycle()})}e.VERSION="3.2.0",e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".sppb-item"),this.$items.index(t||this.$active)},e.prototype.to=function(e){var i=this,n=this.getItemIndex(this.$active=this.$element.find(".sppb-item.active"));if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid.sppb.carousel",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){if(!this.sliding)return this.slide("next")},e.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},e.prototype.slide=function(e,i){var n=this.$element.find(".sppb-item.active"),s=i||n[e](),a=this.interval,o="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".sppb-item")[r]()}if(s.hasClass("active"))return this.sliding=!1;var p=s[0],d=t.Event("slide.sppb.carousel",{relatedTarget:p,direction:o});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(s)]);h&&h.addClass("active")}var c=t.Event("slid.sppb.carousel",{relatedTarget:p,direction:o});return t.support.transition&&this.$element.hasClass("sppb-slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(o),s.addClass(o),n.one("bsTransitionEnd",function(){s.removeClass([e,o].join(" ")).addClass("active"),n.removeClass(["active",o].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(1e3*n.css("transition-duration").slice(0,-1))):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var n=t.fn.sppbcarousel;t.fn.sppbcarousel=i,t.fn.sppbcarousel.Constructor=e,t.fn.sppbcarousel.noConflict=function(){return t.fn.sppbcarousel=n,this},t(document).ready(function(){t(".sppb-carousel").each(function(e){var i=t(this).find(".sppb-item"),n="sppb-carousel"+(e+1),s="";t(this).attr("id",n);for(var a=0;a<i.length;a++)s+=0==a?'<li data-sppb-target="#'+n+'" class="active" data-sppb-slide-to="0"></li>':'\n<li data-sppb-target="#'+n+'" data-sppb-slide-to="'+a+'"></li>';t(this).find(">.sppb-carousel-indicators").html(s),t(this).find(".sppb-carousel-control").attr("href","#"+n),t(this).find(".sppb-item").first().addClass("active")})}),t(document).on("click.sppb.carousel.data-api","[data-slide], [data-sppb-slide-to]",function(e){var n,s=t(this),a=t(s.attr("data-sppb-target")||(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(a.hasClass("sppb-carousel")){var o=t.extend({},a.data(),s.data()),r=s.attr("data-sppb-slide-to");r&&(o.interval=!1),i.call(a,o),r&&a.data("sppb.carousel").to(r),e.preventDefault()}}),t(window).on("load",function(){if(t('[data-sppb-ride="sppb-carousel"]').each(function(){var e=t(this);i.call(e,e.data())}),t(window).width()<767){var e=t(".sppb-carousel-pro-inner-content").outerHeight(!0)+50;t(".sppb-carousel-pro .sppb-item > img").css({height:e})}})}(jQuery),function(t){"use strict";t(document).on("click",".sppb-panel-heading",function(e){e.preventDefault();var i=t(this),n=i.closest(".sppb-panel-group").find(">div"),s=n.find(".sppb-panel-heading"),a=n.find(".sppb-panel-collapse");t(this).hasClass("active")?(t(this).removeClass("active"),i.next().slideUp()):(s.removeClass("active"),a.slideUp(),t(this).addClass("active").next().slideDown(function(){i[0].getBoundingClientRect().top<0&&t("html,body").animate({scrollTop:i.offset().top},400)}))})}(jQuery),function(t){"use strict";var e=function(e){this.element=t(e)};function i(i){return this.each(function(){var n=t(this),s=n.data("sppb.tab");s||n.data("sppb.tab",s=new e(this)),"string"==typeof i&&s[i]()})}e.VERSION="3.2.0",e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a")[0],a=t.Event("show.sppb.tab",{relatedTarget:s});if(e.trigger(a),!a.isDefaultPrevented()){var o=t(n);this.activate(e.closest("li"),i),this.activate(o,o.parent(),function(){e.trigger({type:"shown.sppb.tab",relatedTarget:s})})}}},e.prototype.activate=function(e,i,n){var s=i.find("> .active"),a=n&&t.support.transition&&s.hasClass("sppb-fade");function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("sppb-fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),n&&n()}a?s.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),s.removeClass("in")};var n=t.fn.sppbtab;t.fn.sppbtab=i,t.fn.sppbtab.Constructor=e,t.fn.sppbtab.noConflict=function(){return t.fn.sppbtab=n,this},t(document).ready(function(){t(".sppb-tab").each(function(e){var i="sppb-tab"+(e+1),n="sppb-content"+(e+1);t(this).find(">.sppb-nav").children().each(function(e){t(this).find(">a").attr("href","#"+i+"-"+(e+1)),t(this).find(">a").attr("id","#"+n+"-"+(e+1)),t(this).find(">a").attr("aria-controls","#"+i+"-"+(e+1))}),t(this).find(">.sppb-tab-content").children().each(function(e){t(this).attr("id",i+"-"+(e+1)),t(this).attr("aria-labelledby",n+"-"+(e+1))})})}),t(document).on("click.sppb.tab.data-api",'[data-toggle="sppb-tab"], [data-toggle="sppb-pill"]',function(e){e.preventDefault(),i.call(t(this),"show")})}(jQuery),function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("sppbtooltip",t,e)};e.VERSION="3.2.0",e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="sppb-tooltip" role="tooltip"><div class="sppb-tooltip-arrow"></div><div class="sppb-tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,i,n){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var s=this.options.trigger.split(" "),a=s.length;a--;){var o=s[a];if("click"==o)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=o){var r="hover"==o?"mouseenter":"focusin",l="hover"==o?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("sppb."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("sppb."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("sppb."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("sppb."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},e.prototype.show=function(){var e=t.Event("show.sppb."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("sppb-fade");var o="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,l=r.test(o);l&&(o=o.replace(r,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(o).data("sppb."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var p=this.getPosition(),d=s[0].offsetWidth,h=s[0].offsetHeight;if(l){var c=o,u=this.$element.parent(),f=this.getPosition(u);o="bottom"==o&&p.top+p.height+h-f.scroll>f.height?"top":"top"==o&&p.top-f.scroll-h<0?"bottom":"right"==o&&p.right+d>f.width?"left":"left"==o&&p.left-d<f.left?"right":o,s.removeClass(c).addClass(o)}var m=this.getCalculatedOffset(o,p,d,h);this.applyPlacement(m,o);var v=function(){n.$element.trigger("shown.sppb."+n.type),n.hoverState=null};t.support.transition&&this.$tip.hasClass("sppb-")?s.one("bsTransitionEnd",v).emulateTransitionEnd(150):v()}},e.prototype.applyPlacement=function(e,i){var n=this.tip(),s=n[0].offsetWidth,a=n[0].offsetHeight,o=parseInt(n.css("margin-top"),10),r=parseInt(n.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(r)&&(r=0),e.top=e.top+o,e.left=e.left+r,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,p=n[0].offsetHeight;"top"==i&&p!=a&&(e.top=e.top+a-p);var d=this.getViewportAdjustedDelta(i,e,l,p);d.left?e.left+=d.left:e.top+=d.top;var h=d.left?2*d.left-s+l:2*d.top-a+p,c=d.left?"left":"top",u=d.left?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(h,n[0][u],c)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".sppb-tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("sppb-fade in top bottom left right")},e.prototype.hide=function(){var e=this,i=this.tip(),n=t.Event("hide.sppb."+this.type);function s(){"in"!=e.hoverState&&i.detach(),e.$element.trigger("hidden.sppb."+e.type)}if(this.$element.removeAttr("aria-describedby"),this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),t.support.transition&&this.$tip.hasClass("sppb-fade")?i.one("bsTransitionEnd",s).emulateTransitionEnd(150):s(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var i=(e=e||this.$element)[0],n="BODY"==i.tagName;return t.extend({},"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect():null,{scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:n?t(window).width():e.outerWidth(),height:n?t(window).height():e.outerHeight()},n?{top:0,left:0}:e.offset())},e.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,n){var s={top:0,left:0};if(!this.$viewport)return s;var a=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-a-o.scroll,l=e.top+a-o.scroll+n;r<o.top?s.top=o.top-r:l>o.top+o.height&&(s.top=o.top+o.height-l)}else{var p=e.left-a,d=e.left+a+i;p<o.left?s.left=o.left-p:d>o.width&&(s.left=o.left+o.width-d)}return s},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".sppb-tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("sppb."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("sppb."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("sppb."+this.type)};var i=t.fn.sppbtooltip;t.fn.sppbtooltip=function(i){return this.each(function(){var n=t(this),s=n.data("sppb.tooltip"),a="object"==typeof i&&i;(s||"destroy"!=i)&&(s||n.data("sppb.tooltip",s=new e(this,a)),"string"==typeof i&&s[i]())})},t.fn.sppbtooltip.Constructor=e,t.fn.sppbtooltip.noConflict=function(){return t.fn.sppbtooltip=i,this}}(jQuery),function(t){"use strict";var e=function(t,e){this.init("sppbpopover",t,e)};if(!t.fn.sppbtooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.2.0",e.DEFAULTS=t.extend({},t.fn.sppbtooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="sppb-popover" role="tooltip"><div class="arrow"></div><h3 class="sppb-popover-title"></h3><div class="sppb-popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.sppbtooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".sppb-popover-title")[this.options.html?"html":"text"](e),t.find(".sppb-popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("sppb-fade top bottom left right in"),t.find(".sppb-popover-title").html()||t.find(".sppb-popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.sppbpopover;t.fn.sppbpopover=function(i){return this.each(function(){var n=t(this),s=n.data("sppb.popover"),a="object"==typeof i&&i;(s||"destroy"!=i)&&(s||n.data("sppb.popover",s=new e(this,a)),"string"==typeof i&&s[i]())})},t.fn.sppbpopover.Constructor=e,t.fn.sppbpopover.noConflict=function(){return t.fn.sppbpopover=i,this}}(jQuery),function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});return setTimeout(function(){i||t(n).trigger(t.support.transition.end)},e),this},t(function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery);var carousel=jQuery(".carousel");carousel&&jQuery(window).on("ready",function(){"undefined"!=typeof jQuery&&"undefined"!=typeof MooTools&&Element.implement({slide:function(t,e){return this}})}),function(){var t,e,i,n=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,s;for(e=i=0,n=(s=this.keys).length;n>i;e=++i)if(s[e]===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,s,a;for(i=n=0,s=(a=this.keys).length;s>n;i=++n)if(a[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),this.SPPBWOW=function(){function a(t){null==t&&(t={}),this.scrollCallback=n(this.scrollCallback,this),this.scrollHandler=n(this.scrollHandler,this),this.start=n(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new i}return a.prototype.defaults={boxClass:"sppb-wow",animateClass:"sppb-animated",offset:0,mobile:!0,live:!0},a.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},a.prototype.start=function(){var e,i,n,s,a;if(this.stopped=!1,this.boxes=function(){var t,i,n,s;for(s=[],t=0,i=(n=this.element.querySelectorAll("."+this.config.boxClass)).length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.all=function(){var t,i,n,s;for(s=[],t=0,i=(n=this.boxes).length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.boxes.length,this.disabled())this.resetStyle();else{for(i=0,n=(s=this.boxes).length;n>i;i++)e=s[i],this.applyStyle(e,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new t((a=this,function(t){var e,i,n,s,o;for(o=[],n=0,s=t.length;s>n;n++)i=t[n],o.push(function(){var t,n,s,a;for(a=[],t=0,n=(s=i.addedNodes||[]).length;n>t;t++)e=s[t],a.push(this.doSync(e));return a}.call(a));return o})).observe(document.body,{childList:!0,subtree:!0}):void 0},a.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},a.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},a.prototype.doSync=function(t){var e,i,n,a,o;if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return;for(o=[],i=0,n=(a=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n>i;i++)e=a[i],s.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),o.push(this.scrolled=!0)):o.push(void 0);return o}},a.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},a.prototype.applyStyle=function(t,e){var i,n,s,a;return n=t.getAttribute("data-sppb-wow-duration"),i=t.getAttribute("data-sppb-wow-delay"),s=t.getAttribute("data-sppb-wow-iteration"),this.animate((a=this,function(){return a.customStyle(t,e,n,i,s)}))},a.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},a.prototype.resetStyle=function(){var t,e,i,n,s;for(s=[],e=0,i=(n=this.boxes).length;i>e;e++)t=n[e],s.push(t.setAttribute("style","visibility: visible;"));return s},a.prototype.customStyle=function(t,e,i,n,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},a.prototype.vendors=["moz","webkit"],a.prototype.vendorSet=function(t,e){var i,n,s,a;for(i in a=[],e)n=e[i],t[""+i]=n,a.push(function(){var e,a,o,r;for(r=[],e=0,a=(o=this.vendors).length;a>e;e++)s=o[e],r.push(t[""+s+i.charAt(0).toUpperCase()+i.substr(1)]=n);return r}.call(this));return a},a.prototype.vendorCSS=function(t,e){var i,n,s,a,o,r;for(i=(n=window.getComputedStyle(t)).getPropertyCSSValue(e),a=0,o=(r=this.vendors).length;o>a;a++)s=r[a],i=i||n.getPropertyCSSValue("-"+s+"-"+e);return i},a.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},a.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},a.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},a.prototype.scrollHandler=function(){return this.scrolled=!0},a.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,n,s;for(s=[],e=0,i=(n=this.boxes).length;i>e;e++)(t=n[e])&&(this.isVisible(t)?this.show(t):s.push(t));return s}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},a.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},a.prototype.isVisible=function(t){var e,i,n,s,a;return i=t.getAttribute("data-sppb-wow-offset")||this.config.offset,s=(a=window.pageYOffset)+Math.min(this.element.clientHeight,innerHeight)-i,e=(n=this.offsetTop(t))+t.clientHeight,s>=n&&e>=a},a.prototype.util=function(){return null!=this._util?this._util:this._util=new e},a.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},a}()}.call(this),jQuery(function(t){(new SPPBWOW).init()}),function(t){var e,i,n,s={},a=document,o=window,r=a.documentElement,l=t.expando;function p(){var n,l,p,d,h=t(),c=0;if(t.each(s,function(t,e){var i=e.data.selector,n=e.$element;h=h.add(i?n.find(i):n)}),n=h.length)for(e=e||((d={height:o.innerHeight,width:o.innerWidth}).height||!(l=a.compatMode)&&t.support.boxModel||(d={height:(p="CSS1Compat"===l?r:a.body).clientHeight,width:p.clientWidth}),d),i=i||{top:o.pageYOffset||r.scrollTop||a.body.scrollTop,left:o.pageXOffset||r.scrollLeft||a.body.scrollLeft};c<n;c++)if(t.contains(r,h[c])){var u,f,m,v=t(h[c]),g=v.height(),b=v.width(),y=v.offset(),w=v.data("inview");if(!i||!e)return;y.top+g>i.top&&y.top<i.top+e.height&&y.left+b>i.left&&y.left<i.left+e.width?(m=(u=i.left>y.left?"right":i.left+e.width<y.left+b?"left":"both")+"-"+(f=i.top>y.top?"bottom":i.top+e.height<y.top+g?"top":"both"),w&&w===m||v.data("inview",m).trigger("inview",[!0,u,f])):w&&v.data("inview",!1).trigger("inview",[!1])}}t.event.special.inview={add:function(e){s[e.guid+"-"+this[l]]={data:e,$element:t(this)},n||t.isEmptyObject(s)||(n=setInterval(p,250))},remove:function(e){try{delete s[e.guid+"-"+this[l]]}catch(t){}t.isEmptyObject(s)&&(clearInterval(n),n=null)}},t(o).bind("scroll resize scrollstop",function(){e=i=null}),!r.addEventListener&&r.attachEvent&&r.attachEvent("onfocusin",function(){i=null}),t(document).on("inview",".sppb-progress",function(e,i,n,s){var a=t(this).find(".sppb-progress-bar");i&&(a.css("width",a.data("width")),t(this).unbind("inview"))}),t.fn.sppbanimateNumbers=function(e,i,n,s){return this.each(function(){var a=t(this),o=parseInt(a.text().replace(/,/g,""));i=void 0===i||i,t({value:o}).animate({value:e},{duration:null==n?1e3:n,easing:null==s?"swing":s,step:function(){a.text(Math.floor(this.value)),i&&a.text(a.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(a.text())!==e&&(a.text(e),i&&a.text(a.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})})},t(document).on("inview",".sppb-animated-number",function(e,i,n,s){var a=t(this);i&&(a.sppbanimateNumbers(a.data("digit"),!1,a.data("duration")),a.unbind("inview"))}),t(document).on("inview",".sppb-pie-chart",function(e,i,n,s){var a=t(this);if(i){var o={barColor:a.data("barcolor"),trackColor:a.data("trackcolor"),scaleColor:!1,lineWidth:a.data("width"),size:a.data("size"),onStep:function(t,e,i){a.find(".sppb-chart-percent > span").text(Math.round(i)+"%")}};if(a.data("duration")){var r=a.data("duration");o.animate={duration:r,enabled:!0}}a.easyPieChart(o),a.unbind("inview")}})}(jQuery),jQuery(function(t){function e(e,n){void 0===n&&(n=!1);var s=!1;return e.find(" input[type=text], input[type=email], input[type=radio], input[type=checkbox], textarea, select").each(function(e,a){if(s)return!1;if(n)t(this).on("change keyup",function(){var e=t(this).val().replace(/\s/g,""),n=t(this).attr("type"),a=t(this).attr("name");""===e||0===e.length?(s=!0,t(this).addClass("sppb-has-field-error")):(s=!1,t(this).removeClass("sppb-has-field-error")),"text"!==n||"captcha_question"===a||"phone"===a||isNaN(e)||s?(s=!1,t(this).removeClass("sppb-has-field-error")):(s=!0,t(this).addClass("sppb-has-field-error")),void 0!==t(this).prop("required")&&e.length>0&&"email"===n&&!s&&(i(e)?(t(this).removeClass("sppb-has-field-error"),s=!1):(t(this).addClass("sppb-has-field-error"),s=!0))});else{var o=t(this).val().replace(/\s/g,""),r=t(this).attr("type"),l=t(this).attr("name");""!==o&&0!==o.length||(s=!0,t(this).addClass("sppb-has-field-error")),"text"!==r||isNaN(o)||"captcha_question"===l||"phone"===l||s||(s=!0,t(this).addClass("sppb-has-field-error")),void 0!==t(this).prop("required")&&o.length>0&&"email"===t(this).attr("type")&&!s&&(i(o)||(t(this).addClass("sppb-has-field-error"),s=!0))}}),s}function i(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}function n(e){var n=!1;if(void 0!==e.prop("required")){var s=e.parents(".sppb-form-group"),a=e.val().replace(/\s/g,"");e.attr("type"),e.attr("name");if(void 0===s||"undefined"===s.find("span.sppb-form-builder-required"))return!1;if(0===a.length&&e.prop("required")&&(s.find("span.sppb-form-builder-required").show(),n=!0),a.length>0&&e.prop("required")&&(s.find("span.sppb-form-builder-required").hide(),n=!1),"radio"===e.attr("type")&&e.prop("required")){var o=e.attr("name");t('input[name="'+o+'"]').is(":checked")?(s.find("span.sppb-form-builder-required").hide(),n=!1):(s.find("span.sppb-form-builder-required").show(),n=!0)}if("checkbox"===e.attr("type")){s.find("input[type=checkbox]").length;var r=!1;s.find("input[type=checkbox]").each(function(e,i){if(t(this).prop("required")){var n=t(this).attr("name");t('input[name="'+n+'"]').is(":checked")||(r=!0)}if(r)return!1}),r?(s.find("span.sppb-form-builder-required").show(),n=!0):(s.find("span.sppb-form-builder-required").hide(),n=!1)}}return void 0!==e.prop("required")&&a.length>0&&"email"===e.attr("type")&&(i(a)?(s.find("span.sppb-form-builder-required").hide(),n=!1):(s.find("span.sppb-form-builder-required").show(),n=!0)),n}function s(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!1;return e.find(" input[type=text], input[type=email], input[type=radio], input[type=checkbox], textarea, select").each(function(e,a){if(!0===i)t(this).on("change keyup",function(e){if(s=n(t(this)))return!1});else if(s=n(t(this)))return!1}),s}e(t(".sppb-ajaxt-contact-form"),!0),t(document).on("submit",".sppb-ajaxt-contact-form",function(i){i.preventDefault();var n=t(this),s=t(this).serializeArray();if(e(n))return n.find(".sppb-form-validation-error").remove(),n.append('<p class="sppb-form-validation-error"> Please re-check required fields! </p>'),!1;n.find(".sppb-form-validation-error").remove();var a={name:"view_type",value:"page"};if(n.closest(".sp-page-builder").hasClass("mod-sppagebuilder")){a.value="module";var o={name:"module_id",value:n.closest(".sp-page-builder").data("module_id")};s.push(o)}else n.closest(".sp-page-builder").hasClass("sppb-article-page-wrapper")&&(a.value="article");s.push(a);var r={option:"com_sppagebuilder",task:"ajax",addon:"ajax_contact","g-recaptcha-response":n.find("#g-recaptcha-response").val(),data:s};return t.ajax({type:"POST",data:r,beforeSend:function(){n.find(".fa").addClass("fa-spinner fa-spin")},success:function(e){var i=t.parseJSON(e);try{var s=t.parseJSON(i.data),a=s.content,o="json"}catch(t){a=i.data,o="strings"}"json"==o?s.status&&(n.trigger("reset"),void 0===s.gcaptchaType||!s.gcaptchaType.length||"invisible"!=s.gcaptchaType&&"dynamic"!=s.gcaptchaType||((gcaptchaWidgetId=t("#"+s.gcaptchaId).attr("data-recaptcha-widget-id"))?(grecaptcha.reset(gcaptchaWidgetId),"invisible"==s.gcaptchaType&&grecaptcha.execute(gcaptchaWidgetId)):(grecaptcha.reset(),"invisible"==s.gcaptchaType&&grecaptcha.execute()))):n.trigger("reset"),n.find(".fa-spin").removeClass("fa-spinner fa-spin"),n.next(".sppb-ajax-contact-status").html(a).fadeIn().delay(4e3).fadeOut(500)}}),!1}),t(".sppb-addon-form-builder-form").length>0&&(s(t(".sppb-addon-form-builder-form"),!0),t('.sppb-form-builder-range input[type="range"]').on("input change",function(){var e=t(this),i=e.attr("min"),n=e.attr("max"),s=e.val(),a=(s-i)/(n-i)*100,o=Math.round(50*a/100)-25;e.next(".sppb-form-builder-range-output").css("left","calc("+a+"% - "+o+"px)").text(s)})),t(document).on("submit",".sppb-addon-form-builder-form",function(e){e.preventDefault();var i=t(this),n=t(this).serializeArray(),a=s(i),o=i.data("redirect"),r=i.data("redirect-url");if(a)return i.next(".sppb-ajax-contact-status").html('<span class="sppb-text-danger">Please check the required field!</span>').fadeIn().delay(4e3).fadeOut(500),!1;i.find('input[type="checkbox"]:not(:checked)').each(function(e,i){n.push({name:t(i).attr("name"),value:""})});var l={name:"view_type",value:"page"};if(i.closest(".sp-page-builder").hasClass("mod-sppagebuilder")){l.value="module";var p={name:"module_id",value:i.closest(".sp-page-builder").data("module_id")};n.push(p)}else i.closest(".sp-page-builder").hasClass("sppb-article-page-wrapper")&&(l.value="article");n.push(l);var d={option:"com_sppagebuilder",task:"ajax",addon:"form_builder","g-recaptcha-response":i.find("#g-recaptcha-response").val(),data:n};return t.ajax({type:"POST",data:d,beforeSend:function(){i.find(".fa").addClass("fa-spinner fa-spin")},success:function(e){var n=t.parseJSON(e);try{var a=t.parseJSON(n.data),l=a.content,p="json";void 0!==a.form_validation&&s(i)}catch(t){l=n.data,p="strings"}"json"==p?a.status&&(i.trigger("reset"),void 0===a.gcaptchaType||!a.gcaptchaType.length||"invisible"!=a.gcaptchaType&&"dynamic"!=a.gcaptchaType||(a.gcaptchaId?(gcaptchaWidgetId=t("#"+a.gcaptchaId).attr("data-recaptcha-widget-id"))&&(grecaptcha.reset(gcaptchaWidgetId),"invisible"==a.gcaptchaType&&grecaptcha.execute(gcaptchaWidgetId)):(grecaptcha.reset(),"invisible"==a.gcaptchaType&&grecaptcha.execute()))):i.trigger("reset"),i.find(".fa-spin").removeClass("fa-spinner fa-spin"),i.next(".sppb-ajax-contact-status").html(l).fadeIn().delay(4e3).fadeOut(500),"yes"===o&&setTimeout(function(){window.location.href=r},2500)}}),!1})}),jQuery(function(t){t(document).on("submit",".sppb-optin-form",function(e){e.preventDefault();var i=t(this),n=t(this).serializeArray(),s={name:"view_type",value:"page"};if(i.closest(".sp-page-builder").hasClass("mod-sppagebuilder")){s.value="module";var a={name:"module_id",value:i.closest(".sp-page-builder").data("module_id")};n.push(a)}else i.closest(".sp-page-builder").hasClass("sppb-article-page-wrapper")&&(s.value="article");n.push(s);var o={option:"com_sppagebuilder",task:"ajax",addon:"optin_form","g-recaptcha-response":i.find("#g-recaptcha-response").val(),data:n};return t.ajax({type:"POST",data:o,beforeSend:function(){i.find(".fa").addClass("fa-spinner fa-spin")},success:function(e){var n=t.parseJSON(e);if(!n.success)return i.find(".fa-spin").removeClass("fa-spinner fa-spin"),n.message?i.next(".sppb-optin-form-status").html('<p class="sppb-alert sppb-alert-warning">'+n.message+"</p>").fadeIn().delay(4e3).fadeOut(1e3):n.messages&&i.next(".sppb-optin-form-status").html('<p class="sppb-alert sppb-alert-warning">'+n.messages+"</p>").fadeIn().delay(4e3).fadeOut(1e3),!1;var s=t.parseJSON(n.data),a="sppb-alert sppb-alert-warning";if(s.status){a="sppb-alert sppb-alert-success";i.trigger("reset")}i.find(".fa-spin").removeClass("fa-spinner fa-spin"),i.next(".sppb-optin-form-status").html('<p class="'+a+'">'+s.content+"</p>").fadeIn().delay(4e3).fadeOut(1e3)}}),!1})}),jQuery(function(t){t(document).on("click",".sppb-magnific-popup",function(e){e.preventDefault();var i=t(this);i.magnificPopup({type:i.data("popup_type"),mainClass:i.data("mainclass")}).magnificPopup("open")})}),jQuery(function(t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(t(".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap").on("mouseover",function(e){t(this).toggleClass("flip")}),t(document).on("mouseenter",".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap",function(e){t(this).addClass("flip")}),t(document).on("mouseleave",".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap",function(e){t(this).removeClass("flip")})):(t(document).on("click",".sppb-addon-sppb-flibox.flipon-click .sppb-flipbox-panel, .threeD-flipbox.flipon-click .threeD-content-wrap",function(e){t(this).toggleClass("flip")}),t(document).on("mouseenter",".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap",function(){t(this).addClass("flip")}),t(document).on("mouseleave",".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap",function(){t(this).removeClass("flip")}))}),jQuery(function(t){new MutationObserver(function(e){e.forEach(function(e){var i=e.addedNodes;null!==i&&t(i).each(function(){t(this).find(".sppb-addon-countdown .sppb-countdown-timer").each(function(){var e=t(this),i=e.data("date")+" "+e.data("time");e.countdown(i,function(i){t(this).html(i.strftime('<div class="sppb-countdown-days sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%-D</span><span class="sppb-countdown-text">%!D: '+Joomla.JText._("COM_SPPAGEBUILDER_DAY")+","+Joomla.JText._("COM_SPPAGEBUILDER_DAYS")+';</span></div><div class="sppb-countdown-hours sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%H</span><span class="sppb-countdown-text">%!H: '+Joomla.JText._("COM_SPPAGEBUILDER_HOUR")+","+Joomla.JText._("COM_SPPAGEBUILDER_HOURS")+';</span></div><div class="sppb-countdown-minutes sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%M</span><span class="sppb-countdown-text">%!M:'+Joomla.JText._("COM_SPPAGEBUILDER_MINUTE")+","+Joomla.JText._("COM_SPPAGEBUILDER_MINUTES")+';</span></div><div class="sppb-countdown-seconds sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%S</span><span class="sppb-countdown-text">%!S:'+Joomla.JText._("COM_SPPAGEBUILDER_SECOND")+","+Joomla.JText._("COM_SPPAGEBUILDER_SECONDS")+";</span></div>")).on("finish.countdown",function(){t(this).html('<div class="sppb-countdown-finishedtext-wrap sppb-col-xs-12 sppb-col-sm-12 sppb-text-center"><h3 class="sppb-countdown-finishedtext">'+e.data("finish-text")+"</h3></div>")})})})})})}).observe(document.body,{childList:!0,subtree:!0})}),function(t){var e=function(t){this.$heading=t.heading,this.type=void 0===t.type?"word":t.type,this.animationDelay=2500,this.barAnimationDelay=3800,this.barWaiting=this.barAnimationDelay-3e3,this.lettersDelay=50,this.typeLettersDelay=150,this.selectionDuration=500,this.typeAnimationDelay=this.selectionDuration+800,this.revealDuration=600,this.revealAnimationDelay=1500,this.interval=0,this.init()};e.prototype.init=function(){var t=this.$heading.parent().find(".letters");this.singleLetters(t.find(".animated-text")),this.animateHeadline(this.$heading)},e.prototype.singleLetters=function(e){e.each(function(){var e=t(this),n=e.text().split(""),s=e.hasClass("is-visible");for(i in n)e.parents(".animation-wave").length>0&&(n[i]="<em>"+n[i]+"</em>"),n[i]=s?'<i class="in">'+n[i]+"</i>":"<i>"+n[i]+"</i>";var a=n.join("");e.html(a).css("opacity",1)})},e.prototype.animateHeadline=function(e){var i=this.animationDelay,n=this;e.each(function(){var e=t(this);if(e.hasClass("loading-bar"))i=n.barAnimationDelay,setTimeout(function(){e.find(".animated-text-words-wrapper").addClass("is-loading")},n.barWaiting);else if(e.hasClass("text-clip")){var s=e.find(".animated-text-words-wrapper"),a=s.width()+10;s.css("width",a)}else if(!e.hasClass("type")){var o=e.find(".animated-text-words-wrapper .animated-text.is-visible");n.setParentClassWidth(o,delay=!1)}setTimeout(function(){n.hideWord(e.find("span.is-visible").eq(0))},i)})},e.prototype.hideWord=function(t){var e=this.takeNext(t),i=this;if(t.parents(".animated-heading-text").hasClass("type")){var n=t.parent(".animated-text-words-wrapper");n.addClass("selected").removeClass("waiting"),setTimeout(function(){n.removeClass("selected"),t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},i.selectionDuration),setTimeout(function(){i.showWord(e,i.typeLettersDelay)},i.typeAnimationDelay)}else if(t.parents(".animated-heading-text").hasClass("letters")){var s=t.children("i").length>=e.children("i").length;i.hideLetter(t.find("i").eq(0),t,s,i.lettersDelay),i.showLetter(e.find("i").eq(0),e,s,i.lettersDelay),i.setParentClassWidth(e)}else t.parents(".animated-heading-text").hasClass("text-clip")?t.parents(".animated-text-words-wrapper").animate({width:"2px"},i.revealDuration,function(){i.switchWord(t,e),i.showWord(e)}):t.parents(".animated-heading-text").hasClass("loading-bar")?(t.parents(".animated-text-words-wrapper").removeClass("is-loading"),this.switchWord(t,e),setTimeout(function(){i.hideWord(e)},i.barAnimationDelay),setTimeout(function(){t.parents(".animated-text-words-wrapper").addClass("is-loading")},i.barWaiting),this.setParentClassWidth(e)):(this.switchWord(t,e),setTimeout(function(){i.hideWord(e)},i.animationDelay),this.setParentClassWidth(e))},e.prototype.showWord=function(t,e){var i=this;t.parents(".animated-heading-text").hasClass("type")?(i.showLetter(t.find("i").eq(0),t,!1,e),t.addClass("is-visible").removeClass("is-hidden")):t.parents(".animated-heading-text").hasClass("text-clip")&&t.parents(".animated-text-words-wrapper").animate({width:t.width()+10},i.revealDuration,function(){setTimeout(function(){i.hideWord(t)},i.revealAnimationDelay)})},e.prototype.hideLetter=function(e,i,n,s){e.removeClass("in").addClass("out");var a=this;if(e.is(":last-child")?n&&setTimeout(function(){a.hideWord(a.takeNext(i))},a.animationDelay):setTimeout(function(){a.hideLetter(e.next(),i,n,s)},s),e.is(":last-child")&&t("html").hasClass("no-csstransitions")){var o=a.takeNext(i);a.switchWord(i,o)}},e.prototype.showLetter=function(t,e,i,n){t.addClass("in").removeClass("out");var s=this;t.is(":last-child")?(e.parents(".animated-heading-text").hasClass("type")&&setTimeout(function(){e.parents(".animated-text-words-wrapper").addClass("waiting")},200),i||setTimeout(function(){s.hideWord(e)},s.animationDelay)):setTimeout(function(){s.showLetter(t.next(),e,i,n)},n)},e.prototype.takeNext=function(t){return t.is(":last-child")?t.parent().children().eq(0):t.next()},e.prototype.takePrev=function(t){return t.is(":first-child")?t.parent().children().last():t.prev()},e.prototype.switchWord=function(t,e){t.removeClass("is-visible").addClass("is-hidden"),e.removeClass("is-hidden").addClass("is-visible")},e.prototype.setParentClassWidth=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t.parents(".animated-text-words-wrapper"),n=t.width(),s=e?this.revealDuration/2:0;this.interval>0&&(clearInterval(this.interval),this.interval=0);var a=this;setTimeout(function(){i.css({"transition-function":"ease",transitionDuration:a.revealDuration+"ms",transitionProperty:"width",width:n+"px"})},s)},t(document).on("ready",function(){new e({heading:t(".animated-heading-text")});new MutationObserver(function(i){i.forEach(function(i){var n=i.addedNodes;null!==n&&t(n).each(function(){t(this).find(".animated-heading-text").each(function(){new e({heading:t(this)})})})})}).observe(document.body,{childList:!0,subtree:!0})})}(jQuery),function(t){function e(){if("undefined"==typeof stickyParent&&(stickyParent=t('[data-sticky-it="true"]').parents(".sppb-section ")),"undefined"!=typeof stickyParent&&0!=stickyParent.length){var e=stickyParent.offset();stickyParentWrap=stickyParent.parents(".sppb-sticky-wrap"),stickyParentWrap.hasClass("sppb-sticky-wrap")&&(e=stickyParentWrap.offset()),window.scrollY>=e.top&&!stickyParent.hasClass("sppb-sticky-it")?(stickyParent.wrap('<div class="sppb-sticky-wrap" style="height:'+stickyParent.outerHeight()+'px;"></div>'),stickyParent.addClass("sppb-sticky-it")):window.scrollY<e.top&&stickyParent.hasClass("sppb-sticky-it")&&(stickyParent.removeClass("sppb-sticky-it"),stickyParent.unwrap())}}window.sppbVideoBackgroundResize=function(t){t.find(".sppb-youtube-video-bg").removeClass("hidden");var e=t.innerWidth(),i=t.innerHeight();iframeW=e,iframeH=e*(9/16),marginTop=-Math.round((iframeH-i)/2),marginLeft=-Math.round((iframeW-e)/2),e/i<16/9&&(iframeW=i*(16/9),iframeH=i,marginLeft=-Math.round((iframeW-e)/2),marginTop=-Math.round((iframeH-i)/2)),t.find(".sppb-youtube-video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})},t(window).on("load resize",function(){t(".sppb-row-have-ext-bg").each(function(){sppbVideoBackgroundResize(t(this))})}),t(document).ready(function(){void 0!==jQuery.fn.parallax&&t('[data-sppb-parallax="on"]').each(function(){t(this).parallax()});var e=document.getElementsByClassName("section-bg-video");if(e.volume=0,t(window).width()<767){for(var i=0;i<e.length;i++)e[i].removeAttribute("autoplay");t(document).on("touchend touchcancel",function(){!function(){for(var t=0;t<e.length;t++)e[t].paused&&e[t].play()}()})}var n=t(".sppb-positioned-addon");n.length>0&&n.each(function(){var e=t("#section-id-"+t(this).data("rowid")),i=t(this).data("zindex"),n=t("#column-wrap-id-"+t(this).data("colid")).find(".sppb-column"),s=t(this).data("col-zindex");e.css({zIndex:i}),n.css({zIndex:s})})}),t(document).on("click",'[data-scroll-to="true"], .sppb-menu-scroll',function(e){e.preventDefault();var i=t(this).attr("href"),n=t(this).parents(".sppb-link-list-wrap"),s=t(this).parents(".sppb-link-list-wrap").data("offset");(s=void 0===s||""===s?0:parseInt(s))<0?s=Math.abs(s):s*=-1,n.find(".sppb-active").removeClass("sppb-active"),t(this).parent().addClass("sppb-active"),t("html, body").animate({scrollTop:t(i).offset().top+s},600)}),t(document).on("load",e),t(window).on("scroll resize",e),t(document).on("click",".sppb-responsive-bars",function(){t(this).toggleClass("open"),t(this).next().toggleClass("open")}),jQuery(window).on("load",function(){"use strict";new MutationObserver(function(t){t.forEach(function(t){var e=t.addedNodes;null!==e&&jQuery(e).each(function(){jQuery(this).find(".sppb-article-scroller-wrap").each(function(){var t=jQuery(this).data("articles"),e=jQuery(this).data("move"),i=jQuery(this).data("speed");jQuery(".sppb-article-scroller-wrap").bxSlider({minSlides:t,mode:"vertical",speed:i,pager:!1,controls:!1,auto:!0,moveSlides:e,adaptiveHeight:!0,touchEnabled:!1})})})})}).observe(document.body,{childList:!0,subtree:!0});new MutationObserver(function(t){t.forEach(function(t){var e=t.addedNodes;null!==e&&jQuery(e).each(function(){jQuery(this).find(".sppb-articles-carousel-wrap").each(function(){var t=jQuery(this).data("articles"),e=jQuery(this).data("speed"),i=jQuery(this).data("autoplay"),n=jQuery(this).data("drag"),s=jQuery(this).data("arrow");jQuery(function(){jQuery(".sppb-articles-carousel-wrap").bxSlider({mode:"horizontal",slideSelector:"div.sppb-articles-carousel-column",minSlides:t,maxSlides:t,moveSlides:t,slideWidth:1140,pager:!0,controls:s,nextText:"<i class='fa fa-angle-right' aria-hidden='true'></i>",prevText:"<i class='fa fa-angle-left' aria-hidden='true'></i>",speed:e,auto:i,autoHover:!0,touchEnabled:n,autoStart:!0})})})})})}).observe(document.body,{childList:!0,subtree:!0});new MutationObserver(function(t){t.forEach(function(t){var e=t.addedNodes;null!==e&&jQuery(e).each(function(){jQuery(this).find(".sppb-addon-articles-ticker").each(function(){var t=jQuery(this).parent("div").attr("id"),e=jQuery(this).data("speed");jQuery("#"+t+" .sppb-articles-ticker-content").bxSlider({minSlides:1,maxSlides:1,mode:"vertical",speed:e,pager:!1,controls:!1,auto:!0,adaptiveHeight:!0,autoHover:!0,touchEnabled:!1})})})})}).observe(document.body,{childList:!0,subtree:!0})})}(jQuery),function(t){t.fn.basictable=function(e){var i=function(e,i){var s=[];if(i.tableWrap&&e.wrap('<div class="bt-wrapper"></div>'),i.header){var a="";a=e.find("thead tr th").length?"thead th":e.find("tbody tr th").length?"tbody tr th":e.find("th").length?"tr:first th":"tr:first td",t.each(e.find(a),function(){var e=t(this),i=parseInt(e.attr("colspan"),10)||1,n=e.closest("tr").index();s[n]||(s[n]=[]);for(var a=0;a<i;a++)s[n].push(e)})}t.each(e.find("tbody tr"),function(){n(t(this),s,i)}),t.each(e.find("tfoot tr"),function(){n(t(this),s,i)})},n=function(e,i,n){e.children().each(function(){var e=t(this);if(""!==e.html()&&"&nbsp;"!==e.html()||n.showEmptyCells){for(var s=e.index(),a="",o=0;o<i.length;o++){0!=o&&(a+=": ");var r=i[o][s],l=r.find("div");l.length>0?a+=(r=t(l[l.length-1])).text():a+=r.text()}e.attr("data-th",a.trim()),n.contentWrap&&!e.children().hasClass("bt-content")&&e.wrapInner('<span class="bt-content" />')}else e.addClass("bt-hide")})},s=function(e,i){i.forceResponsive?null!==i.breakpoint&&t(window).width()<=i.breakpoint||null!==i.containerBreakpoint&&e.parent().width()<=i.containerBreakpoint?a(e,i):o(e,i):e.removeClass("bt").outerWidth()>e.parent().width()?a(e,i):o(e,i)},a=function(t,e){t.addClass("bt"),e.header||t.addClass("bt--no-header"),e.tableWrap&&t.parent(".bt-wrapper").addClass("active")},o=function(t,e){t.removeClass("bt bt--no-header"),e.tableWrap&&t.parent(".bt-wrapper").removeClass("active")},r=function(e,i){var n;e.removeClass("bt bt--no-header"),e.find("td").removeAttr("data-th"),i.tableWrap&&e.unwrap(),i.contentWrap&&(n=e,t.each(n.find("td"),function(){var e=t(this),i=e.children(".bt-content").html();e.html(i)})),e.removeData("basictable")};this.each(function(){var n=t(this);if(0===n.length||n.data("basictable")){if(n.data("basictable")){var l=n.data("basictable");"destroy"===e?r(n,l):"restart"===e?(r(n,l),n.data("basictable",l),i(n,l),s(n,l)):"start"===e?a(n,l):"stop"===e?o(n,l):s(n,l)}return!1}var p=t.extend({},t.fn.basictable.defaults,e),d={breakpoint:p.breakpoint,containerBreakpoint:p.containerBreakpoint,contentWrap:p.contentWrap,forceResponsive:p.forceResponsive,noResize:p.noResize,tableWrap:p.tableWrap,showEmptyCells:p.showEmptyCells,header:p.header};null===d.breakpoint&&null===d.containerBreakpoint&&(d.breakpoint=568),n.data("basictable",d),i(n,n.data("basictable")),d.noResize||(s(n,n.data("basictable")),t(window).bind("resize.basictable",function(){var t;(t=n).data("basictable")&&s(t,t.data("basictable"))}))})},t.fn.basictable.defaults={breakpoint:null,containerBreakpoint:null,contentWrap:!0,forceResponsive:!0,noResize:!1,tableWrap:!1,showEmptyCells:!1,header:!0},t.fn.addSortWidget=function(e){e=t.extend({},{sort_asc:"sort-asc",sort_desc:"sort-desc",no_sort:"no-sort"},e);var i=t(this),n=!0;return t("th",i).each(function(s){t("<div>").addClass("sppb-table-addon-sortable").attr("data-content",e.no_sort).on("click",function(){t(".sppb-table-addon-sortable",i).attr("data-content",e.no_sort),t(this).attr("data-content",n?e.sort_desc:e.sort_asc),n=!n;var a=t("tr",i).not(":has(th)").get();a.sort(function(e,i){var a=t("td:eq("+s+")",e).text(),o=t("td:eq("+s+")",i).text();return isNaN(a)||isNaN(o)?n?a.localeCompare(o):o.localeCompare(a):n?a-o:o-a});for(var o=i.has("tbody")?"tbody":"",r=0;r<a.length;r++)t(o,i).append(a[r])}).appendTo(this)}),i},t.fn.pageMe=function(e){var i=this,n=t.extend({perPage:10,showPrevNext:!1,nextText:"Next",prevText:"Prev",hidePageNumbers:!1},e),s=i.find("tbody"),a=n.perPage,o=i.hasClass("sppb-no-table-header"),r=s.children(),l=t(".pager");void 0!==n.childSelector&&(r=s.find(n.childSelector)),void 0!==n.pagerSelector&&i.next().length&&(l=i.next().find(n.pagerSelector));var p=r.size(),d=Math.ceil(p/a);i.next().length&&i.next().find(".sppb-table-total-reg").html("Total Entries: "+p),l.data("curr",0),n.showPrevNext&&t('<li class="sppb-page-item"><a href="#" class="sppb-table-prev-link sppb-page-link" title="'+n.prevText+'"><i aria-hidden="true" class="fa fa-angle-left"></i></a></li>').appendTo(l);for(var h=0;d>h&&0==n.hidePageNumbers;)t('<li class="sppb-page-item"><a href="#" class="sppb-table-paginate-link sppb-page-link">'+(h+1)+"</a></li>").appendTo(l),h++;function c(t){var e=t*a,i=e+a;r.css("display","none").slice(e,i).show(),t>=1?l.find(".sppb-table-prev-link").show():l.find(".sppb-table-prev-link").hide(),t<d-1?l.find(".sppb-table-next-link").show():l.find(".sppb-table-next-link").hide(),l.data("curr",t),l.children().removeClass("active"),l.children().eq(t+1).addClass("active")}n.showPrevNext&&t('<li class="sppb-page-item"><a href="#" class="sppb-table-next-link sppb-page-link"  title="'+n.nextText+'"><i aria-hidden="true" class="fa fa-angle-right"></i></a></li>').appendTo(l),l.find(".sppb-table-prev-link").hide(),d<=1&&l.find(".sppb-table-next-link").hide(),l.children().eq(1).addClass("active"),r.hide(),r.slice(0,a).show(),l.find("li .sppb-table-paginate-link").click(function(){return c(t(this).html().valueOf()-1),o&&s.find("tr:first-child").show(),!1}),l.find("li .sppb-table-prev-link").click(function(){return c(parseInt(l.data("curr"))-1),o&&s.find("tr:first-child").show(),o&&s.find("tr:first-child").show(),!1}),l.find("li .sppb-table-next-link").click(function(){return goToPage=parseInt(l.data("curr"))+1,c(goToPage),o&&s.find("tr:first-child").show(),o&&s.find("tr:first-child").show(),!1})},t(document).on("ready",function(){t(".sppb-addon-table-main").length>0&&t(".sppb-addon-table-main").each(function(e){var i=t(this).data("responsive"),n=!i;t(this).basictable({showEmptyCells:!1,forceResponsive:i,noResize:n});var s=t(this).data("searchable"),a=t(this).data("sortable"),o=t(this).data("search-limit");null!==o&&void 0!==typeof o&&(o=(o=String(o)).split(",").map(function(t){return t-1}).join(""));var r=this,l=t(r).parent().find(".sppb-pagination"),p=t(this).data("pagination-item"),d=t(r).hasClass("sppb-no-table-header");if(s){var h=t(this).parent().find("input");t(h).keyup(function(){!function(t,e,i){if(void 0===i&&(i="0"),0!=e.length&&/^[0-9]*$/.test(i))for(var n=0;n<e.length;n++){for(var s="false",a=0;a<i.length;a++)if(e.eq(n).children().length>i[a]&&-1!=e.eq(n).children().eq(i[a]).text().toLowerCase().indexOf(t)){s="success";break}"success"==s?e.eq(n).addClass("sppb-table-addon-item-search").show():e.eq(n).removeClass("sppb-table-addon-item-search").hide()}}(t(h).val().toLowerCase(),t(r).find("tbody tr"),o),d&&t(r).find("tr:first-child").show(),l.length>0&&(l.html(""),setTimeout(function(){t(r).pageMe({pagerSelector:".sppb-pagination",prevText:"Prev",nextText:"Next",childSelector:".sppb-table-addon-item-search",showPrevNext:!0,hidePageNumbers:!1,perPage:p})}))})}a&&t(r).addSortWidget(),l.length>0&&t(this).pageMe({pagerSelector:".sppb-pagination",prevText:"Prev",nextText:"Next",showPrevNext:!0,hidePageNumbers:!1,perPage:p})});new MutationObserver(function(e){e.forEach(function(e){var i=e.addedNodes;null!==i&&jQuery(i).each(function(){jQuery(this).find(".sppb-addon-table-main").each(function(){var e=t(this).data("responsive"),i=!e;t(this).basictable({showEmptyCells:!1,forceResponsive:e,noResize:i});t(this).data("sortable")&&t(this).addSortWidget();var n=t(this).parent().find(".sppb-pagination"),s=t(this).data("pagination-item");n.length>0&&t(this).pageMe({pagerSelector:".sppb-pagination",prevText:"Prev",nextText:"Next",showPrevNext:!0,hidePageNumbers:!1,perPage:s})})})})}).observe(document.body,{childList:!0,subtree:!0})})}(jQuery),window.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".sppb-element-lazy");function e(t){for(var e in t.children){"string"==typeof(e=t.children[e]).tagName&&"SOURCE"===e.tagName&&(e.src=e.dataset.large)}t.load()}function i(t,i){t.forEach(function(t){var n=t.target,s=n.querySelector(".section-bg-video"),a=document.querySelector(".sppb-youtube-iframe");t.intersectionRatio&&("IMG"!==n.tagName&&"IFRAME"!==n.tagName||(n.src=n.dataset.large),n.classList.contains("sppb-element-lazy")&&n.classList.add("sppb-element-loaded"),"VIDEO"===n.tagName&&e(n),null!==s&&e(s),a&&(a.src=a.dataset.src),i.unobserve(n))})}if(t.length>0){!function(){if("IntersectionObserver"in window){var e=new IntersectionObserver(i,{root:null,rootMargin:"0px",threshold:.1});t.forEach(function(t){e.observe(t)})}else t.forEach(function(t){t.src=t.dataset.src,t.classList.contains("sppb-element-lazy")&&t.classList.add("sppb-element-loaded")})}()}});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){"use strict";function e(t){this.actions=t,this.actionProperty=["move","rotate","scale","skew","opacity","blur"],this.actionSortList={}}e.prototype.bindCustomAnimation=function(){var t=this;this.actionProperty.map(function(e){t.actionSortList[e]=t.actions.filter(function(t){return t.name===e})})},e.prototype.getCustomAnimationActionByName=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e)return void 0!==this.actionSortList[t]?this.actionSortList[t]:[];var i={from:null,to:null},n=void 0!==this.actionSortList[t]?this.actionSortList[t]:[];if(0===n.length)return i;var s=!1;return n.map(function(t,a){e<parseInt(t.keyframe)&&null===i.to&&(void 0!==i.fixed&&delete i.fixed,t.toKF=0,i.to=t,void 0!==n[a-1]&&(n[a-1].scroll=0,i.from=n[a-1]),s=!0),a===n.length-1&&!1===s&&(i.fixed=!0,i.to=t,void 0!==n[a-1]&&(n[a-1].scroll=0,i.from=n[a-1]))}),i},e.prototype.getTAxis=function(t,e,i,n){var s=n.toKF,a=n.fromKF;return t-(t-e)/s*(0===a?i:i-a)},e.prototype.getMoveTransform=function(t,e,i){var n=e.to.keyframe,s=e.from.keyframe,a={toKF:isNaN(n)?100:Math.abs(s-n),fromKF:s,totalKF:n},o=e.from.x,r=e.to.x,l=e.from.y,p=e.to.y,d=e.from.z,h=e.to.z;return e.goal.x=this.getTAxis(o,r,i,a),e.goal.y=this.getTAxis(l,p,i,a),e.goal.z=this.getTAxis(d,h,i,a),e},e.prototype.getSkew=function(t,e,i){var n=e.to.keyframe,s=e.from.keyframe,a={toKF:isNaN(n)?100:Math.abs(s-n),fromKF:s,totalKF:n},o=e.from.x,r=e.to.x,l=e.from.y,p=e.to.y;return e.goal.x=this.getTAxis(o,r,i,a),e.goal.y=this.getTAxis(l,p,i,a),e},e.prototype.getOpacity=function(t,e,i){var n=e.to.keyframe,s=e.from.keyframe,a={toKF:isNaN(n)?100:Math.abs(s-n),fromKF:s,totalKF:n},o=e.from.value,r=e.to.value;return e.goal.value=this.getTAxis(o,r,i,a),e};var i=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,t),this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}return _createClass(t,[{key:"getElementListener",value:function(){return this.element}},{key:"addEventListeners",value:function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}},{key:"removeEventListeners",value:function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}},{key:"destroy",value:function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}},{key:"onDeviceOrientation",value:function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=e/this.width,s=i/this.height,a=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/n,o=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/s;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a+this.left,clientY:o+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}}},{key:"wrapWithParent",value:function(){if(null!==this.element.parentElement&&"sppb-addon-wrapper"===this.element.parentElement.className&&(this.element=this.element.parentElement),"sppb-addon-wrapper"!==this.element.className){var t=document.createElement("div");t.setAttribute("class","sppb-addon-wrapper"),this.element.parentNode.insertBefore(t,this.element),t.appendChild(this.element),this.element=t}}},{key:"unWrapParent",value:function(){if("sppb-addon-wrapper"===this.element.className){var t=this.element.childNodes;if(t.length>0){var e=this.element.parentNode.insertBefore(t[0],this.element);this.element.parentElement.removeChild(this.element),this.element=e}}}},{key:"onMouseEnter",value:function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}},{key:"onMouseMove",value:function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}},{key:"onMouseLeave",value:function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}},{key:"reset",value:function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},null!==this.element.parentElement&&"sppb-addon-wrapper"===this.element.parentElement.className&&(this.element=this.element.parentElement),this.element&&"sppb-addon-wrapper"!==this.element.className||(this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare())}},{key:"resetGlare",value:function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}},{key:"updateInitialPosition",value:function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}}},{key:"getValues",value:function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}},{key:"updateElementPosition",value:function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}},{key:"update",value:function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}},{key:"prepareGlare",value:function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:2*this.element.offsetWidth+"px",height:2*this.element.offsetWidth+"px",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}},{key:"updateGlareSize",value:function(){this.glare&&Object.assign(this.glareElement.style,{width:""+2*this.element.offsetWidth,height:""+2*this.element.offsetWidth})}},{key:"updateClientSize",value:function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},{key:"onWindowResize",value:function(){this.updateGlareSize(),this.updateClientSize()}},{key:"setTransition",value:function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout(function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")},this.settings.speed)}},{key:"extendSettings",value:function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in e)if(n in t)i[n]=t[n];else if(this.element.hasAttribute("data-tilt-"+n)){var s=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(s)}catch(t){i[n]=s}}else i[n]=e[n];return i}}],[{key:"isSettingTrue",value:function(t){return""===t||!0===t||1===t}},{key:"init",value:function(e,i){e.vanillaTilt=new t(e,i)}}]),t}(),n=t(window),s=n.width();function a(e){var i=t(window).height(),s=n.scrollTop(),a=e.offset().top,o=e.height();if(a>s+i)return-1;if(a+o<s)return 101;var r=(s+i-a)/((i+o)/100);return r>100?100:r}var o={},r=!1;function l(e){void 0!==addonInteraction.mouse_movement&&addonInteraction.mouse_movement.map(function(n){var s=t("#sppb-addon-"+n.addonId);if(s.parent().hasClass("sppb-addon-wrapper")||s.wrap('<div class="sppb-addon-wrapper"></div>'),e<768&&!1===n.enable_mobile)return void 0!==o[n.addonId]&&(o[n.addonId].tiltIntance.destroy(),delete o[n.addonId]),!1;if(e>767&&e<991&&!1===n.enable_tablet)return void 0!==o[n.addonId]&&(o[n.addonId].tiltIntance.destroy(),delete o[n.addonId]),!1;if(void 0!==o[n.addonId])return!1;var a=document.getElementById("sppb-addon-"+n.addonId);a=a.parentElement;var r={speed:1e3*parseFloat(n.animation.mouse_tilt_speed),max:parseFloat(n.animation.mouse_tilt_max),reverse:"opposite"===n.animation.mouse_tilt_direction,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.05,transition:!0,perspective:1e3},l=new i(a,r);o[n.addonId]={tiltIntance:l,enable_mobile:n.enable_mobile,enable_tablet:n.enable_tablet}})}function p(t,e,i){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3]){var n=d(e,i);n.transitionDuration=".1s",t.css(n)}i>-1&&i<=100&&t.css(d(e,i))}function d(t,i){var n={move:{from:{x:0,y:0,z:0,keyframe:0,f:!1},to:{x:0,y:0,z:0,keyframe:0,f:!1},goal:{x:0,y:0,z:0,keyframe:0}},scale:{from:{x:1,y:1,z:1,keyframe:0},to:{x:1,y:1,z:1,keyframe:0},goal:{x:1,y:1,z:1,keyframe:0}},skew:{from:{x:0,y:0,keyframe:0},to:{x:0,y:0,keyframe:0},goal:{x:0,y:0,keyframe:0}},rotate:{from:{x:0,y:0,z:0,keyframe:0},to:{x:0,y:0,z:0,keyframe:0},goal:{x:0,y:0,z:0,keyframe:0}},opacity:{from:{value:0,keyframe:0},to:{value:0,keyframe:0},goal:{value:1,keyframe:0}},blur:{from:{value:0,keyframe:0},to:{value:0,keyframe:0},goal:{value:0,keyframe:0}}},s=t.animation,a=t.origin,o=new e(s);return o.bindCustomAnimation(),o.actionProperty.map(function(t){var e=o.getCustomAnimationActionByName(t,i);null!==e.from&&(Object.assign(n[t].from,e.from.property),n[t].from.f=!0,n[t].from.keyframe=parseInt(e.from.keyframe),void 0!==n[t].from.x&&(n[t].from.x=""===n[t].from.x?0:parseFloat(n[t].from.x)),void 0!==n[t].from.y&&(n[t].from.y=""===n[t].from.y?0:parseFloat(n[t].from.y)),void 0!==n[t].from.z&&(n[t].from.z=""===n[t].from.z?0:parseFloat(n[t].from.z)),void 0!==n[t].from.value&&(n[t].from.value=""===n[t].from.value?0:parseFloat(n[t].from.value))),null!==e.to&&(Object.assign(n[t].to,e.to.property),void 0!==n[t].to.x&&(n[t].to.x=""===n[t].to.x?0:parseFloat(n[t].to.x),n[t].goal.x=n[t].to.x),void 0!==n[t].to.y&&(n[t].to.y=""===n[t].to.y?0:parseFloat(n[t].to.y),n[t].goal.y=n[t].to.y),void 0!==n[t].to.z&&(n[t].to.z=""===n[t].to.z?0:parseFloat(n[t].to.z),n[t].goal.z=n[t].to.z),void 0!==n[t].to.value&&(n[t].to.value=""===n[t].to.value?0:parseFloat(n[t].to.value),n[t].goal.value=n[t].to.value),n[t].to.keyframe=parseInt(e.to.keyframe),n[t].to.f=!0),!0===n[t].to.f&&!0===n[t].from.f&&void 0===e.fixed&&(n[t]="opacity"===t||"blur"===t?o.getOpacity(t,n[t],i):"skew"===t?o.getSkew(t,n[t],i):o.getMoveTransform(t,n[t],i))}),{willChange:"transform","-webkit-transition-timing-function":"ease",transitionDuration:r?"0s":"0.1s","transform-origin":a.x_offset+" "+a.y_offset,transformStyle:"preserve-3d",filter:"blur("+n.blur.goal.value+"px)","-webkit-filter":"blur("+n.blur.goal.value+"px)",opacity:n.opacity.goal.value,transform:"perspective(1000px) translate3d("+n.move.goal.x+"px, "+n.move.goal.y+"px, "+n.move.goal.z+"px) \n                scale3d("+n.scale.goal.x+", "+n.scale.goal.y+", "+n.scale.goal.z+")\n                rotateX("+n.rotate.goal.x+"deg) rotateY("+n.rotate.goal.y+"deg) rotateZ("+n.rotate.goal.z+"deg) \n                skew("+n.skew.goal.x+"deg, "+n.skew.goal.y+"deg)"}}window.addEventListener("DOMContentLoaded",function(e){var i,n,o;"undefined"!=typeof addonInteraction&&(l(s),i=addonInteraction.while_scroll_view,n=t(window),o={},t(document).ready(function(){i.map(function(e){if(s<768&&!1===e.enable_mobile)return!1;if(s>767&&s<991&&!1===e.enable_tablet)return!1;var i=t("#sppb-addon-"+e.addonId);i.parent().hasClass("sppb-addon-wrapper")||i.wrap('<div class="sppb-addon-wrapper"></div>'),o[e.addonId]=i,i.addClass("sppb-interaction-hide");var n=a(i.parent("div.sppb-addon-wrapper"));p(i,e,n,!0),setTimeout(function(){i.removeClass("sppb-interaction-hide")},500)})}),t(window).on("load",function(){t(document).on("scroll",function(){s=n.width(),i.map(function(e){var i=t("#sppb-addon-"+e.addonId);if(s<768&&!1===e.enable_mobile)return i.css({willChange:"transform","-webkit-transition-timing-function":"ease",transitionDuration:"0s","transform-origin":"center center",transformStyle:"preserve-3d",filter:"blur(0px)","-webkit-filter":"blur(0px)",opacity:1,transform:"perspective(1000px) translate3d(0px, 0px, 0px) \n                scale3d(1, 1, 1)\n                rotateX(0deg) rotateY(0deg) rotateZ(0deg) \n                skew(0deg, 0deg)"}),!1;if(s>767&&s<991&&!1===e.enable_tablet)return i.css({willChange:"transform","-webkit-transition-timing-function":"ease",transitionDuration:"0s","transform-origin":"center center",transformStyle:"preserve-3d",filter:"blur(0px)","-webkit-filter":"blur(0px)",opacity:1,transform:"perspective(1000px) translate3d(0px, 0px, 0px) \n                scale3d(1, 1, 1)\n                rotateX(0deg) rotateY(0deg) rotateZ(0deg) \n                skew(0deg, 0deg)"}),!1;var n=a(i.parent("div.sppb-addon-wrapper"),t(window));p(i,e,n)})})}))}),n.resize(function(){"undefined"!=typeof addonInteraction&&l(n.width())})}(jQuery);


/*===============================
/investor/components/com_sppagebuilder/assets/js/jquery.magnific-popup.min.js
================================================================================*/;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,i,n,o,r,a,s="Close",l="BeforeClose",c="MarkupParse",d="Open",u="Change",p="mfp",f="."+p,m="mfp-ready",g="mfp-removing",v="mfp-prevent-close",h=function(){},y=!!window.jQuery,C=e(window),w=function(e,i){t.ev.on(p+e+f,i)},b=function(t,i,n,o){var r=document.createElement("div");return r.className="mfp-"+t,n&&(r.innerHTML=n),o?i&&i.appendChild(r):(r=e(r),i&&r.appendTo(i)),r},I=function(i,n){t.ev.triggerHandler(p+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},x=function(i){return i===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=i),t.currTemplate.closeBtn},k=function(){e.magnificPopup.instance||((t=new h).init(),e.magnificPopup.instance=t)};h.prototype={constructor:h,init:function(){var i=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document),t.popupsCache={}},open:function(i){var o;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var a,s=i.items;for(o=0;o<s.length;o++)if((a=s[o]).parsed&&(a=a.el[0]),a===i.el[0]){t.index=o;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(!t.isOpen){t.types=[],r="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=n,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=b("bg").on("click"+f,function(){t.close()}),t.wrap=b("wrap").attr("tabindex",-1).on("click"+f,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=b("container",t.wrap)),t.contentContainer=b("content"),t.st.preloader&&(t.preloader=b("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var u=l[o];u=u.charAt(0).toUpperCase()+u.slice(1),t["init"+u].call(t)}I("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(w(c,function(e,t,i,n){i.close_replaceWith=x(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(x())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:C.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:n.height(),position:"absolute"}),t.st.enableEscapeKey&&n.on("keyup"+f,function(e){27===e.keyCode&&t.close()}),C.on("resize"+f,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var p=t.wH=C.height(),g={};if(t.fixedContentPos&&t._hasScrollBar(p)){var v=t._getScrollbarSize();v&&(g.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var h=t.st.mainClass;return t.isIE7&&(h+=" mfp-ie7"),h&&t._addClassToMFP(h),t.updateItemHTML(),I("BuildControls"),e("html").css(g),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(m),t._setFocus()):t.bgOverlay.addClass(m),n.on("focusin"+f,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(p),I(d),i}t.updateItemHTML()},close:function(){t.isOpen&&(I(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(g),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){I(s);var i=g+" "+m+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}n.off("keyup.mfp focusin"+f),t.ev.off(f),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,I("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||C.height();t.fixedContentPos||t.wrap.css("height",t.wH),I("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(I("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var r=!!t.st[n]&&t.st[n].markup;I("FirstMarkupParse",r),t.currTemplate[n]=!r||e(r)}o&&o!==i.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(a,n),i.preloaded=!0,I(u,i),o=i.type,t.container.prepend(t.contentContainer),I("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(x()):t.content=e:t.content="",I("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n,o=t.items[i];if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){n=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||t.st.type||"inline",o.index=i,o.parsed=!0,t.items[i]=o,I("ElementParse",o),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(C.width()<r)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};I("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass(v)){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?n.height():document.body.scrollHeight)>(e||C.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),I(c,[t,i,n]),e.each(i,function(i,n){if(void 0===n||!1===n)return!0;if((o=i.split("_")).length>1){var r=t.find(f+"-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==n[0]&&r.replaceWith(n):"img"===a?r.is("img")?r.attr("src",n):r.replaceWith(e("<img>").attr("src",n).attr("class",r.attr("class"))):r.attr(o[1],n)}}else t.find(f+"-"+i).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(t,i){return k(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(i){k();var n=e(this);if("string"==typeof i)if("open"===i){var o,r=y?n.data("magnificPopup"):n[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=n,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},n,r)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),y?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var T,_,P,S="inline",E=function(){P&&(_.after(P.addClass(T)).detach(),P=null)};e.magnificPopup.registerModule(S,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(S),w(s+"."+S,function(){E()})},getInline:function(i,n){if(E(),i.src){var o=t.st.inline,r=e(i.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(_||(T=o.hiddenClass,_=b(T),T="mfp-"+T),P=r.after(_).detach().removeClass(T)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return i.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var z,O="ajax",M=function(){z&&e(document.body).removeClass(z)},B=function(){M(),t.req&&t.req.abort()};e.magnificPopup.registerModule(O,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(O),z=t.st.ajax.cursor,w(s+"."+O,B),w("BeforeChange."+O,B)},getAjax:function(i){z&&e(document.body).addClass(z),t.updateStatus("loading");var n=e.extend({url:i.src,success:function(n,o,r){var a={data:n,xhr:r};I("ParseAjax",a),t.appendContent(e(a.data),O),i.finished=!0,M(),t._setFocus(),setTimeout(function(){t.wrap.addClass(m)},16),t.updateStatus("ready"),I("AjaxContentAdded")},error:function(){M(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(n),""}}});var L;e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=t.st.image,n=".image";t.types.push("image"),w(d+n,function(){"image"===t.currItem.type&&i.cursor&&e(document.body).addClass(i.cursor)}),w(s+n,function(){i.cursor&&e(document.body).removeClass(i.cursor),C.off("resize"+f)}),w("Resize"+n,t.resizeImage),t.isLowIE&&w("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,L&&clearInterval(L),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(r){L&&clearInterval(L),L=setInterval(function(){return n.naturalWidth>0?void t._onImageHasSize(e):(i>200&&clearInterval(L),void(3===++i?o(10):40===i?o(50):100===i&&o(500)))},r)};o(1)},getImage:function(i,n){var o=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,I("ImageLoadComplete")):200>++o?setTimeout(r,100):a())},a=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return t._parseMarkup(n,{title:function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""}(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(L&&clearInterval(L),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var H;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,n=".zoom";if(i.enabled&&t.supportsTransition){var o,r,a=i.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=n,t.css(o),t},d=function(){t.content.css("visibility","visible")};w("BuildControls"+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void d();(r=c(e)).css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,I("ZoomAnimationEnded")},16)},a)},16)}}),w(l+n,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),w(s+n,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var n,o=(n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),r=parseInt(n.css("padding-top"),10),a=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:n.width(),height:(y?n.innerHeight():n[0].offsetHeight)-a-r};return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var A="iframe",F=function(e){if(t.currTemplate[A]){var i=t.currTemplate[A].find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(A,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=0"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(A),w("BeforeChange",function(e,t,i){t!==i&&(t===A?F():i===A&&F(!0))}),w(s+"."+A,function(){F()})},getIframe:function(i,n){var o=i.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(n,a,i),t.updateStatus("ready"),n}}});var j=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},N=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% / %total%"},proto:{initGallery:function(){var i=t.st.gallery,o=".mfp-gallery";return t.direction=!0,!(!i||!i.enabled)&&(r+=" mfp-gallery",w(d+o,function(){i.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),n.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),w("UpdateStatus"+o,function(e,i){i.text&&(i.text=N(i.text,t.currItem.index,t.items.length))}),w(c+o,function(e,n,o,r){var a=t.items.length;o.counter=a>1?N(i.tCounter,r.index,a):""}),w("BuildControls"+o,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(v),r=t.arrowRight=e(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(v);o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),w(u+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void w(s+o,function(){n.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=j(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=j(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=j(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),I("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,I("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});var W="retina";e.magnificPopup.registerModule(W,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(w("ImageHasSize."+W,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),w("ElementParse."+W,function(t,n){n.src=e.replaceSrc(n,i)}))}}}}),k()});


/*===============================
/investor/plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
================================================================================*/;
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>3)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.4.1'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
selector=selector==='#'?[]:selector
var $parent=$(document).find(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.4.1'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault()
if($btn.is('input,button'))$btn.trigger('focus')
else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.4.1'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
if(typeof $next==='object'&&$next.length){$next[0].offsetWidth}
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var $this=$(this)
var href=$this.attr('href')
if(href){href=href.replace(/.*(?=#[^\s]+$)/,'')}
var target=$this.attr('data-target')||href
var $target=$(document).find(target)
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.4.1'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(document).find(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.4.1'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector!=='#'?$(document).find(selector):null
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
this.fixedContent='.navbar-fixed-top, .navbar-fixed-bottom'
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.4.1'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
var scrollbarWidth=this.scrollbarWidth
if(this.bodyIsOverflowing){this.$body.css('padding-right',bodyPad+scrollbarWidth)
$(this.fixedContent).each(function(index,element){var actualPadding=element.style.paddingRight
var calculatedPadding=$(element).css('padding-right')
$(element).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+scrollbarWidth+'px')})}}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)
$(this.fixedContent).each(function(index,element){var padding=$(element).data('padding-right')
$(element).removeData('padding-right')
element.style.paddingRight=padding?padding:''})}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var target=$this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))
var $target=$(document).find(target)
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var DISALLOWED_ATTRIBUTES=['sanitize','whiteList','sanitizeFn']
var uriAttrs=['background','cite','href','itemtype','longdesc','poster','src','xlink:href']
var ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i
var DefaultWhitelist={'*':['class','dir','id','lang','role',ARIA_ATTRIBUTE_PATTERN],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}
var SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
var DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
function allowedAttribute(attr,allowedAttributeList){var attrName=attr.nodeName.toLowerCase()
if($.inArray(attrName,allowedAttributeList)!==-1){if($.inArray(attrName,uriAttrs)!==-1){return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN)||attr.nodeValue.match(DATA_URL_PATTERN))}
return true}
var regExp=$(allowedAttributeList).filter(function(index,value){return value instanceof RegExp})
for(var i=0,l=regExp.length;i<l;i++){if(attrName.match(regExp[i])){return true}}
return false}
function sanitizeHtml(unsafeHtml,whiteList,sanitizeFn){if(unsafeHtml.length===0){return unsafeHtml}
if(sanitizeFn&&typeof sanitizeFn==='function'){return sanitizeFn(unsafeHtml)}
if(!document.implementation||!document.implementation.createHTMLDocument){return unsafeHtml}
var createdDocument=document.implementation.createHTMLDocument('sanitization')
createdDocument.body.innerHTML=unsafeHtml
var whitelistKeys=$.map(whiteList,function(el,i){return i})
var elements=$(createdDocument.body).find('*')
for(var i=0,len=elements.length;i<len;i++){var el=elements[i]
var elName=el.nodeName.toLowerCase()
if($.inArray(elName,whitelistKeys)===-1){el.parentNode.removeChild(el)
continue}
var attributeList=$.map(el.attributes,function(el){return el})
var whitelistedAttributes=[].concat(whiteList['*']||[],whiteList[elName]||[])
for(var j=0,len2=attributeList.length;j<len2;j++){if(!allowedAttribute(attributeList[j],whitelistedAttributes)){el.removeAttribute(attributeList[j].nodeName)}}}
return createdDocument.body.innerHTML}
var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.4.1'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0},sanitize:true,sanitizeFn:null,whiteList:DefaultWhitelist}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(document).find($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){var dataAttributes=this.$element.data()
for(var dataAttr in dataAttributes){if(dataAttributes.hasOwnProperty(dataAttr)&&$.inArray(dataAttr,DISALLOWED_ATTRIBUTES)!==-1){delete dataAttributes[dataAttr]}}
options=$.extend({},this.getDefaults(),dataAttributes,options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
if(options.sanitize){options.template=sanitizeHtml(options.template,options.whiteList,options.sanitizeFn)}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo($(document).find(this.options.container)):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
if(this.options.html){if(this.options.sanitize){title=sanitizeHtml(title,this.options.whiteList,this.options.sanitizeFn)}
$tip.find('.tooltip-inner').html(title)}else{$tip.find('.tooltip-inner').text(title)}
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
if(that.$element){that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)}
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var isSvg=window.SVGElement&&el instanceof window.SVGElement
var elOffset=isBody?{top:0,left:0}:(isSvg?null:$element.offset())
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null
that.$element=null})}
Tooltip.prototype.sanitizeHtml=function(unsafeHtml){return sanitizeHtml(unsafeHtml,this.options.whiteList,this.options.sanitizeFn)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.4.1'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
if(this.options.html){var typeContent=typeof content
if(this.options.sanitize){title=this.sanitizeHtml(title)
if(typeContent==='string'){content=this.sanitizeHtml(content)}}
$tip.find('.popover-title').html(title)
$tip.find('.popover-content').children().detach().end()[typeContent==='string'?'html':'append'](content)}else{$tip.find('.popover-title').text(title)
$tip.find('.popover-content').children().detach().end().text(content)}
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.4.1'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.4.1'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(document).find(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
var target=this.options.target===Affix.DEFAULTS.target?$(this.options.target):$(document).find(this.options.target)
this.$target=target.on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.4.1'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);


/*===============================
/investor/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/investor/plugins/system/t3/base-bs3/js/off-canvas.js
================================================================================*/;
jQuery(document).ready(function($){function getAndroidVersion(ua){var ua=ua||navigator.userAgent;var match=ua.match(/Android\s([0-9\.]*)/);return match?match[1]:false;};if(parseInt(getAndroidVersion())==4){$('#t3-mainnav').addClass('t3-mainnav-android');}
var JA_isLoading=false;if(/MSIE\s([\d.]+)/.test(navigator.userAgent)?new Number(RegExp.$1)<10:false){$('html').addClass('old-ie');}else if(/constructor/i.test(window.HTMLElement)){$('html').addClass('safari');}
var $wrapper=$('body'),$inner=$('.t3-wrapper'),$toggles=$('.off-canvas-toggle'),$offcanvas=$('.t3-off-canvas'),$close=$('.t3-off-canvas .close'),$btn=null,$nav=null,direction='left',$fixed=null;if(!$wrapper.length)return;$toggles.each(function(){var $this=$(this),$nav=$($this.data('nav')),effect=$this.data('effect'),direction=($('html').attr('dir')=='rtl'&&$this.data('pos')!='right')||($('html').attr('dir')!='rtl'&&$this.data('pos')=='right')?'right':'left';$nav.addClass(effect).addClass('off-canvas-'+direction);var inside_effect=['off-canvas-effect-3','off-canvas-effect-16','off-canvas-effect-7','off-canvas-effect-8','off-canvas-effect-14'];if($.inArray(effect,inside_effect)==-1){$inner.before($nav);}else{$inner.prepend($nav);}});$toggles.on('tap',function(e){stopBubble(e);if($wrapper.hasClass('off-canvas-open')){oc_hide(e);return false;}
$btn=$(this);$nav=$($btn.data('nav'));if(!$fixed)$fixed=$inner.find('*').filter(function(){return $(this).css("position")==='fixed';});else $fixed=$fixed.filter(function(){return $(this).css("position")==='fixed';}).add($inner.find('.affix'));$nav.addClass('off-canvas-current');direction=($('html').attr('dir')=='rtl'&&$btn.data('pos')!='right')||($('html').attr('dir')!='rtl'&&$btn.data('pos')=='right')?'right':'left';$offcanvas.height($(window).height());var events=$(window).data('events');if(events&&events.scroll&&events.scroll.length){var handlers=[];for(var i=0;i<events.scroll.length;i++){handlers[i]=events.scroll[i].handler;}
$(window).data('scroll-events',handlers);$(window).off('scroll');}
var scrollTop=($('html').scrollTop())?$('html').scrollTop():$('body').scrollTop();$('html').addClass('noscroll').css('top',-scrollTop).data('top',scrollTop);$('.t3-off-canvas').css('top',scrollTop);$fixed.each(function(){var $this=$(this),$parent=$this.parent(),mtop=0;while(!$parent.is($inner)&&$parent.css("position")==='static')$parent=$parent.parent();mtop=-$parent.offset().top;$this.css({'position':'absolute','margin-top':mtop});});$wrapper.scrollTop(scrollTop);$wrapper[0].className=$.trim($wrapper[0].className.replace(/\s*off\-canvas\-effect\-\d+\s*/g,' '))+' '+$btn.data('effect')+' '+'off-canvas-'+direction;setTimeout(oc_show,50);return false;});var oc_show=function(){if(JA_isLoading==true){return;}
JA_isLoading=true;$wrapper.addClass('off-canvas-open');$inner.on('click',oc_hide);$close.on('click',oc_hide);$offcanvas.on('click',handleClick);if($.browser.msie&&$.browser.version<10){var p1={},p2={};p1['padding-'+direction]=$('.t3-off-canvas').width();p2[direction]=0;$inner.animate(p1);$nav.animate(p2);}
setTimeout(function(){JA_isLoading=false;},200);};var oc_hide=function(){if(JA_isLoading==true){return;}
JA_isLoading=true;$inner.off('click',oc_hide);$close.off('click',oc_hide);$offcanvas.off('click',handleClick);setTimeout(function(){$wrapper.removeClass('off-canvas-open');},100);setTimeout(function(){$wrapper.removeClass($btn.data('effect')).removeClass('off-canvas-'+direction);$wrapper.scrollTop(0);$('html').removeClass('noscroll').css('top','');$('html,body').scrollTop($('html').data('top'));$nav.removeClass('off-canvas-current');$fixed.css({'position':'','margin-top':''});if($(window).data('scroll-events')){var handlers=$(window).data('scroll-events');for(var i=0;i<handlers.length;i++){$(window).on('scroll',handlers[i]);}
$(window).data('scroll-events',null);}
JA_isLoading=false;},700);if($('html').hasClass('old-ie')){var p1={},p2={};p1['padding-'+direction]=0;p2[direction]=-$('.t3-off-canvas').width();$inner.animate(p1);$nav.animate(p2);}};var handleClick=function(e){if($(e.target).closest('a').length){if(!e.target.href)return;var arr1=e.target.href.split('#'),arr2=location.href.split('#');if(arr1[0]==arr2[0]&&arr1.length>1&&arr1[1].length){oc_hide();setTimeout(function(){var anchor=$("a[name='"+arr1[1]+"']");if(!anchor.length)anchor=$('#'+arr1[1]);if(anchor.length)
$('html,body').animate({scrollTop:anchor.offset().top},'slow');},1000);}
if(e.target.href.search('#')!==-1)return;}
stopBubble(e);return true;}
var stopBubble=function(e){e.stopPropagation();}
$(window).load(function(){setTimeout(function(){$fixed=$inner.find('*').filter(function(){return $(this).css("position")==='fixed';});},100);});})


/*===============================
/investor/plugins/system/t3/base-bs3/js/script.js
================================================================================*/;
!function($){if($.browser==undefined||$.browser.msie==undefined){$.browser={msie:false,version:0};if(match=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)||navigator.userAgent.match(/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)){$.browser.msie=true;$.browser.version=match[1];}}
if($.browser.msie){$('html').addClass('ie'+Math.floor($.browser.version));}
$(document).ready(function(){if(!window.getComputedStyle){window.getComputedStyle=function(el,pseudo){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;if(prop=='float')prop='styleFloat';if(re.test(prop)){prop=prop.replace(re,function(){return arguments[2].toUpperCase();});}
return el.currentStyle[prop]?el.currentStyle[prop]:null;}
return this;}}
var fromClass='body-data-holder',prop='content',$inspector=$('<div>').css('display','none').addClass(fromClass).appendTo($('body'));try{var computedStyle=window.getComputedStyle($inspector[0],':before');if(computedStyle){var attrs=computedStyle.getPropertyValue(prop);if(attrs){var matches=attrs.match(/([\da-z\-]+)/gi),data={};if(matches&&matches.length){for(var i=0;i<matches.length;i++){data[matches[i++]]=i<matches.length?matches[i]:null;}}
$('body').data(data);}}}finally{$inspector.remove();}});(function(){$.support.t3transform=(function(){var style=document.createElement('div').style,vendors=['t','webkitT','MozT','msT','OT'],transform,i=0,l=vendors.length;for(;i<l;i++){transform=vendors[i]+'ransform';if(transform in style){return transform;}}
return false;})();})();(function(){$('html').addClass('ontouchstart'in window?'touch':'no-touch');})();$(document).ready(function(){(function(){if(window.MooTools&&window.MooTools.More&&Element&&Element.implement){var mthide=Element.prototype.hide,mtshow=Element.prototype.show,mtslide=Element.prototype.slide;Element.implement({show:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtshow)&&mtshow.apply(this,args);},hide:function(){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mthide)&&mthide.apply(this,arguments);},slide:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtslide)&&mtslide.apply(this,args);}})}})();$.fn.tooltip.Constructor&&$.fn.tooltip.Constructor.DEFAULTS&&($.fn.tooltip.Constructor.DEFAULTS.html=true);$.fn.popover.Constructor&&$.fn.popover.Constructor.DEFAULTS&&($.fn.popover.Constructor.DEFAULTS.html=true);$.fn.tooltip.defaults&&($.fn.tooltip.defaults.html=true);$.fn.popover.defaults&&($.fn.popover.defaults.html=true);(function(){if(window.jomsQuery&&jomsQuery.fn.collapse){$('[data-toggle="collapse"]').on('click',function(e){$($(this).attr('data-target')).eq(0).collapse('toggle');e.stopPropagation();return false;});jomsQuery('html, body').off('touchstart.dropdown.data-api');}})();(function(){if($.fn.chosen&&$(document.documentElement).attr('dir')=='rtl'){$('select').addClass('chzn-rtl');}})();});$(window).load(function(){if(!$(document.documentElement).hasClass('off-canvas-ready')&&($('.navbar-collapse-fixed-top').length||$('.navbar-collapse-fixed-bottom').length)){var btn=$('.btn-navbar[data-toggle="collapse"]');if(!btn.length){return;}
if(btn.data('target')){var nav=$(btn.data('target'));if(!nav.length){return;}
var fixedtop=nav.closest('.navbar-collapse-fixed-top').length;btn.on('click',function(){var wheight=(window.innerHeight||$(window).height());if(!$.support.transition){nav.parent().css('height',!btn.hasClass('collapsed')&&btn.data('t3-clicked')?'':wheight);btn.data('t3-clicked',1);}
nav.addClass('animate').css('max-height',wheight-
(fixedtop?(parseFloat(nav.css('top'))||0):(parseFloat(nav.css('bottom'))||0)));});nav.on('shown hidden',function(){nav.removeClass('animate');});}}});}(jQuery);


/*===============================
/investor/plugins/system/t3/base-bs3/js/menu.js
================================================================================*/;
;(function($){var T3Menu=function(elm,options){this.$menu=$(elm);if(!this.$menu.length){return;}
this.options=$.extend({},$.fn.t3menu.defaults,options);this.child_open=[];this.loaded=false;this.start();};T3Menu.prototype={constructor:T3Menu,start:function(){if(this.loaded){return;}
this.loaded=true;var self=this,options=this.options,$menu=this.$menu;this.$items=$menu.find('li');this.$items.each(function(idx,li){var $item=$(this),$child=$item.children('.dropdown-menu'),$link=$item.children('a'),item={$item:$item,child:$child.length,link:$link.length,clickable:!($link.length&&$child.length),mega:$item.hasClass('mega'),status:'close',timer:null,atimer:null};$item.data('t3menu.item',item);if($child.length&&!options.hover){$item.on('click',function(e){e.stopPropagation();if($item.hasClass('group')){return;}
if(item.status=='close'){e.preventDefault();self.show(item);}});}else{$item.on('click',function(e){if($(e.target).data('toggle'))return;e.stopPropagation()});}
$item.find('a > .caret').on('click tap',function(e){item.clickable=false;});if(options.hover){$item.on('mouseover',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('show-processed'))
return;$target.data('show-processed',true);setTimeout(function(){$target.data('show-processed',false);},10);self.show(item);}).on('mouseleave',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('hide-processed'))
return;$target.data('hide-processed',true);setTimeout(function(){$target.data('hide-processed',false);},10);self.hide(item,$target);});if($link.length&&$child.length){$link.on('click',function(e){if(item.clickable){e.stopPropagation();}
return item.clickable;});}}});$(document.body).on('tap hideall.t3menu',function(e){clearTimeout(self.timer);self.timer=setTimeout($.proxy(self.hide_alls,self),e.type=='tap'?500:self.options.hidedelay);});$menu.find('.mega-dropdown-menu').on('hideall.t3menu',function(e){e.stopPropagation();e.preventDefault();return false;});$menu.find('input, select, textarea, label').on('click tap',function(e){e.stopPropagation();});var $megatab=$menu.find('.mega-tab');if($megatab.length){$megatab.each(function(){var $tabul=$(this).find('>div>ul'),$tabItems=$tabul.children('.dropdown-submenu'),$tabs=$tabul.find('>li>.dropdown-menu'),tabheight=0,$parentItem=$(this).closest('li');$tabItems.data('mega-tab-item',1);var megatabs=$parentItem.data('mega-tabs')?$parentItem.data('mega-tabs'):[];megatabs.push($tabul);$parentItem.data('mega-tabs',megatabs);$tabItems.first().data('mega-tab-active',true).addClass('open');var $p=$tabul.parents('.dropdown-menu');$p.each(function(){var $this=$(this);$this.data('prev-style',$this.attr('style')).css({visibility:"visible",display:"block"});})
$tabs.each(function(){var $this=$(this),thisstyle=$this.attr('style');$this.css({visibility:"hidden",display:"block"});tabheight=Math.max(tabheight,$this.children().innerHeight());if(thisstyle){$this.attr('style',thisstyle);}else{$this.removeAttr('style');}});$tabul.css('min-height',tabheight);$p.each(function(){var $this=$(this);if($this.data('prev-style'))
$this.attr('style',$this.data('prev-style'));else
$this.removeAttr('style');$this.removeData('prev-style');})})}
$menu.find('.modal').appendTo('body');},show:function(item){if(item.$item.data('mega-tab-item')){item.$item.parent().children().removeClass('open').data('mega-tab-active',false);item.$item.addClass('open').data('mega-tab-active',true);}
if($.inArray(item,this.child_open)<this.child_open.length-1){this.hide_others(item);}
$(document.body).trigger('hideall.t3menu',[this]);clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.ftimer);clearTimeout(item.ctimer);if(item.status!='open'||!item.$item.hasClass('open')||!this.child_open.length){if(item.mega){clearTimeout(item.astimer);clearTimeout(item.atimer);this.position(item.$item);item.astimer=setTimeout(function(){item.$item.addClass('animating')},10);item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration+50);item.timer=setTimeout(function(){item.$item.addClass('open');},100);}else{item.$item.addClass('open');}
item.status='open';if(item.child&&$.inArray(item,this.child_open)==-1){this.child_open.push(item);}}
item.ctimer=setTimeout($.proxy(this.clickable,this,item),300);},hide:function(item,$target){clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.astimer);clearTimeout(item.atimer);clearTimeout(item.ftimer);if($target&&$target.is('input',item.$item)){return;}
if(item.mega){item.$item.addClass('animating');item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration);item.timer=setTimeout(function(){if(!item.$item.data('mega-tab-active'))
item.$item.removeClass('open')},100);}else{item.timer=setTimeout(function(){if(!item.$item.data('mega-tab-active'))
item.$item.removeClass('open');},100);}
item.status='close';for(var i=this.child_open.length;i--;){if(this.child_open[i]===item){this.child_open.splice(i,1);}}
item.ftimer=setTimeout($.proxy(this.hidden,this,item),this.options.duration);this.timer=setTimeout($.proxy(this.hide_alls,this),this.options.hidedelay);},hidden:function(item){if(item.status=='close'){item.clickable=false;}},hide_others:function(item){var self=this;$.each(this.child_open.slice(),function(idx,open){if(!item||(open!=item&&!open.$item.has(item.$item).length)){self.hide(open);}});},hide_alls:function(e,inst){if(!e||e.type=='tap'||(e.type=='hideall'&&this!=inst)){var self=this;$.each(this.child_open.slice(),function(idx,item){item&&self.hide(item);});}},clickable:function(item){item.clickable=true;},position:function($item){var sub=$item.children('.mega-dropdown-menu'),is_show=sub.is(':visible');if(!is_show){sub.show();}
var offset=$item.offset(),width=$item.outerWidth(),screen_width=$(window).width()
-this.options.sb_width,sub_width=sub.outerWidth(),level=$item.data('level');if(!is_show){sub.css('display','');}
sub.css({left:'',right:''});if(level==1){var align=$item.data('alignsub'),align_offset=0,align_delta=0,align_trans=0;if(align=='justify'){return;}
if(!align){align='left';}
if(align=='center'){align_offset=offset.left+(width/2);if(!$.support.t3transform){align_trans=-sub_width/2;sub.css(this.options.rtl?'right':'left',align_trans+width/2);}}else{align_offset=offset.left
+((align=='left'&&this.options.rtl||align=='right'&&!this.options.rtl)?width:0);}
if(this.options.rtl){if(align=='right'){if(align_offset+sub_width>screen_width){align_delta=screen_width-align_offset
-sub_width;sub.css('left',align_delta);if(screen_width<sub_width){sub.css('left',align_delta+sub_width
-screen_width);}}}else{if(align_offset<(align=='center'?sub_width/2:sub_width)){align_delta=align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('right',align_delta+align_trans);}
if(align_offset
+(align=='center'?sub_width/2:0)
-align_delta>screen_width){sub.css('right',align_offset
+(align=='center'?(sub_width+width)/2:0)+align_trans
-screen_width);}}}else{if(align=='right'){if(align_offset<sub_width){align_delta=align_offset-sub_width;sub.css('right',align_delta);if(sub_width>screen_width){sub.css('right',sub_width-screen_width
+align_delta);}}}else{if(align_offset
+(align=='center'?sub_width/2:sub_width)>screen_width){align_delta=screen_width
-align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('left',align_delta+align_trans);}
if(align_offset
-(align=='center'?sub_width/2:0)
+align_delta<0){sub.css('left',(align=='center'?(sub_width+width)/2:0)
+align_trans
-align_offset);}}}}else{if(this.options.rtl){if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}else{if(offset.left-sub_width<0){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}}else{if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left-sub_width<0){$item.removeClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}else{if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}}}}};$.fn.t3menu=function(option){return this.each(function(){var $this=$(this),data=$this.data('megamenu'),options=typeof option=='object'&&option;if($this.parents('#off-canvas-nav').length)
return;if($this.parents('#t3-off-canvas').length)
return;if(!data){$this.data('megamenu',(data=new T3Menu(this,options)));}else{if(typeof option=='string'&&data[option]){data[option]()}}})};$.fn.t3menu.defaults={duration:400,timeout:100,hidedelay:200,hover:true,sb_width:20};$(document).ready(function(){var mm_duration=$('.t3-megamenu').data('duration')||0;if(mm_duration){$('<style type="text/css">'
+'.t3-megamenu.animate .animating > .mega-dropdown-menu,'
+'.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
+'transition-duration: '
+mm_duration+'ms !important;'
+'-webkit-transition-duration: '
+mm_duration+'ms !important;'
+'}'+'</style>').appendTo('head');}
var mm_timeout=mm_duration?100+mm_duration:500,mm_rtl=$(document.documentElement).attr('dir')=='rtl',mm_trigger=$(document.documentElement).hasClass('mm-hover'),sb_width=(function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=parent.children(),width=child.innerWidth()
-child.height(100).innerWidth();parent.remove();return width;})();if(!$.support.transition){$('.t3-megamenu').removeClass('animate');mm_timeout=100;}
$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});$(window).load(function(){$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});});});})(jQuery);


/*===============================
/investor/templates/investor/js/script.js
================================================================================*/;
jQuery(document).ready(function($){if($('#jform_contact_email_copy').length){$('#jform_contact_email_copy').parents('.control-group').addClass('inline');}})
jQuery(function($){$('#back-to-top').on('click',function(){$("html, body").animate({scrollTop:0},1500);return false;});});


/*===============================
/investor/templates/investor/js/switcher.js
================================================================================*/;
window.console=window.console||(function(){var c={};c.log=c.warn=c.debug=c.info=c.error=c.time=c.dir=c.profile=c.clear=c.exception=c.trace=c.assert=function(){};return c;})();jQuery(document).ready(function($){$("#style-switcher span").click(function(e){e.preventDefault();var div=$("#style-switcher");console.log(div.css("left"));if(div.css("left")==="-200px"){$("#style-switcher").animate({left:"0px"});}else{$("#style-switcher").animate({left:"-200px"});}});$("#layout-style").change(function(e){if($(this).val()==1){$("body").removeClass("too-boxed"),$(window).resize();stickyheader=!stickyheader;}else{$("body").addClass("too-boxed"),$(window).resize();stickyheader=!stickyheader;}});$('.bg li a').click(function(){var current=$('#style-switcher select[id=layout-style]').find('option:selected').val();if(current=='2'){var bg=$(this).css("backgroundImage");$("body").css("backgroundImage",bg);}else{alert('Please select boxed layout');}});$("#reset a").click(function(e){var bg=$(this).css("backgroundImage");$("body").css("backgroundImage","url(../images/buildup/bg/bg_1.png)");$("#navigation").removeClass("style-2")});});


/*===============================
/investor/media/system/js/html5fallback.js
================================================================================*/;
!function(a,b,c){"use strict";"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b});var d=function(a,b){for(var c=["required","pattern","placeholder","autofocus","formnovalidate"],d=["email","url","number","range"],e={attributes:{},types:{}};b=c.pop();)e.attributes[b]=!!(b in a);for(;b=d.pop();)a.setAttribute("type",b),e.types[b]=a.type==b;return e}(b.createElement("input")),e={init:function(b,c){var d=this;d.elem=c,d.$elem=a(c),c.H5Form=d,d.options=a.extend({},a.fn.h5f.options,b),"form"===c.nodeName.toLowerCase()&&d.bindWithForm(d.elem,d.$elem)},bindWithForm:function(a,b){var i,e=this,f=!!b.attr("novalidate"),g=a.elements,h=g.length;for("onSubmit"===e.options.formValidationEvent&&b.on("submit",function(a){i=this.H5Form.donotValidate!==c&&this.H5Form.donotValidate,i||f||e.validateForm(e)?b.find(":input").each(function(){e.placeholder(e,this,"submit")}):(a.preventDefault(),this.donotValidate=!1)}),b.on("focusout focusin",function(a){e.placeholder(e,a.target,a.type)}),b.on("focusout change",e.validateField),b.find("fieldset").on("change",function(){e.validateField(this)}),d.attributes.formnovalidate||b.find(":submit[formnovalidate]").on("click",function(){e.donotValidate=!0});h--;)e.polyfill(g[h]),e.autofocus(e,g[h])},polyfill:function(a){if("form"===a.nodeName.toLowerCase())return!0;var b=a.form.H5Form;b.placeholder(b,a),b.numberType(b,a)},validateForm:function(){var f,g,a=this,b=a.elem,c=b.elements,d=c.length,e=!0;for(b.isValid=!0,f=0;f<d;f++)g=c[f],g.isRequired=!!g.required,g.isDisabled&&(g.isDisabled=!!g.disabled),g.isDisabled||(e=a.validateField(g),b.isValid&&!e&&a.setFocusOn(g),b.isValid=e&&b.isValid);return a.options.doRenderMessage&&a.renderErrorMessages(a,b),b.isValid},validateField:function(b){var j,k,l,e=b.target||b,f=!1,g=!1,h=!1,i=!1;return e.form===c?null:(j=e.form.H5Form,k=a(e),g=!!k.attr("required"),h=!!k.attr("disabled"),e.isDisabled||(f=!d.attributes.required&&g&&j.isValueMissing(j,e),i=!d.attributes.pattern&&j.matchPattern(j,e)),e.validityState={valueMissing:f,patternMismatch:i,valid:e.isDisabled||!(f||i)},d.attributes.required||(e.validityState.valueMissing?k.addClass(j.options.requiredClass):k.removeClass(j.options.requiredClass)),d.attributespattern||(e.validityState.patternMismatch?k.addClass(j.options.patternClass):k.removeClass(j.options.patternClass)),e.validityState.valid?(k.removeClass(j.options.invalidClass),l=j.findLabel(k),l.removeClass(j.options.invalidClass),l.attr("aria-invalid","false")):(k.addClass(j.options.invalidClass),l=j.findLabel(k),l.addClass(j.options.invalidClass),l.attr("aria-invalid","true")),e.validityState.valid)},isValueMissing:function(e,f){var k,l,m,g=a(f),h=f.type!==c?f.type:f.tagName.toLowerCase(),i=/^(checkbox|radio|fieldset)$/i.test(h),j=/^submit$/i.test(h);if(j)return!1;if(i){if("checkbox"===h)return!g.is(":checked");for(k="fieldset"===h?g.find("input"):b.getElementsByName(f.name),l=0,m=k.length;l<m;l++)if(a(k[l]).is(":checked"))return!1;return!0}return!(""!==g.val()&&(d.attributes.placeholder||!g.hasClass(e.options.placeholderClass)))},matchPattern:function(b,e){var j,k,f=a(e),g=f.attr("value"),h=f.attr("pattern"),i=f.attr("type");if(!d.attributes.placeholder&&f.attr("placeholder")&&f.hasClass(b.options.placeholderClass)||(g=f.attr("value")),""===g)return!1;if("email"===i){if(f.attr("multiple")===c)return!b.options.emailPatt.test(g);for(g=g.split(b.options.mutipleDelimiter),j=0,k=g.length;j<k;j++)if(!b.options.emailPatt.test(g[j].replace(/[ ]*/g,"")))return!0}else{if("url"===i)return!b.options.urlPatt.test(g);if("text"===i&&h!==c)return usrPatt=new RegExp("^(?:"+h+")$"),!usrPatt.test(g)}return!1},placeholder:function(b,e,f){var g=a(e),h=g.attr("placeholder"),i=/^(focusin|submit)$/i.test(f),j=/^(input|textarea)$/i.test(e.nodeName),k=/^password$/i.test(e.type),l=d.attributes.placeholder;l||!j||k||h===c||(""!==e.value||i?e.value===h&&i&&(e.value="",g.removeClass(b.options.placeholderClass)):(e.value=h,g.addClass(b.options.placeholderClass)))},numberType:function(b,c){var i,j,k,l,m,n,o,p,e=a(c),f=e.attr("type"),g=/^input$/i.test(c.nodeName),h=/^(number|range)$/i.test(f);if(!(!g||!h||"number"==f&&d.types.number||"range"==f&&d.types.range)){for(i=parseInt(e.attr("min")),j=parseInt(e.attr("max")),k=parseInt(e.attr("step")),l=parseInt(e.attr("value")),m=e.prop("attributes"),n=a("<select>"),i=isNaN(i)?-100:i,p=i;p<=j;p+=k)o=a('<option value="'+p+'">'+p+"</option>"),(l==p||l>p&&l<p+k)&&o.attr("selected",""),n.append(o);a.each(m,function(){n.attr(this.name,this.value)}),e.replaceWith(n)}},autofocus:function(b,c){var e=a(c),f=!!e.attr("autofocus"),g=/^(input|textarea|select|fieldset)$/i.test(c.nodeName),h=/^submit$/i.test(c.type),i=d.attributes.autofocus;!i&&g&&!h&&f&&a(function(){b.setFocusOn(c)})},findLabel:function(b){var d,c=a('label[for="'+b.attr("id")+'"]');return c.length<=0&&(d=b.parent(),"label"==d.get(0).tagName.toLowerCase()&&(c=d)),c},setFocusOn:function(b){"fieldset"===b.tagName.toLowerCase()?a(b).find(":first").focus():a(b).focus()},renderErrorMessages:function(b,c){for(var g,h,d=c.elements,e=d.length,f={errors:[]};e--;)g=a(d[e]),h=b.findLabel(g),g.hasClass(b.options.requiredClass)&&(f.errors[e]=h.text().replace("*","")+b.options.requiredMessage),g.hasClass(b.options.patternClass)&&(f.errors[e]=h.text().replace("*","")+b.options.patternMessage);f.errors.length>0&&Joomla.renderMessages(f)}};a.fn.h5f=function(a){return this.each(function(){Object.create(e).init(a,this)})},a.fn.h5f.options={invalidClass:"invalid",requiredClass:"required",requiredMessage:" is required.",placeholderClass:"placeholder",patternClass:"pattern",patternMessage:" doesn't match pattern.",doRenderMessage:!1,formValidationEvent:"onSubmit",emailPatt:/^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,urlPatt:/[a-z][\-\.+a-z]*:\/\//i},a(function(){a("form").h5f({doRenderMessage:!0,requiredClass:"musthavevalue"})})}(jQuery,document);


/*===============================
/investor/media/system/js/core.js
================================================================================*/;
Joomla=window.Joomla||{},Joomla.editors=Joomla.editors||{},Joomla.editors.instances=Joomla.editors.instances||{},function(e,t){"use strict";e.submitform=function(e,o,n){o||(o=t.getElementById("adminForm")),e&&(o.task.value=e),o.noValidate=!n,n?o.hasAttribute("novalidate")&&o.removeAttribute("novalidate"):o.setAttribute("novalidate","");var r=t.createElement("input");r.style.display="none",r.type="submit",o.appendChild(r).click(),o.removeChild(r)},e.submitbutton=function(t){e.submitform(t)},e.Text={strings:{},_:function(t,o){var n=e.getOptions("joomla.jtext");return n&&(this.load(n),e.loadOptions({"joomla.jtext":null})),o=void 0===o?"":o,t=t.toUpperCase(),void 0!==this.strings[t]?this.strings[t]:o},load:function(e){for(var t in e)e.hasOwnProperty(t)&&(this.strings[t.toUpperCase()]=e[t]);return this}},e.JText=e.Text,e.optionsStorage=e.optionsStorage||null,e.getOptions=function(t,o){return e.optionsStorage||e.loadOptions(),void 0!==e.optionsStorage[t]?e.optionsStorage[t]:o},e.loadOptions=function(o){if(!o){for(var n,r,a,i=t.querySelectorAll(".joomla-script-options.new"),s=0,l=0,d=i.length;l<d;l++)n=(r=i[l]).text||r.textContent,(a=JSON.parse(n))&&(e.loadOptions(a),s++),r.className=r.className.replace(" new"," loaded");if(s)return}if(e.optionsStorage){if(o)for(var c in o)o.hasOwnProperty(c)&&(e.optionsStorage[c]=o[c])}else e.optionsStorage=o||{}},e.replaceTokens=function(e){if(/^[0-9A-F]{32}$/i.test(e)){var o,n,r,a=t.getElementsByTagName("input");for(o=0,r=a.length;o<r;o++)"hidden"==(n=a[o]).type&&"1"==n.value&&32==n.name.length&&(n.name=e)}},e.isEmail=function(e){console.warn("Joomla.isEmail() is deprecated, use the formvalidator instead");return/^[\w.!#$%&‚Äô*+\/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,})+$/i.test(e)},e.checkAll=function(e,t){if(!e.form)return!1;t=t||"cb";var o,n,r,a=0;for(o=0,r=e.form.elements.length;o<r;o++)(n=e.form.elements[o]).type==e.type&&0===n.id.indexOf(t)&&(n.checked=e.checked,a+=n.checked?1:0);return e.form.boxchecked&&(e.form.boxchecked.value=a),!0},e.renderMessages=function(o){e.removeMessages();var n,r,a,i,s,l,d,c=t.getElementById("system-message-container");for(n in o)if(o.hasOwnProperty(n)){r=o[n],a=t.createElement("div"),d="notice"===n?"alert-info":"alert-"+n,d="message"===n?"alert-success":d,d="error"===n?"alert-error alert-danger":d,a.className="alert "+d;var u=t.createElement("button");for(u.setAttribute("type","button"),u.setAttribute("data-dismiss","alert"),u.className="close",u.innerHTML="×",a.appendChild(u),void 0!==e.JText._(n)&&((i=t.createElement("h4")).className="alert-heading",i.innerHTML=e.JText._(n),a.appendChild(i)),s=r.length-1;s>=0;s--)(l=t.createElement("div")).innerHTML=r[s],a.appendChild(l);c.appendChild(a)}},e.removeMessages=function(){for(var e=t.getElementById("system-message-container");e.firstChild;)e.removeChild(e.firstChild);e.style.display="none",e.offsetHeight,e.style.display=""},e.ajaxErrorsMessages=function(t,o,n){var r={};if("parsererror"===o){for(var a=t.responseText.trim(),i=[],s=a.length-1;s>=0;s--)i.unshift(["&#",a[s].charCodeAt(),";"].join(""));a=i.join(""),r.error=[e.JText._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s",a)]}else"nocontent"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_NO_CONTENT")]:"timeout"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_TIMEOUT")]:"abort"===o?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")]:t.responseJSON&&t.responseJSON.message?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)+" <em>"+t.responseJSON.message+"</em>"]:t.statusText?r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)+" <em>"+t.statusText+"</em>"]:r.error=[e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s",t.status)];return r},e.isChecked=function(e,o){if(void 0===o&&(o=t.getElementById("adminForm")),o.boxchecked.value=e?parseInt(o.boxchecked.value)+1:parseInt(o.boxchecked.value)-1,o.elements["checkall-toggle"]){var n,r,a,i=!0;for(n=0,a=o.elements.length;n<a;n++)if("checkbox"==(r=o.elements[n]).type&&"checkall-toggle"!=r.name&&!r.checked){i=!1;break}o.elements["checkall-toggle"].checked=i}},e.popupWindow=function(e,t,o,n,r){console.warn("Joomla.popupWindow() is deprecated without a replacement!");var a=(screen.width-o)/2,i="height="+n+",width="+o+",top="+(screen.height-n)/2+",left="+a+",scrollbars="+r+",resizable";window.open(e,t,i).window.focus()},e.tableOrdering=function(o,n,r,a){void 0===a&&(a=t.getElementById("adminForm")),a.filter_order.value=o,a.filter_order_Dir.value=n,e.submitform(r,a)},window.writeDynaList=function(e,o,n,r,a,i){console.warn("window.writeDynaList() is deprecated without a replacement!");for(var s=t.createElement("select"),l=e.split(" "),d=0;d<l.length;d++){var c=l[d].split("=");"on"!==c[0].trim().substr(0,2).toLowerCase()&&"href"!==c[0].trim().toLowerCase()&&s.setAttribute(c[0],c[1].replace(/\"/g,""))}var u,m,p,h=n==r;for(u=0;u<o.length;u++)if((p=o[u])[0]==n){m=h?a==p[1]:0===u;var f=t.createElement("option");f.setAttribute("value",p[1]),f.innerText=p[2],m&&f.setAttribute("selected","selected"),s.appendChild(f)}i?i.appendChild(s):t.body.appendChild(s)},window.changeDynaList=function(e,o,n,r,a){console.warn("window.changeDynaList() is deprecated without a replacement!");for(var i,s,l,d,c=t.adminForm[e],u=n==r;c.firstChild;)c.removeChild(c.firstChild);i=0;for(s in o)o.hasOwnProperty(s)&&(l=o[s])[0]==n&&((d=new Option).value=l[1],d.text=l[2],(u&&a==d.value||!u&&0===i)&&(d.selected=!0),c.options[i++]=d);c.length=i},window.radioGetCheckedValue=function(e){if(console.warn("window.radioGetCheckedValue() is deprecated without a replacement!"),!e)return"";var t,o=e.length;if(void 0===o)return e.checked?e.value:"";for(t=0;t<o;t++)if(e[t].checked)return e[t].value;return""},window.getSelectedValue=function(e,o){console.warn("window.getSelectedValue() is deprecated without a replacement!");var n=t[e][o],r=n.selectedIndex;return null!==r&&r>-1?n.options[r].value:null},window.listItemTask=function(t,o){return console.warn("window.listItemTask() is deprecated use Joomla.listItemTask() instead"),e.listItemTask(t,o)},e.listItemTask=function(e,o){var n,r=t.adminForm,a=0,i=r[e];if(!i)return!1;for(;n=r["cb"+a];)n.checked=!1,a++;return i.checked=!0,r.boxchecked.value=1,window.submitform(o),!1},window.submitbutton=function(t){console.warn("window.submitbutton() is deprecated use Joomla.submitbutton() instead"),e.submitbutton(t)},window.submitform=function(t){console.warn("window.submitform() is deprecated use Joomla.submitform() instead"),e.submitform(t)},window.saveorder=function(e,t){console.warn("window.saveorder() is deprecated without a replacement!"),window.checkAll_button(e,t)},window.checkAll_button=function(o,n){var r,a;for(console.warn("window.checkAll_button() is deprecated without a replacement!"),n=n||"saveorder",r=0;r<=o;r++){if(!(a=t.adminForm["cb"+r]))return void alert("You cannot change the order of items, as an item in the list is `Checked Out`");a.checked=!0}e.submitform(n)},e.loadingLayer=function(o,n){if(o=o||"show",n=n||t.body,"load"===o){var r=(e.getOptions("system.paths")||{}).root||"",a=t.createElement("div");a.id="loading-logo",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.opacity="0.8",a.style.filter="alpha(opacity=80)",a.style.overflow="hidden",a.style["z-index"]="10000",a.style.display="none",a.style["background-color"]="#fff",a.style["background-image"]='url("'+r+'/media/jui/images/ajax-loader.gif")',a.style["background-position"]="center",a.style["background-repeat"]="no-repeat",a.style["background-attachment"]="fixed",n.appendChild(a)}else t.getElementById("loading-logo")||e.loadingLayer("load",n),t.getElementById("loading-logo").style.display="show"==o?"block":"none";return t.getElementById("loading-logo")},e.extend=function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},e.request=function(t){(t=e.extend({url:"",method:"GET",data:null,perform:!0},t)).method=t.data?"POST":t.method.toUpperCase();try{var o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0");if(o.open(t.method,t.url,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-Ajax-Engine","Joomla!"),"POST"===t.method){var n=e.getOptions("csrf.token","");n&&o.setRequestHeader("X-CSRF-Token",n),t.headers&&t.headers["Content-Type"]||o.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(t.headers)for(var r in t.headers)t.headers.hasOwnProperty(r)&&o.setRequestHeader(r,t.headers[r]);if(o.onreadystatechange=function(){4===o.readyState&&(200===o.status?t.onSuccess&&t.onSuccess.call(window,o.responseText,o):t.onError&&t.onError.call(window,o))},t.perform){if(t.onBefore&&!1===t.onBefore.call(window,o))return o;o.send(t.data)}}catch(e){return window.console&&console.log(e),!1}return o}}(Joomla,document);