(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(e,t,i){},159:function(e,t,i){"use strict";var a=i(153);i.n(a).a},163:function(e,t,i){"use strict";i.r(t);var a=i(175),s=(i(176),{name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",components:{Swiper:a.Swiper,SwiperSlide:a.SwiperSlide},data:function(){return{swiperOption:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"}}}},computed:{data:function(){return this.$page.frontmatter}}}),r=(i(159),i(18)),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"example-3d"},[i("div",{staticClass:"tips"},[e._v("推荐文章")]),e._v(" "),i("swiper",{staticClass:"swiper",attrs:{options:e.swiperOption}},[e._l(e.data.recommands,(function(t,a){return i("swiper-slide",{key:a},[i("a",{staticClass:"slide-item-my",style:{background:"url("+t.img+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},attrs:{href:t.url}},[i("div",{staticClass:"project-name"},[e._v(e._s(t.name))])])])})),e._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)}),[],!1,null,"54c27996",null);t.default=n.exports}}]);