(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{311:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("a",{attrs:{href:"https://github.com/MrGaoGang/oview/blob/master/examples/components/chart/Histogram.vue"}},[s("img",{attrs:{src:"https://img.shields.io/badge/oview-%E6%9F%B1%E7%8A%B6%E5%9B%BE%E6%A0%B7%E4%BE%8B%E6%BA%90%E7%A0%81-brightgreen.svg"}})]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[t._v("柱状图扫码预览")])])]),t._v(" "),s("img",{staticStyle:{width:"160px",height:"160px"},attrs:{src:"/images/oview/qrcode.png"}}),t._v(" "),s("h2",{attrs:{id:"一、-柱状图基础构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-柱状图基础构建"}},[t._v("#")]),t._v(" 一、 柱状图基础构建")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item-desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("普通的柱状图"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("o-chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":tooltip")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tooltip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("o-histogram")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("year*sales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("o-histogram")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("o-chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("构建柱状图，"),s("strong",[t._v("必须提供的数据有:data和position")]),t._v("。\n如果您需要显示提示信息/图例那么就需要配置:tooltip和:legend。\ndata的数据结构为:"),s("code",[t._v('[[{ year: "1951 年", sales: 38 }, { year: "1952 年", sales: 52 }]')])]),t._v(" "),s("p",[t._v("说明:")]),t._v(" "),s("ul",[s("li",[t._v("坐标轴position为必传项。")]),t._v(" "),s("li",[t._v("公用配置信息已在"),s("RouterLink",{attrs:{to:"/article/oview/Chart.html"}},[t._v("前文")]),t._v("提及，请查阅")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("样例中有"),s("strong",[t._v("普通的柱状图，分组柱状图，层叠柱状图，区间柱状图，基础条形图")]),t._v("其不同之处在于对每一项的配置不同而已，如您需要实现其中的某一部分请查阅"),s("a",{attrs:{href:"https://github.com/MrGaoGang/oview/blob/master/examples/components/chart/Histogram.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("样例源码"),s("OutboundLink")],1),t._v("\n，查看具体配置,具体配置信息和作用已在前文和样例中注明，请查阅。")])]),t._v(" "),s("h2",{attrs:{id:"二、柱状图额外配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、柱状图额外配置"}},[t._v("#")]),t._v(" 二、柱状图额外配置")]),t._v(" "),s("blockquote",[s("p",[s("RouterLink",{attrs:{to:"/article/oview/Chart.html"}},[t._v("公用配置信息")])],1)]),t._v(" "),s("h3",{attrs:{id:"coord-坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coord-坐标系"}},[t._v("#")]),t._v(" coord (坐标系)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:Object")]),t._v(" "),s("li",[t._v("描述:坐标系")]),t._v(" "),s("li",[t._v("默认："),s("code",[t._v('{ coordType: "rect",options: {transposed: false // 坐标系不翻转}}')]),t._v("，默认使用极坐标系的方式")]),t._v(" "),s("li",[t._v("说明: 图例分为两个部分 数据字段名称，配置信息,")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("coordType：有两种类型，1：笛卡尔坐标系(rect)；2：极坐标系（polar）")]),t._v(" "),s("br"),t._v("options为配置信息，不同的坐标系配置不同。")])]),t._v(" "),s("ul",[s("li",[t._v("直角坐标系")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性名")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("start")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("坐标系的起始点，F2 图表的坐标系原点位于左下角。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("end")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("坐标系右上角的画布坐标。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("transposed")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否发生转置，true 表示发生了转置。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isRect")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否是直角坐标系，直角坐标系下为 true。")])])])]),t._v(" "),s("ul",[s("li",[t._v("极坐标系")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性名")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("startAngle")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的起始角度，弧度制。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("endAngle")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的结束角度，弧度制。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("innerRadius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("绘制环图时，设置内部空心半径，相对值，0 至 1 范围。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("radius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("设置圆的半径，相对值，0 至 1 范围。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isPolar")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("判断是否是极坐标，极坐标下为 true。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("transposed")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否发生转置，true 表示发生了转置。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("center")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("极坐标的圆心所在的画布坐标。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("circleRadius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的半径值。")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);