(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{354:function(t,v,e){"use strict";e.r(v);var i=e(0),_=Object(i.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"android性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" Android性能优化")]),t._v(" "),e("h3",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),e("h4",{attrs:{id:"_1、内存泄漏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、内存泄漏")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("单例模式引用Activity导致内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("单例的生命周期，是整个应用程序的长度。单例模式使用activity的context，若activity退出则可能会造成内存泄漏；\n解决办法：建议使用生命周期较长的context:applicationContext")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("内部类造成的泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("非静态内部类持有外部类的引用，可能外部类退出没有将内部类实例置空，导致内存泄漏。")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：在onDestroy方法中收到将内部类实例置空，或者将内部类换成静态内部类。")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("匿名内部类导致内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("匿名内部类同样会持有一个外部类的引用，如果在activity销毁之后内部类还没执行完成，则任然会造成内存泄漏。")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：在onDesctroy中中断内部类。如果是线程的话可以使用线程池。")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("strong",[t._v("Handler导致内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("假若在onCreate中发送一个请求，返回时在handler中处理，但是在正要处理时activity被销毁，那么在handler中的activity对象将会无效。")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：使用静态内部类+弱引用(WeakRefrence)+关闭时移除所有消息和Runnable方式。")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("strong",[t._v("监听器导致内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("比较常见的是注册了广播，但是忘记销毁了。（activity注册一些服务，在activity销毁是忘记取消注册）；还有就是android动画忘记关闭导致。")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：在activity中取消服务的注册；和关闭动画")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("strong",[t._v("Service可能产生内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("系统会倾向于将service所依赖的进程保留，如果这个进程比较耗内存，那么就可能造成内存泄漏。")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：使用Intentservice，他会在后来任务结束时自动执行，从而避免service停止失败导致泄漏。")])]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[e("strong",[t._v("优化bitmap避免内存泄漏")])])]),t._v(" "),e("blockquote",[e("p",[t._v("在Listview和recyclerview中可能会有大量的图片，那么需要对图片进行加工处理来避免泄漏；")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：图片质量压缩，图片尺寸剪裁，")])]),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[e("strong",[t._v("数据库游标忘记关闭造成泄漏")])])]),t._v(" "),e("h3",{attrs:{id:"稳定性优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#稳定性优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 稳定性优化")]),t._v(" "),e("ul",[e("li",[t._v("提高后台进程存活率")]),t._v(" "),e("li",[t._v("Java层级的Crash监控：自定义UnCaughtException")]),t._v(" "),e("li",[t._v("使用腾讯的Bugly和网易云捕")])]),t._v(" "),e("h3",{attrs:{id:"存储优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 存储优化")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SQLite优化")]),t._v(" "),e("ul",[e("li",[t._v("使用SQLiteStatement提高插入数据的效率;")]),t._v(" "),e("li",[t._v("使用事务(beginTransaction(),setTransationSuccessful()，endTransaction());")]),t._v(" "),e("li",[t._v("使用索引")])])]),t._v(" "),e("li",[e("p",[t._v("SharedPreferences")]),t._v(" "),e("ul",[e("li",[t._v("将SP作为耗时操作对待，尽量减少无谓的调用；")]),t._v(" "),e("li",[t._v("对SP进行封装，减少直接调用，防止KEY耦合。")])])])]),t._v(" "),e("h3",{attrs:{id:"绘制优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绘制优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制优化")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("启动优化")]),t._v(" "),e("ul",[e("li",[t._v("启动耗时检测（使用代码打点）；")]),t._v(" "),e("li",[t._v("UI布局优化：减少UI层级，避免过度绘制（使用手机端Profile GPR Rendering和AS端Hierarchy View）;")]),t._v(" "),e("li",[t._v("启动加载逻辑优化：分步加载，异步加载，延时加载")])])]),t._v(" "),e("li",[e("p",[t._v("布局优化")]),t._v(" "),e("ul",[e("li",[t._v("减少层级")]),t._v(" "),e("li",[t._v("Merge使用")]),t._v(" "),e("li",[t._v("使用ViewStub")]),t._v(" "),e("li",[t._v("布局复用使用include")])])]),t._v(" "),e("li",[e("p",[t._v("绘制优化")]),t._v(" "),e("ul",[e("li",[t._v("移除XML中必须的背景；")]),t._v(" "),e("li",[t._v("移除Window的默认背景；")]),t._v(" "),e("li",[t._v("按需显示占位背景图片；")]),t._v(" "),e("li",[t._v("自定义View时避免重复绘制")])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);