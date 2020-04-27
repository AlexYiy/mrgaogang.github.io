(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{238:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们经常能看到大量介绍前端如何进行性能优化的文章。然而很多文章只介绍了如何优化性能，却未能给出一个可计算，可采集的性能量化标准。此文就简单介绍一下前端性能优化的度量方案。")]),t._v(" "),a("p",[t._v("首先来一张整个 web 请求加载的流程图，这些 api 都可以在"),a("code",[t._v("performance.timing中获取")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/web.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/timing.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、性能优化常用度量方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、性能优化常用度量方法"}},[t._v("#")]),t._v(" 一、性能优化常用度量方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/method.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v("\n其中 "),a("code",[t._v("lcp")]),t._v("和"),a("code",[t._v("tbt")]),t._v("和"),a("code",[t._v("CLS")]),t._v("将会在 2020 年发布 API.")]),t._v(" "),a("h3",{attrs:{id:"fp-和-fcp-度量方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fp-和-fcp-度量方法"}},[t._v("#")]),t._v(" FP 和 FCP 度量方法")]),t._v(" "),a("p",[a("code",[t._v("FP")]),t._v(" 和 "),a("code",[t._v("FCP")]),t._v(" 分别是页面首次绘制和首次内容绘制。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://w3c.github.io/paint-timing/?spm=a2c4e.10696291.0.0.174719a4TO3RdZ#first-paint",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料: w3c paint"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("首次绘制包括了任何用户自定义的背景绘制，它是首先将像素绘制到屏幕的时刻。")]),t._v(" "),a("li",[t._v("首次内容绘制是浏览器将第一个 DOM 渲染到屏幕的时间。该指标报告了浏览器首次呈现任何文本、图像、画布或者 SVG 的时间。")]),t._v(" "),a("li",[t._v("这两个指标其实指示了我们通常所说的"),a("strong",[t._v("白屏时间")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" perfomanceMetrics "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `entry` is a PerformanceEntry instance.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `name` will be either 'first-paint' or 'first-contentful-paint'.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metricName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metricName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      perfomanceMetrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metricName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      perfomanceMetrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fcp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start observing the entry types you care about.")]),t._v("\nobserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/fp-fcp.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"fmp-首次有意义绘制-度量方法【重点】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmp-首次有意义绘制-度量方法【重点】"}},[t._v("#")]),t._v(" FMP(首次有意义绘制) 度量方法【重点】")]),t._v(" "),a("p",[t._v("目前，大多数公司都使用 "),a("code",[t._v("FMP")]),t._v("作为指标来衡量"),a("strong",[t._v("首屏性能")]),t._v("。但是在未来/2020 年 谷歌将会发布一个新的衡量方式"),a("code",[t._v("LCP")]),t._v(",也就是首屏页面最长加载时间作为首屏的度量。"),a("strong",[t._v("FMP 的时机其实是在整个页面绘制完成，但不一定能进行前端交互。")])]),t._v(" "),a("p",[a("code",[t._v("FMP(First meaningful paint and hero element timing)")]),t._v("。因为很难有一个通用标准来指示所有的页面当前时刻的渲染达是否到了有用的程度，所以当前并没有制定标准。对于开发者，我们可以根据自己的页面来确定那一部分是最重要的，然后度量这部分渲染出的时间作为 FMP。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/edit?spm=a2c4e.10696291.0.0.3d6119a44lTmFj",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Time to First Meaningful Paint: a layout-based approach"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("chrome 提供的性能分析工具 "),a("code",[t._v("Lighthouse")]),t._v(" 可以测量出页面的 FMP，在查阅了一些资料后，发现 Lighthouse 使用的算法是："),a("strong",[t._v("页面绘制布局变化最大的那次绘制（根据 页面高度/屏幕高度 调节权重）")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/lighthouse-fmp.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"tti-可交互时间-度量方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tti-可交互时间-度量方式"}},[t._v("#")]),t._v(" TTI(可交互时间) 度量方式")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.google.com/document/d/1GGiI9-7KeY3TPqS3YT271upUVimo-XiL5mwWorDUD4c/preview?spm=a2c4e.10696291.0.0.335019a4l7uGuD",target:"_blank",rel:"noopener noreferrer"}},[t._v("TTI 标准定义文档"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("TTI 主要是通过跟踪耗时较长的任务来确定，设置"),a("code",[t._v("PerformanceObserver")]),t._v("观察类型为 "),a("code",[t._v("longtask")]),t._v(" 的条目，\n然后可以根据耗时较长的条目的 startTime 和 duration，来大致确认页面处于 idle 的时间，从而确定 "),a("code",[t._v("TTI")]),t._v(" 指标。\nGoogle 希望将 TTI 指标标准化，并通过 "),a("code",[t._v("PerformanceObserver")]),t._v(" 在浏览器中公开，但目前并不支持。\n目前只能通过一个 "),a("code",[t._v("polyfill")]),t._v("，检测目前的 "),a("code",[t._v("TTI")]),t._v("，适用于所有支持 "),a("code",[t._v("Long Tasks API")]),t._v(" 的浏览器。\n该 "),a("code",[t._v("polyfill")]),t._v(" 公开 "),a("code",[t._v("getFirstConsistentlyInteractive()")]),t._v(" 方法，后者返回使用 TTI 值进行解析的 promise。")])]),t._v(" "),a("p",[t._v("度量 TTI 主要使用谷歌的"),a("a",{attrs:{href:"https://github.com/GoogleChromeLabs/tti-polyfill?spm=a2c4e.10696291.0.0.387e19a4Qoczy7",target:"_blank",rel:"noopener noreferrer"}},[t._v("tti-polyfill"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("第一步：设置 PerformanceObserver，并指定监控类型为 longtask。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PerformanceLongTaskTiming"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__tti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longtask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("第二步：引入 tti-polyfill.js(可通过 npm 包获取)，获取到 tti 的值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ttiPolyfill "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/images/gmtc/performance/path/to/tti-polyfill.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nttiPolyfill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstConsistentlyInteractive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tti")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use `tti` value in some way.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"long-tasks-度量方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#long-tasks-度量方式"}},[t._v("#")]),t._v(" Long Tasks 度量方式")]),t._v(" "),a("blockquote",[a("p",[t._v("如果有一个任务需要消耗特别长的时间，那么队列中的其他任务将被阻塞。同时，js 线程和 ui 渲染线程是互斥的，也就是说，如果 js 在执行，那么 ui 渲染就被阻塞了。此时，用户在使用时将会感受到卡顿和闪烁，这是当前 web 页面不好的用户体验的主要来源。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://w3c.github.io/longtasks/?spm=a2c4e.10696291.0.0.1e5e19a4ySu5K6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lonag tasks API"),a("OutboundLink")],1),t._v(" 认为一个任务如果超过了 50ms 那么可能是有问题的，它会将这些任务展示给应用开发者。选择 50ms 是因为这样才能满足 RAIL 模型 中用户响应要在 100ms 内的要求。")]),t._v(" "),a("p",[a("strong",[t._v("度量方式")]),t._v(" "),a("code",[t._v("Long Task")]),t._v("的度量也是采用了"),a("a",{attrs:{href:"https://w3c.github.io/longtasks/?spm=a2c4e.10696291.0.0.1e5e19a4ySu5K",target:"_blank",rel:"noopener noreferrer"}},[t._v("tti-polyfill"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `entry` is a PerformanceEntry instance.")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOMHighResTimeStamp")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOMHighResTimeStamp")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register observer for long task notifications")]),t._v("\nobserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" entryTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longtask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"二、如何衡量总体性能？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何衡量总体性能？"}},[t._v("#")]),t._v(" 二、如何衡量总体性能？")]),t._v(" "),a("ul",[a("li",[t._v("绝对平均法")]),t._v(" "),a("li",[t._v("加权平均 法")]),t._v(" "),a("li",[t._v("秒开率，分位法")]),t._v(" "),a("li",[t._v("去值平均法，分位平均值")]),t._v(" "),a("li",[t._v("散点图、数据分层")])]),t._v(" "),a("h2",{attrs:{id:"三、阿里前端性能优化特色方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、阿里前端性能优化特色方案"}},[t._v("#")]),t._v(" 三、阿里前端性能优化特色方案")]),t._v(" "),a("h3",{attrs:{id:"_1、指导思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、指导思想"}},[t._v("#")]),t._v(" 1、指导思想")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/gmtc/performance/main-me.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("减少资源")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("让资源变小")])]),t._v(" "),a("ul",[a("li",[t._v("各种压缩算法")]),t._v(" "),a("li",[t._v("API 优化")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("下载时间变快")])]),t._v(" "),a("ul",[a("li",[t._v("利用 CDN 就近请求资源")]),t._v(" "),a("li",[t._v("优化 TTFB")]),t._v(" "),a("li",[t._v("动态加速")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("打破时间窗口")])]),t._v(" "),a("ul",[a("li",[t._v("预加载下一页资源")]),t._v(" "),a("li",[t._v("各种缓存方案")]),t._v(" "),a("li",[t._v("首屏优化")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("减少执行")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("减少计算量")])]),t._v(" "),a("ul",[a("li",[t._v("代码质量提升")]),t._v(" "),a("li",[t._v("用 SSR 代替 CSR")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("调整时序")])]),t._v(" "),a("ul",[a("li",[t._v("api 并行加载")]),t._v(" "),a("li",[t._v("各种避免字眼阻塞渲染")]),t._v(" "),a("li",[t._v("边缘流式计算方案")])])])])])]),t._v(" "),a("h3",{attrs:{id:"_2、-边缘流式计算方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-边缘流式计算方案"}},[t._v("#")]),t._v(" 2、 边缘流式计算方案")]),t._v(" "),a("h4",{attrs:{id:"边缘流式计算优化首跳性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边缘流式计算优化首跳性能"}},[t._v("#")]),t._v(" 边缘流式计算优化首跳性能")]),t._v(" "),a("p",[a("strong",[t._v("将页面动静分离，静态结构缓存在 CDN,动态内容由 CDN 向服务器获取")]),t._v(" "),a("img",{attrs:{src:"/images/gmtc/performance/bianyuan1.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("和传统的 CSR 有什么区别？")])]),t._v(" "),a("p",[t._v("开始还是 CSR,将静态资源放在 CDN 边缘节点。需要 cdn 有边缘计算能力。")]),t._v(" "),a("p",[a("strong",[t._v("技术原理")]),t._v(" "),a("img",{attrs:{src:"/images/gmtc/performance/bianyuan2.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("【1】用户发送请求")]),t._v(" "),a("li",[t._v("【2】【3】【4】 CDN 上的 edge worker 返回页面接口并保持连接状态")]),t._v(" "),a("li",[t._v("【7】【8】从服务器读原页面，在 edge woker 上包装为 js 代码，动态加载到 dom 结构中")])]),t._v(" "),a("h4",{attrs:{id:"同屏渲染解决二跳性能问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同屏渲染解决二跳性能问题"}},[t._v("#")]),t._v(" 同屏渲染解决二跳性能问题")]),t._v(" "),a("p",[a("strong",[t._v("技术原理")]),t._v(" "),a("img",{attrs:{src:"/images/gmtc/performance/tongping1.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/images/gmtc/performance/tongping2.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"检测工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测工具"}},[t._v("#")]),t._v(" 检测工具")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://developers.google.com/web/tools/lighthouse/#devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐：Lighthouse - Google"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐：WebPagetest - Website Performance and Optimization Test "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐：PageSpeed Insights"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 ☆ "),a("a",{attrs:{href:"https://www.dareboost.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dareboost: Website Speed Test and Website Analysis"),a("OutboundLink")],1),t._v(" (use the coupon WPCDD20 for -20%)")])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://gtmetrix.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GTmetrix | Website Speed and Performance Optimization"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://web.dev/measure",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web.dev"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://tools.pingdom.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pingdom Website Speed Test"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("📖 "),a("a",{attrs:{href:"https://varvy.com/pagespeed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pagespeed - The tool and optimization guide"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("📖 "),a("a",{attrs:{href:"https://developers.google.com/speed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Make the Web Faster | Google Developers"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.sitespeed.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sitespeed.io - Welcome to the wonderful world of Web Performance"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://calibreapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Calibre"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.dotcom-tools.com/website-speed-test.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Website Speed Test | Check Web Performance » Dotcom-Tools"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.pingdom.com/product/uptime-monitoring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Website and Server Uptime Monitoring - Pingdom"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://www.pingdom.com/free",target:"_blank",rel:"noopener noreferrer"}},[t._v("Free Signup Link"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://uptimerobot.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uptime Robot"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://speedcurve.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpeedCurve: Monitor front-end performance"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://github.com/paulirish/pwmetrics",target:"_blank",rel:"noopener noreferrer"}},[t._v("PWMetrics - CLI tool and lib to gather performance metrics"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://varvy.com/pagespeed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Varvy - Page speed optimization"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.checkbot.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Checkbot browser extension - Checks for web performance best practices"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://yellowlab.tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yellow Lab Tools | Online test to help speeding up heavy web pages"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://speedrank.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Speedrank - Web Performance Monitoring"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("🛠 "),a("a",{attrs:{href:"https://www.debugbear.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DebugBear - Monitor website performance and Lighthouse scores"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("strong",[t._v("参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yq.aliyun.com/articles/598162",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里：前端性能衡量标准"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);