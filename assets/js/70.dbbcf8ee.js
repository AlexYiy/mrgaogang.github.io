(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{357:function(e,r,t){"use strict";t.r(r);var a=t(1),i=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"xcode所遇问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode所遇问题汇总","aria-hidden":"true"}},[e._v("#")]),e._v(" xcode所遇问题汇总")]),e._v(" "),t("h2",{attrs:{id:"xcode升级到12-0所遇问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode升级到12-0所遇问题","aria-hidden":"true"}},[e._v("#")]),e._v(" xcode升级到12.0所遇问题")]),e._v(" "),t("h3",{attrs:{id:"问题1-missing-one-or-more-architectures-required-by-this-target-arm64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题1-missing-one-or-more-architectures-required-by-this-target-arm64","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题1: missing one or more architectures required by this target: arm64")]),e._v(" "),t("blockquote",[t("p",[e._v("Xcode12 build error. The linked framework 'Pods_projectA.framework'is missing one or more architectures required by this target: arm64")])]),e._v(" "),t("p",[e._v("解决办法: "),t("strong",[e._v("Project -> Build Settings -> Excluded Architecture -> Debug -> Any iOS Simulator SDK")]),e._v(" 添加"),t("code",[e._v("arm64")])]),e._v(" "),t("h3",{attrs:{id:"问题2：xxx-h文件-找不到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题2：xxx-h文件-找不到","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题2：xxx.h文件 找不到")]),e._v(" "),t("p",[e._v("解决办法: 在"),t("strong",[e._v("Header Search Path -> Debug中添加对应搜索目录")])]),e._v(" "),t("h3",{attrs:{id:"问题3-no-architectures-to-compile-for-only-active-arch-yes-active-arch-x86-64-valid-archs-arm64-armv7-armv7s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题3-no-architectures-to-compile-for-only-active-arch-yes-active-arch-x86-64-valid-archs-arm64-armv7-armv7s","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题3: No architectures to compile for (ONLY_ACTIVE_ARCH=YES, active arch=x86_64, VALID_ARCHS=arm64 armv7 armv7s).")]),e._v(" "),t("p",[e._v("解决办法: "),t("strong",[e._v("Project -> Build Settings -> Build Active Architecture Only -> Debug 设置为"),t("code",[e._v("NO")])])]),e._v(" "),t("h3",{attrs:{id:"问题4-command-phasescriptexecution-failed-with-a-nonzero-exit-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题4-command-phasescriptexecution-failed-with-a-nonzero-exit-code","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题4: Command PhaseScriptExecution failed with a nonzero exit code")]),e._v(" "),t("p",[e._v("问题原因: "),t("a",{attrs:{href:"https://stackoverflow.com/questions/63607158/xcode-12-building-for-ios-simulator-but-linking-in-object-file-built-for-ios",target:"_blank",rel:"noopener noreferrer"}},[e._v("请见这里"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解决办法: 删除 "),t("code",[e._v("User-Defined")]),e._v(" 下面的 "),t("code",[e._v("VALID_ARCHS")]),e._v("设置 ，设置 Excluded Architecture下 [Any iOS Simjulator]为 "),t("code",[e._v("arm64")])])])}),[],!1,null,null,null);r.default=i.exports}}]);