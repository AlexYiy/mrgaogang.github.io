(window.webpackJsonp=window.webpackJsonp||[]).push([[8,12],{150:function(t,e,a){},152:function(t,e,a){},153:function(t,e,a){},154:function(t,e,a){"use strict";a.r(e);a(43),a(30),a(101);var i=a(168);!function(t,e){function a(t){this.DOM={},this.DOM.el=t,this.DOM.stack=this.DOM.el.querySelector(".stack"),this.DOM.stackItems=[].slice.call(this.DOM.stack.children),this.totalItems=this.DOM.stackItems.length,this.DOM.img=this.DOM.stack.querySelector(".stack__figure > .stack__img"),this.DOM.caption=this.DOM.el.querySelector(".grid__item-caption"),this.DOM.title=this.DOM.caption.querySelector(".grid__item-title"),this.DOM.columns={left:this.DOM.caption.querySelector(".column--left"),right:this.DOM.caption.querySelector(".column--right")}}function i(t){a.call(this,t),this._initEvents()}function n(t){a.call(this,t),this._initEvents()}function s(t){a.call(this,t),this._initEvents()}function o(t){a.call(this,t),this._initEvents()}function r(t){a.call(this,t),this._initEvents()}function u(t){a.call(this,t),this._initEvents()}function c(t){a.call(this,t),this._initEvents()}function l(t){a.call(this,t),this._initEvents()}function h(t){a.call(this,t),this._initEvents()}function g(t){a.call(this,t),this._initEvents()}a.prototype._removeAnimeTargets=function(){e.remove(this.DOM.stackItems),e.remove(this.DOM.img),e.remove(this.DOM.title),e.remove(this.DOM.columns.left),e.remove(this.DOM.columns.right)},i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},i.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?.2*a+.2:1})),e({targets:this.DOM.stackItems,translateZ:[{value:function(t,e){return 8*e+8},duration:200,easing:[.42,0,1,1]},{value:function(t,e){return 20*e+20},duration:700,easing:[.2,1,.3,1]}],rotateX:[{value:function(t,e){return-1*(2*e+2)},duration:200,easing:[.42,0,1,1]},{value:0,duration:700,easing:[.2,1,.3,1]}]}),e({targets:this.DOM.img,duration:900,easing:[.2,1,.3,1],scale:.7}),e({targets:this.DOM.title,translateY:{value:[35,0],duration:500,easing:[.5,1,.3,1]},opacity:{value:[0,1],duration:400,easing:"linear"}}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],translateY:[{value:function(t,e){return 0===e?[40,0]:[60,0]},duration:500,easing:[.5,1,.3,1],delay:100}],opacity:[{value:[0,0],duration:1,easing:"linear"},{value:1,delay:100,duration:400,easing:"linear"}]})},i.prototype._out=function(){e({targets:this.DOM.stackItems,translateZ:[{value:function(t,e){return 20*e+20-8},duration:200,easing:[.42,0,1,1]},{value:0,duration:900,easing:[.2,1,.3,1]}],rotateX:[{value:function(t,e){return 2*e+2},duration:200,easing:[.42,0,1,1]},{value:0,duration:900,easing:[.2,1,.3,1]}],opacity:{value:function(t,e,a){return e!==a-1?0:1},duration:900,delay:200,easing:[.2,1,.3,1]}}),e({targets:this.DOM.img,duration:900,easing:[.2,1,.3,1],scale:1}),e({targets:this.DOM.title,duration:750,easing:[.2,1,.3,1],translateY:0,opacity:1}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:750,easing:[.2,1,.3,1],translateY:0,opacity:1})},t.VegaFx=i,n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},n.prototype._in=function(){e({targets:this.DOM.stackItems,rotateX:{value:function(t,e,a){return e===a-1?0:[70,0]},duration:1e3,easing:"easeOutExpo"},translateZ:{value:function(t,e,a){return e===a-1?20*e:[-300,20*e]},duration:1e3,easing:"easeOutExpo"},opacity:{value:function(t,e,a){return e===a-1?1:[0,.2*e+.2]},duration:1e3,easing:"linear"},delay:function(t,e,a){return 100*(a-e-1)}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutExpo",scale:.7}),e({targets:this.DOM.title,duration:1e3,easing:"easeOutExpo",translateZ:30})},n.prototype._out=function(){e({targets:this.DOM.stackItems,duration:1e3,easing:"easeOutExpo",translateZ:0,opacity:function(t,e,a){return e!==a-1?0:1}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutExpo",scale:1}),e({targets:this.DOM.title,duration:1e3,easing:"easeOutExpo",translateZ:0}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",delay:function(t,e){return 0===e?150:200},translateX:0,translateY:0})},t.CastorFx=n,s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},s.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?.2*a+.2:1})),e({targets:this.DOM.stackItems,duration:1e3,easing:"easeOutExpo",translateY:function(t,e){return-1*e*5},rotate:function(t,e,a){return e===a-1?0:e%2?1*(a-e):-1*(a-e)*1},scale:function(t,e,a){return e===a-1?1:1.05},delay:function(t,e,a){return 30*(a-e-1)}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutExpo",scale:.7}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:1e3,easing:"easeOutExpo",translateX:function(t,e){return 0===e?-30:30}})},s.prototype._out=function(){e({targets:this.DOM.stackItems,duration:500,easing:"easeOutExpo",translateY:0,rotate:0,scale:1,opacity:function(t,e,a){return e!==a-1?0:1}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutElastic",scale:1}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",translateX:0})},t.HamalFx=s,o.prototype=Object.create(a.prototype),o.prototype.constructor=o,o.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},o.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?.2*a+.2:1})),e({targets:this.DOM.stackItems,duration:1e3,easing:"easeOutElastic",translateZ:function(t,e){return 10*e},delay:function(t,e,a){return 20*(a-e-1)}}),e({targets:this.DOM.img,duration:500,easing:"easeOutExpo",scale:.7}),e({targets:this.DOM.title,duration:1e3,easing:"easeOutElastic",translateZ:30}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:1e3,easing:"easeOutElastic",translateX:function(t,e){return 0===e?-30:30},translateY:30})},o.prototype._out=function(){e({targets:this.DOM.stackItems,duration:1e3,easing:"easeOutExpo",translateZ:0,opacity:function(t,e,a){return e!==a-1?0:1}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutExpo",scale:1}),e({targets:this.DOM.title,duration:500,delay:100,easing:"easeOutExpo",translateZ:0}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",delay:function(t,e){return 0===e?150:200},translateX:0,translateY:0})},t.PolarisFx=o,r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},r.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?.2*a+.2:1})),e({targets:this.DOM.stackItems,opacity:{value:function(t,e,a){return e!==a-1?[0,.2*e+.2]:1},duration:1,easing:"linear",delay:function(t,e,a){return 30*(a-e-1)+250}},rotate:[{value:12,duration:250,easing:"easeOutQuad"},{value:function(t,e){return-1*e*3-3},duration:1e3,easing:"easeOutExpo"}],delay:function(t,e,a){return 30*(a-e-1)}}),e({targets:this.DOM.img,rotate:[{value:[0,12],duration:250,easing:"easeOutQuad"},{value:[12,0],duration:1200,delay:50,easing:"easeOutExpo"}]}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",translateY:function(t,e){return 0===e?-5:5}})},r.prototype._out=function(){e({targets:this.DOM.stackItems,duration:500,easing:"easeOutExpo",rotate:0,opacity:function(t,e,a){return e!==a-1?0:1}}),e({targets:this.DOM.img,duration:1e3,easing:"easeOutExpo",rotate:1}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",translateY:0})},t.AlphardFx=r,u.prototype=Object.create(a.prototype),u.prototype.constructor=u,u.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},u.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?.2*a+.2:1})),e({targets:this.DOM.stackItems,duration:1e3,easing:"easeOutElastic",translateZ:function(t,e,a){return 3*e},rotateX:function(t,e,a){return-1*e*4},delay:function(t,e,a){return 30*(a-e-1)}}),e({targets:this.DOM.img,duration:500,easing:"easeOutExpo",scale:.7}),e({targets:this.DOM.title,duration:1e3,easing:"easeOutElastic",translateY:20}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:1e3,easing:"easeOutElastic",translateY:function(t,e){return 0===e?30:20}})},u.prototype._out=function(){e({targets:this.DOM.stackItems,duration:500,easing:"easeOutExpo",opacity:function(t,e,a){return e!==a-1?0:1},translateZ:0,rotateX:0}),e({targets:this.DOM.img,duration:500,easing:"easeOutExpo",scale:1}),e({targets:[this.DOM.columns.left,this.DOM.columns.right,this.DOM.title],duration:500,easing:"easeOutExpo",translateY:0})},t.AltairFx=u,c.prototype=Object.create(a.prototype),c.prototype.constructor=c,c.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},c.prototype._in=function(){e({targets:this.DOM.stackItems,translateZ:{value:function(t,e){return 10*e},duration:800,easing:"easeOutExpo",delay:200},opacity:{value:function(t,e,a){return e!==a-1?[0,.1*e+.1]:1},duration:1,easing:"linear",delay:200},translateY:[{value:function(t,e){return-1*e*10},duration:800,delay:200,elasticity:300}],scaleY:[{value:.8,duration:200,easing:"easeOutExpo"},{value:1,duration:800,elasticity:300}],scaleX:[{value:1.1,duration:200,easing:"easeOutExpo"},{value:1,duration:800,elasticity:300}]}),e({targets:this.DOM.img,duration:900,easing:"easeOutExpo",delay:200,scale:.7}),e({targets:this.DOM.title,translateY:{value:[200,0],duration:800,easing:"easeOutExpo"},opacity:{value:[0,1],duration:400,delay:200,easing:"linear"}}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],translateY:[{value:[60,0],duration:800,easing:"easeOutExpo",delay:200}],opacity:[{value:[0,0],duration:1,easing:"linear"},{value:1,delay:300,duration:400,easing:"linear"}]})},c.prototype._out=function(){e({targets:this.DOM.stackItems,duration:800,easing:"easeOutElastic",translateZ:0,opacity:function(t,e,a){return e!==a-1?0:1},translateY:0}),e({targets:this.DOM.img,duration:800,easing:"easeOutElastic",scale:1}),e({targets:this.DOM.title,duration:800,easing:"easeOutExpo",translateY:0,opacity:1}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:800,easing:"easeOutExpo",translateY:0,opacity:1})},t.RigelFx=c,l.prototype=Object.create(a.prototype),l.prototype.constructor=l,l.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},l.prototype._in=function(){var t=this;this.DOM.stackItems.map((function(e,a){e.style.opacity=a!==t.totalItems-1?0:1}));t=this;e({targets:this.DOM.stackItems,translateZ:{value:function(t,e,a){return-1*(a-e-1)*20},duration:800,easing:"easeOutExpo",delay:function(t,e,a){return 70*(a-e-1)+200}},translateY:[{value:function(t,e){return-1*e*20-30},duration:800,delay:function(t,e,a){return 70*(a-e-1)+200},elasticity:500}],scaleY:[{value:function(t,e,a){return e===a-1?.6:1},duration:200,easing:"easeOutExpo"},{value:.8,duration:800,elasticity:450}],scaleX:[{value:function(t,e,a){return e===a-1?1.1:1},duration:200,easing:"easeOutExpo"},{value:.8,duration:800,elasticity:300}],opacity:{value:function(t,e,a){return e===a-1?1:[0,.2*e+.2]},duration:200,easing:"linear",delay:function(t,e,a){return 70*(a-e-1)+200}}}),e({targets:this.DOM.img,scale:[{value:1.8,duration:200,easing:"easeOutExpo"},{value:.7,duration:1100,easing:"easeOutExpo"}]}),e({targets:[this.DOM.title,this.DOM.columns.left,this.DOM.columns.right],duration:1e3,easing:"easeOutElastic",translateY:-30,delay:200})},l.prototype._out=function(){e({targets:this.DOM.stackItems,duration:500,easing:"easeOutExpo",translateZ:0,translateY:0,scaleY:1,scaleX:1,opacity:function(t,e,a){return e!==a-1?0:1}}),e({targets:this.DOM.img,duration:500,easing:"easeOutExpo",scale:1}),e({targets:[this.DOM.title,this.DOM.columns.left,this.DOM.columns.right],duration:500,easing:"easeOutExpo",translateY:0})},t.CanopusFx=l,h.prototype=Object.create(a.prototype),h.prototype.constructor=h,h.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},h.prototype._in=function(){e({targets:this.DOM.stackItems,duration:1e3,opacity:{value:function(t,e,a){return e!==a-1?[0,.1*e+.1]:1},easing:"linear",delay:function(t,e,a){return 60*(a-e-1)}},translateY:{value:function(t,e){return-1*e*10},easing:"easeInOutCubic"},rotateX:{value:80,easing:"easeInOutCubic"},rotateZ:{value:360,easing:"easeInOutCubic",delay:function(t,e,a){return 60*(a-e-1)}}}),e({targets:this.DOM.img,duration:1e3,easing:"easeInOutCubic",scale:.7}),e({targets:this.DOM.title,rotate:[{value:[0,10],duration:300,delay:300,easing:"easeOutCubic"},{value:[-20,0],duration:300,easing:"easeOutCubic"}],opacity:[{value:[1,0],duration:100,delay:300,easing:"easeOutCubic"},{value:[0,1],duration:100,delay:300,easing:"easeOutCubic"}]})},h.prototype._out=function(){e({targets:this.DOM.stackItems,duration:1e3,opacity:{value:function(t,e,a){return e!==a-1?0:1},easing:"linear",delay:function(t,e){return 60*e}},translateY:{value:0,easing:"easeInOutCubic"},rotateX:{value:0,easing:"easeInOutCubic"},rotateZ:{value:0,easing:"easeInOutCubic",delay:function(t,e,a){return 60*(a-e-1)}}}),e({targets:this.DOM.img,duration:1e3,easing:"easeInOutCubic",scale:1}),e({targets:this.DOM.title,duration:1e3,easing:"easeInOutCubic",rotate:0,opacity:1})},t.PolluxFx=h,g.prototype=Object.create(a.prototype),g.prototype.constructor=g,g.prototype._initEvents=function(){var t=this;this._mouseenterFn=function(){t._removeAnimeTargets(),t._in()},this._mouseleaveFn=function(){t._removeAnimeTargets(),t._out()},this.DOM.stack.addEventListener("mouseenter",this._mouseenterFn),this.DOM.stack.addEventListener("mouseleave",this._mouseleaveFn)},g.prototype._in=function(){e({targets:this.DOM.stackItems,duration:1e3,easing:[.2,1,.3,1],rotate:360,opacity:function(t,e,a){return e!==a-1?[0,.1*e+.1]:1},delay:function(t,e,a){return 30*(a-e-1)}}),e({targets:this.DOM.img,duration:1100,delay:20,easing:[.2,1,.3,1],scale:.7,rotate:360}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:650,delay:400,easing:[.2,1,.3,1],rotate:[-20,0],opacity:1})},g.prototype._out=function(){e({targets:this.DOM.stackItems,duration:1e3,easing:[.2,1,.3,1],rotate:0,opacity:function(t,e,a){return e!==a-1?[0,.1*e+.1]:1},delay:function(t,e,a){return 30*(a-e-1)}}),e({targets:this.DOM.img,duration:1750,easing:[.2,1,.3,1],scale:1,rotate:0}),e({targets:[this.DOM.columns.left,this.DOM.columns.right],duration:400,easing:"easeInCubic",rotate:[0,-10],opacity:0})},t.DenebFx=g}(window,i.a)},155:function(t,e,a){"use strict";var i=a(150);a.n(i).a},157:function(t,e,a){"use strict";a.r(e);a(64),a(30),a(65),a(167);process.client&&a(154);var i={computed:{data:function(){return this.$page.frontmatter}},mounted:function(){process.client&&[].slice.call(document.querySelectorAll(".grid--effect-hamal > .grid__item")).forEach((function(t){new HamalFx(t)}))}},n=(a(155),a(17)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"grid grid--effect-hamal"},[a("div",{staticClass:"my-github"},[t._v("我的开源")]),t._v(" "),t._l(t.data.github,(function(e){return a("a",{key:e.url,staticClass:"grid__item grid__item--c1",attrs:{href:"https://github.com/mrgaogang/"+e.name}},[a("div",{staticClass:"stack"},[a("div",{staticClass:"stack__deco"}),t._v(" "),a("div",{staticClass:"stack__deco"}),t._v(" "),a("div",{staticClass:"stack__deco"}),t._v(" "),a("div",{staticClass:"stack__deco"}),t._v(" "),a("div",{staticClass:"stack__figure"},[a("div",{staticClass:"stack__img"},[a("div",{staticClass:"project-name"},[a("i",{staticClass:"icon star--icon"}),t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),a("div",{staticClass:"project-desc"},[t._v(t._s(e.desc))])])])]),t._v(" "),a("div",{staticClass:"grid__item-caption"})])}))],2)])}),[],!1,null,"3e57ab5a",null);e.default=s.exports},159:function(t,e,a){"use strict";a(182);var i=a(183),n=a(190),s=a(192),o=a(179);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(166),a(17)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=l.exports},166:function(t,e,a){"use strict";var i=a(152);a.n(i).a},169:function(t,e,a){"use strict";var i=a(153);a.n(i).a},189:function(t,e,a){"use strict";a.r(e);var i=a(158),n=a(159),s=a(157),o={name:"Home",components:{NavLink:i.a,Navbar:n.a,Github:s.default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(a(169),a(17)),u=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("Navbar"),t._v(" "),a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),a("Github"),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);