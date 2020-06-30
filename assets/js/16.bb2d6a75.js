(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{175:function(v,e,_){v.exports=_.p+"assets/img/1.b0733922.png"},176:function(v,e,_){v.exports=_.p+"assets/img/2.be0fe453.png"},295:function(v,e,_){"use strict";_.r(e);var t=_(17),i=Object(t.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("过度绘制（"),t("code",[v._v("OverDraw")]),v._v("）是指在屏幕上在某一个像素，子安同一帧的时间内被多次的绘制，常见的是重复被组件或者布局添加背景颜色，等等。\n主要原因：")]),v._v(" "),t("ul",[t("li",[v._v("XML布局文件，控件有重叠且都有设置背景。")]),v._v(" "),t("li",[v._v("View的自绘中，View.onDraw里面同一个区域被多次绘制了。")])]),v._v(" "),t("h2",{attrs:{id:"一、过度绘制的检测工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、过度绘制的检测工具"}},[v._v("#")]),v._v(" 一、过度绘制的检测工具")]),v._v(" "),t("p",[v._v("打开手机设置中开发者人员选项，选择打开“显示GPU过度重绘”，对没有默认开启硬件加速的界面需要同时打开“强制进行GPU渲染”。")]),v._v(" "),t("ul",[t("li",[v._v("无色：没有过度重绘， 每个像素只绘制一次")]),v._v(" "),t("li",[v._v("蓝色：每个像素多绘制了一次（可接受）")]),v._v(" "),t("li",[v._v("绿色：每个像素多绘制两次（可接受）")]),v._v(" "),t("li",[v._v("淡红：每个像素多绘制三次，一般来说这个区域不超过屏幕的1/4是可以接受的。")]),v._v(" "),t("li",[v._v("深红：每个像素被绘制四次或者更多。不可接受。")])]),v._v(" "),t("p",[v._v("目标："),t("strong",[v._v("减少红色，显示更多蓝色区域。")])]),v._v(" "),t("h2",{attrs:{id:"二、布局上的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、布局上的优化"}},[v._v("#")]),v._v(" 二、布局上的优化")]),v._v(" "),t("ul",[t("li",[v._v("移除XML中非必须的背景，或者根据条件设置")]),v._v(" "),t("li",[v._v("移除window的默认背景(在setContentView前面加上this.getWindow().setBackgroundDrawable(null));")]),v._v(" "),t("li",[v._v("按需显示占位背景图片。")])]),v._v(" "),t("h2",{attrs:{id:"三、自定义view的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、自定义view的优化"}},[v._v("#")]),v._v(" 三、自定义View的优化")]),v._v(" "),t("p",[v._v("在View的自绘中，会存在View的过度重绘，比如多个组件重叠在一起，如果我们只绘制出它显示的部分就解决了过度重绘问题，假设多个组件都按照原本大小绘制的话，将会到底过度重绘。")]),v._v(" "),t("ul",[t("li",[v._v("在自定义View中可以使用"),t("code",[v._v("canvas.clipRect()")]),v._v("来帮助系统识别哪些可见的区域，这个方法指定一个矩形区域，只有在这个区域内才会被绘制，其他区域将不会被绘制。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("canvas.quickreject()")]),v._v("来判断是否没和某个矩形相交，从而跳过哪些非矩形区域内的绘制操作。")])]),v._v(" "),t("p",[v._v("在"),t("code",[v._v("RecyclerView")]),v._v("或者"),t("code",[v._v("ListView")]),v._v("或者其他容器控件中，"),t("code",[v._v("ItemView")]),v._v("如果比较复杂，建议实现成一个自绘"),t("code",[v._v("View")]),v._v("，这样会让滑动更加顺畅。")]),v._v(" "),t("p",[v._v("以一个四个卡片叠加咋自定义View为例子")]),v._v(" "),t("p",[t("img",{attrs:{src:_(175),alt:""}}),v._v(" "),t("img",{attrs:{src:_(176),alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);