(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(t,a,s){t.exports=s.p+"assets/img/structure.bf354246.png"},205:function(t,a,s){t.exports=s.p+"assets/img/storyboard-preview.a84aabb8.png"},206:function(t,a,s){t.exports=s.p+"assets/img/empty.f81b8d21.png"},207:function(t,a,s){t.exports=s.p+"assets/img/delete-plist.0350b895.png"},299:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"非完全指南之-使用代码方式编写微信首页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非完全指南之-使用代码方式编写微信首页","aria-hidden":"true"}},[t._v("#")]),t._v(" 非完全指南之: 使用代码方式编写微信首页")]),t._v(" "),n("p",[t._v("前面学习了 TableView,Controller,UINavigationCOntroller 和 UITabBarController 的时候，现在我们来使用以上几种来实现微信的首页。")]),t._v(" "),n("p",[t._v("编写之前，我们先来看一下整个微信的 UI 框架结构：\n"),n("img",{attrs:{src:s(204),alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("最外层是一个 UITabBarController,")]),t._v(" "),n("li",[t._v("每一个 Controller 外层是一个 UINavigationCOntroller 包裹着;")]),t._v(" "),n("li",[t._v("顶部的标签栏使用 UITabBarItem 创建")])]),t._v(" "),n("p",[t._v("如果使用 Storyboard 大致效果图如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(205),alt:""}})]),t._v(" "),n("p",[t._v("下面我们就来使用代码的方式实现如上的功能：")]),t._v(" "),n("h3",{attrs:{id:"_1-启动使用代码的方式，不使用-storyboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动使用代码的方式，不使用-storyboard","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 启动使用代码的方式，不使用 Storyboard")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("删除 Main.storyboard 中的箭头")])]),t._v(" "),n("li",[n("p",[t._v("找到项目工程中的 Main Interface，置空\n"),n("img",{attrs:{src:s(206),alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("删除 Info,plist 中的信息")])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(207),alt:""}})]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("在 "),n("code",[t._v("AppDelegate.m")]),t._v("中编写代码启动页面")])]),t._v(" "),n("p",[n("strong",[t._v("记得创建一个 WeChatTabBarController 并集成自 TabBarControlle")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSDictionary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Override point for customization after application launch.")]),t._v("\n       self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIWindow")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIScreen")]),t._v(" mainScreen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),t._v(" whiteColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatTabBarController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tabTC"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatTabBarController")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tabTC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window makeKeyAndVisible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),n("h3",{attrs:{id:"_2-在-wechattabbarcontroller-编写逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-wechattabbarcontroller-编写逻辑","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 在 WeChatTabBarController 编写逻辑")]),t._v(" "),n("p",[t._v("其实主要的步骤有如下几个：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建控制器，包括微信，联系人，发现，我")])]),t._v(" "),n("li",[n("p",[t._v("为每一个控制器设置属性，包括"),n("code",[t._v("tabBarItem")]),t._v("的标题，选中的图片等等")])]),t._v(" "),n("li",[n("p",[t._v("为每一个控制器创建导航控制器"),n("code",[t._v("UINavigationController")])])]),t._v(" "),n("li",[n("p",[t._v("添加导航控制器到标签栏控制器")])])]),t._v(" "),n("p",[t._v("由于很多代码是类似的，如下做了封装:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  WeChatTabBarController.m")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  代码方式编写微信首页")]),t._v("\n\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WeChatTabBarController.h"')]),t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WechatViewController.h"')]),t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ConnactViewController.h"')]),t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindViewController.h"')]),t._v("\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MeViewController.h"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatTabBarController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" controller  setTitle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" title setDefault "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" defaultImage setActive "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" activeImage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" controller "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@implementation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeChatTabBarController")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do any additional setup after loading the view.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    1. 创建控制器，包括微信，联系人，发现；为了查看效果，此处就不再次封装了")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WechatViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("wechat "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WechatViewController"')]),t._v(" setTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"微信"')]),t._v(" setDefault"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_mainframe"')]),t._v(" setActive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_mainframeHL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConnactViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("connects "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ConnactViewController"')]),t._v(" setTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"联系人"')]),t._v(" setDefault"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_contacts"')]),t._v(" setActive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_contactsHL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FindViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("find "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FindViewController"')]),t._v(" setTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发现"')]),t._v(" setDefault"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_discover"')]),t._v(" setActive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_discoverHL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MeViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("me "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MeViewController"')]),t._v(" setTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我"')]),t._v(" setDefault"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_me"')]),t._v(" setActive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabbar_meHL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    2. 设置属性")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    3. 创建导航控制器")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    4. 添加导航控制器到标签栏控制")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self addChildViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self addChildViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("connects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self addChildViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self addChildViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("me"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("createCustomViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("controller setTitle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("title setDefault"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("defaultImage setActive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("activeImage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    使用class的方式初始化")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSClassFromString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("vc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    标题文本")]),t._v("\n    vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    底部文字")]),t._v("\n    vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBarItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    默认的图片")]),t._v("\n    vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBarItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIImage")]),t._v(" imageNamed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" defaultImage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    选中的图片")]),t._v("\n    vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBarItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedImage "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIImage")]),t._v(" imageNamed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" activeImage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    设置选择的颜色")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabBarItem setTitleTextAttributes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSForegroundColorAttributeName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),t._v(" colorWithRed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" alpha"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" forState"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIControlStateHighlighted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n 创建导航控制器\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("createNavigationController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("nvc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UINavigationController")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithRootViewController"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    设置标题栏背景色")]),t._v("\n    nvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationBar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("barTintColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),t._v(" colorWithRed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(" alpha"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    设置标题等，前景颜色")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationBar setTitleTextAttributes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSForegroundColorAttributeName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("whiteColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nvc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n\n")])])]),n("p",[t._v("至于每一个控制器独有的属性，我们就在独有的 Controller 中设置即可，比如微信页面右侧有一个加号:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  WechatViewController.m")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  代码方式编写微信首页")]),t._v("\n\n#"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WechatViewController.h"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WechatViewController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@implementation")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WechatViewController")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do any additional setup after loading the view.")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greenColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处使用的系统自带的图片")]),t._v("\n    self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightBarButtonItem "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIBarButtonItem")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithBarButtonSystemItem"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIBarButtonSystemItemAdd")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("self action"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clickAdd"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("clickAdd"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"加号点击了"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@end")]),t._v("\n\n")])])]),n("p",[t._v("至于其他的页面，其实是类似的")])])}),[],!1,null,null,null);a.default=e.exports}}]);