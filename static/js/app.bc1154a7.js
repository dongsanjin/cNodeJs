(function(t){function a(a){for(var e,n,r=a[0],o=a[1],l=a[2],u=0,h=[];u<r.length;u++)n=r[u],i[n]&&h.push(i[n][0]),i[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);p&&p(a);while(h.length)h.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],e=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(e=!1)}e&&(c.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},c=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var p=o;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"05ec":function(t,a,s){"use strict";var e=s("6015"),i=s.n(e);i.a},"1f53":function(t,a,s){},"249b":function(t,a,s){"use strict";var e=s("da6f"),i=s.n(e);i.a},"2fb4":function(t,a,s){},"32bb":function(t,a,s){"use strict";var e=s("ddd2"),i=s.n(e);i.a},"39c1":function(t,a,s){"use strict";var e=s("d245"),i=s.n(e);i.a},"3aff":function(t,a,s){},"3c54":function(t,a,s){"use strict";var e=s("84c2"),i=s.n(e);i.a},"44f5":function(t,a,s){"use strict";var e=s("2fb4"),i=s.n(e);i.a},"4ae4":function(t,a,s){"use strict";var e=s("e671"),i=s.n(e);i.a},"4ee2":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=s("bc3a"),c=s.n(i),n={},r=c.a.create(n);r.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),r.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,a){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},e["a"].use(Plugin);Plugin;var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("home")],1)},l=[],p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("home-header"),s("div",{staticClass:"main-box"},[s("home-sidebar",{staticClass:"main-right"}),s("router-view",{staticClass:"main-left"})],1),s("home-footer")],1)},u=[],h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("search"),s("my-nav")],1)])},f=[],d=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header-left"},[s("section",{staticClass:"logo"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"logo-img",attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}}),t._v(">")])]),s("form",{attrs:{action:"#",id:"search-form"}},[s("input",{staticClass:"search",attrs:{type:"text"}})])])}],m={name:"Search"},g=m,_=(s("32bb"),s("2877")),C=Object(_["a"])(g,d,v,!1,null,"106f976e",null),b=C.exports,y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header-right"},[s("div",{staticClass:"nav-lists"},[s("a",{staticClass:"nav-list nav-list-active",attrs:{href:""}},[t._v("首页")]),s("a",{staticClass:"nav-list",attrs:{href:""}},[t._v("新手入门")]),s("a",{staticClass:"nav-list",attrs:{href:""}},[t._v("API")]),s("a",{staticClass:"nav-list",attrs:{href:""}},[t._v("关于")]),s("a",{staticClass:"nav-list",attrs:{href:""}},[t._v("注册")]),s("a",{staticClass:"nav-list",attrs:{href:""}},[t._v("登录")])])])}],T={name:"Nav"},k=T,w=(s("d9d8"),Object(_["a"])(k,y,j,!1,null,"22c402a9",null)),P=w.exports,x={name:"Header",components:{Search:b,MyNav:P}},$=x,O=(s("6257"),Object(_["a"])($,h,f,!1,null,"8f79f5c6",null)),M=O.exports,E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"outer"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"source-code"},[s("a",{staticClass:"source-code-link",attrs:{href:"https://cnodejs.org/rss"}},[t._v("RSS")]),s("span",{staticClass:"segmentation"},[t._v(" | ")]),s("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/cnodejs/nodeclub/"}},[t._v("源码地址")])]),s("p",{staticClass:"cnode-desc"},[t._v("CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),s("div",{staticClass:"sponsor"},[t._v("\n        服务器赞助商为\n        "),s("a",{attrs:{href:"https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"}},[s("img",{attrs:{src:"https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9",width:"92px"}})]),t._v("\n        ，存储赞助商为\n        "),s("a",{attrs:{href:"https://www.qiniu.com/?ref=cnode"}},[s("img",{attrs:{src:"https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX",width:"115px"}})]),t._v("\n        ，由\n        "),s("a",{attrs:{href:"https://www.aliyun.com/product/nodejs?ref=cnode"}},[s("img",{attrs:{src:"https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD",width:"166px"}})]),t._v("提供应用性能服务。\n    ")]),s("div",{staticClass:"suggest"},[t._v("\n      新手搭建 Node.js 服务器，推荐使用无需备案的 \n      "),s("a",{staticClass:"server-link",attrs:{href:"https://www.digitalocean.com"}},[t._v("DigitalOcean(https://www.digitalocean.com/)")])])])])}],S={name:"Footer"},L=S,H=(s("39c1"),Object(_["a"])(L,E,I,!1,null,"1f334b40",null)),N=H.exports,D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"wrapper"},[s("li",{staticClass:"side github-login"},[s("p",{staticClass:"side-text"},[t._v("CNode: Node.js专业中文社区")]),s("div",{staticClass:"login-inner"},[t._v("\n      您可以"),s("a",{staticClass:"behavior",attrs:{href:"#"}},[t._v("登录")]),t._v("或"),s("a",{staticClass:"behavior",attrs:{href:"#"}},[t._v("注册")]),t._v(",也可以\n    ")]),s("a",{staticClass:"btn-login"},[t._v("通过Github登录")])]),s("li",{staticClass:"side recommend"},[s("a",{staticClass:"img-box",attrs:{href:"#"}},[s("img",{attrs:{src:"https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"}})]),s("a",{staticClass:"img-box",attrs:{href:"#"}},[s("img",{attrs:{src:"https://static.cnodejs.org/FvSQHGgGVh_tkomqIFQ0MDEH9wrg"}})]),s("a",{staticClass:"img-box",attrs:{href:"#"}},[s("img",{attrs:{src:"https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"}})])]),s("li",{staticClass:"side reply"},[s("div",{staticClass:"title"},[t._v("\n      无人回复的话题\n    ")]),s("div",{staticClass:"topic-wrapper"},[s("a",{staticClass:"not-reply-topic",attrs:{href:"#"}},[t._v("Node.js 是如何异步判断文件是否存在?")]),s("a",{staticClass:"not-reply-topic",attrs:{href:"#"}},[t._v("最简洁的react router，仅一行代码。")]),s("a",{staticClass:"not-reply-topic",attrs:{href:"#"}},[t._v("express传入模板引擎变量的源码分析")]),s("a",{staticClass:"not-reply-topic",attrs:{href:"#"}},[t._v("CEAMS: 基于Node.js的高效微服务应用开发运维和API管理系统提供免费下载使用")]),s("a",{staticClass:"not-reply-topic",attrs:{href:"#"}},[t._v("计算机语言的性能指标都是啥意思?")])])]),s("li",{staticClass:"side integral"},[s("div",{staticClass:"title"},[t._v("\n      积分榜"),s("span",{staticClass:"ranking"},[t._v("TOP 100 >>")])]),s("div",{staticClass:"ranking-wrapper"},[s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("21400 "),s("span",{staticClass:"username"},[t._v("i5ting")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("15475 "),s("span",{staticClass:"username"},[t._v("alsotang")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("9350 "),s("span",{staticClass:"username"},[t._v("leapon")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("8780 "),s("span",{staticClass:"username"},[t._v("jiyinyiyong")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("8475 "),s("span",{staticClass:"username"},[t._v("atian25")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("7185 "),s("span",{staticClass:"username"},[t._v("yakczh")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("6745 "),s("span",{staticClass:"username"},[t._v("im-here")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("6075 "),s("span",{staticClass:"username"},[t._v("DevinXian")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("5790 "),s("span",{staticClass:"username"},[t._v("chapgaga")])]),s("a",{staticClass:"top",attrs:{href:"#"}},[t._v("5345 "),s("span",{staticClass:"username"},[t._v("magicdawn")])])])]),s("li",{staticClass:"side community"},[s("img",{staticClass:"community-img",attrs:{src:"https://static2.cnodejs.org/public/images/ruby-china-20150529.png"}}),s("img",{staticClass:"community-img",attrs:{src:"https://static2.cnodejs.org/public/images/golangtc-logo.png"}}),s("img",{staticClass:"community-img",attrs:{src:"https://static2.cnodejs.org/public/images/phphub-logo.png"}}),s("img",{staticClass:"community-img",attrs:{src:"https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"}})]),s("li",{staticClass:"side qr-code"},[s("div",{staticClass:"title"},[t._v("\n      客户端二维码\n    ")]),s("div",{staticClass:"code-img"},[s("img",{attrs:{src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"}})]),s("p",{staticClass:"code-desc"},[t._v("客户端源码地址")])])])}],F={name:"Sidebar"},Q=F,q=(s("3c54"),Object(_["a"])(Q,D,A,!1,null,"1c0b1ae7",null)),G=q.exports,z={name:"Home",components:{HomeHeader:M,HomeSidebar:G,HomeFooter:N}},J=z,V=(s("249b"),Object(_["a"])(J,p,u,!1,null,"f4e7476a",null)),W=V.exports,X={name:"app",components:{Home:W}},Z=X,B=Object(_["a"])(Z,o,l,!1,null,null,null),U=B.exports,K=s("8c4f"),R=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home-content-outer"},[s("div",{staticClass:"home-content-inner"},[s("topic",{attrs:{topicList:t.topicList},on:{clickTab:t.clickTab}},[s("pagination",{ref:"select",on:{chickPage:t.chickPage}})],1)],1)])},Y=[],tt=s("cebc"),at=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"topic-nav"},t._l(t.tabList,function(a,e){return s("span",{key:e,staticClass:"topic-nav-item",class:{TopicNavItemActive:a===t.currentTab,hover:a!==t.currentTab,TopicNavItemNotActive:a!==t.currentTab},on:{click:function(s){return t.select(a)}}},[t._v(t._s(a))])}),0),s("ul",{staticClass:"topic-all"},t._l(t.topicList,function(a,e){return s("li",{key:e,staticClass:"topic-item"},[s("a",{staticClass:"user-avatar-box",attrs:{href:"https://cnodejs.org/user/"+a.author.loginname}},[s("img",{staticClass:"user-avatar",attrs:{src:a.author.avatar_url}})]),s("div",{staticClass:"topic-statistics"},[s("span",{staticClass:"reply-num"},[t._v(t._s(a.reply_count))]),s("span",{staticClass:"spacing"},[t._v("/")]),s("span",{staticClass:"watch-num"},[t._v(t._s(a.visit_count))])]),s("div",{staticClass:"topic-info"},["all"!=t.currentTabStr&&1!=a.good&&!a.top&&!a.good?t._e():s("span",{staticClass:"topic-type",class:{TopicTop:a.top||!0===a.good}},[t._v(t._s(1==a.top?"置顶":1==a.good?"精华":"share"==a.tab?"分享":"问答"))]),s("router-link",{staticClass:"topic-title",attrs:{to:"/"+a.id}},[t._v(t._s(a.title))])],1),s("a",{staticClass:"reply-user",attrs:{href:"#"}},[s("span",{staticClass:"comment-time"},[t._v(t._s(a.last_reply_at))])])])}),0),t._t("default")],2)},st=[],et={name:"Topic",props:{topicList:Array},data:function(){return{tabList:["全部","精华","分享","问答","招聘","客户端测试"],currentTab:"全部"}},computed:{currentTabStr:function(){return this.$store.state.params.tab}},methods:{select:function(t){switch(this.currentTab=t,t){case"全部":this.$emit("clickTab","all");break;case"精华":this.$emit("clickTab","good");break;case"分享":this.$emit("clickTab","share");break;case"问答":this.$emit("clickTab","ask");break;case"招聘":this.$emit("clickTab","job");break;case"客户端测试":this.$emit("clickTab","dev");break}}}},it=et,ct=(s("05ec"),Object(_["a"])(it,at,st,!1,null,"7394e9cc",null)),nt=ct.exports,rt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pageContainer"},[s("ul",{staticClass:"pageInner"},[s("li",{staticClass:"page prev"},[s("span",{on:{click:t.setMinCurrentPage}},[t._v("<<")])]),t._l(t.pageList,function(a,e){return s("li",{key:e,staticClass:"page"},[s("span",{class:{pageActive:a===t.childCurrentPage,disable:"string"===typeof a},attrs:{disable:"string"===typeof a},on:{click:function(s){return t.select(a)}}},[t._v(t._s(a))])])}),s("li",{staticClass:"page next"},[s("span",{on:{click:t.setMaxCurrentPage}},[t._v(">>")])])],2)])},ot=[],lt={name:"Pagination",data:function(){return{childCurrentPage:1}},methods:{select:function(t){t!==this.childCurrentPage&&"string"!==typeof t&&(this.childCurrentPage=t,this.$emit("chickPage",this.childCurrentPage))},setMinCurrentPage:function(){this.childCurrentPage=1,this.$emit("chickPage",this.childCurrentPage)},setMaxCurrentPage:function(){this.childCurrentPage=this.totalPages,this.$emit("chickPage",this.childCurrentPage)}},computed:{totalPages:function(){var t=this.$store.state.params.tab,a=0;switch(t){case"all":a=67;break;case"good":a=18;break;case"share":a=18;break;case"ask":a=18;break;case"job":a=18;break;case"dev":a=18;break;default:a=1;break}return a},pageList:function(){var t=this.childCurrentPage,a=this.totalPages;return t<4?[1,2,3,4,5,"..."]:t>=4&&t<a-2?["...",t-2,t-1,t,t+1,t+2,"..."]:t===a-2?["...",t-2,t-1,t,t+1,t+2]:t===a-1?["...",t-2,t-1,t,t+1]:["...",t-2,t-1,t]}}},pt=lt,ut=(s("bd0c"),Object(_["a"])(pt,rt,ot,!1,null,"8b64ac46",null)),ht=ut.exports,ft=s("2f62");s("ac6a");function dt(t){var a=Date.now(),s="";return t.forEach(function(t){var e=0;""!==s&&"boolean"===typeof s?e=!1===s?t.last_reply_at:t.create_at:t.last_reply_at?(s=!1,e=t.last_reply_at):(s=!0,e=t.create_at);var i=Date.parse(e);e=Math.ceil((a-i)/1e3/60),e<60?e+="分钟前":e>60&&(e=Math.floor((a-i)/1e3/3600),e<24?e+="小时前":e>=24&&e<744?e=Math.floor(e/24)+"天前":e>=744&&(e=Math.floor(e/24/30)+"个月前")),!1===s?t.last_reply_at=e:t.create_at=e}),t}function vt(t){var a="";a+=(a.indexOf("?")<0?"?":"&")+mt(t),window.history.pushState(null,null,a),document.documentElement.scrollTop=0}function mt(t){var a="";for(var s in t){var e=void 0!==t[s]?t[s]:"";a+="&".concat(s,"=").concat(encodeURIComponent(e))}return a?a.substring(1):""}var gt=s("bc3a"),_t={name:"homeContent",components:{Topic:nt,Pagination:ht},data:function(){return{topicList:[],params:{},topic:{}}},methods:Object(tt["a"])({handleTopicAxios:function(){this.params={tab:this.$store.state.params.tab,page:this.$store.state.params.page},vt(this.params),gt.get("https://cnodejs.org/api/v1/topics",{params:this.params}).then(this.getTopicInfo).catch(this.getError)},getTopicInfo:function(t){var a=t.data;!0===a.success&&(this.topicList=t.data.data)},getError:function(){console.log("没有发送请求")},chickPage:function(t){this.changePage(t),this.handleTopicAxios()},clickTab:function(t){this.changeTab(t),this.changePage(1),this.handleTopicAxios(),this.$refs.select.select(1)},passTopic:function(t){this.topic=t}},Object(ft["b"])(["changePage","changeTab"])),watch:{topicList:function(){dt(this.topicList)}},created:function(){this.handleTopicAxios()}},Ct=_t,bt=(s("4ae4"),Object(_["a"])(Ct,R,Y,!1,null,"23fb8606",null)),yt=bt.exports,jt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"topic-detail"},[s("div",{staticClass:"topic-header"},[s("div",{staticClass:"topic-title"},[s("span",{staticClass:"topic-type",class:{TopicTop:t.topic.top||!0===t.topic.good}},[t._v(t._s(t.tab))]),s("span",{staticClass:"title"},[t._v(t._s(t.topic.title))])]),s("div",{staticClass:"topic-info"},[s("li",{staticClass:"topic-create-time"},[t._v("发布于"+t._s(t.topic.create_at))]),s("li",{staticClass:"topic-author"},[t._v("作者 "+t._s(t.topic.author.loginname))]),s("li",{staticClass:"watch-count"},[t._v(t._s(t.topic.visit_count)+" 次浏览")]),s("li",{staticClass:"topic-source"},[t._v("来自 "+t._s(t.tab))])])]),s("div",{staticClass:"topic-content",domProps:{innerHTML:t._s(t.content)}})]),s("div",{staticClass:"topic-reply"},[s("div",{staticClass:"reply-count"},[t._v("\n      "+t._s(t.topic.replies.length)+"回复\n    ")]),t._l(t.topic.replies,function(a,e){return s("div",{key:a.id,staticClass:"reply-detail",class:{replyDetailHigh:e<3}},[s("div",{staticClass:"reply-info"},[s("img",{staticClass:"reply-img",attrs:{src:a.author.avatar_url}}),s("a",{staticClass:"reply-user-name",attrs:{href:"#"}},[t._v(t._s(a.author.loginname))]),s("a",{staticClass:"reply-time",attrs:{href:"#"}},[t._v(t._s(e+1)+"楼"),s("span",{staticClass:"cricle"}),t._v(t._s(a.create_at))])]),s("p",{staticClass:"reply-content",domProps:{innerHTML:t._s(a.content)}})])})],2)])},Tt=[];s("a481");function kt(t){var a=t,s=Date.now(),e=Date.parse(a);return a=Math.ceil((s-e)/1e3/60),a<60?a+="分钟前":a>60&&(a=Math.floor((s-e)/1e3/3600),a<24?a+="小时前":a>=24&&a<744?a=Math.floor(a/24)+"天前":a>=744&&(a=Math.floor(a/24/30)+"个月前")),a}var wt={name:"detailContext",data:function(){return{topicId:"",topic:{}}},methods:Object(tt["a"])({getTopic:function(){var t="https://cnodejs.org/api/v1/topic/"+this.topicId;c.a.get(t).then(this.getTopicContent)},getTopicContent:function(t){!0===t.data.success&&(this.topic=t.data.data)}},Object(ft["b"])(["setTopicId"])),computed:{tab:function(){return!0===this.topic.top?"置顶":!0===this.topic.good?"精华":"share"===this.topic.tab?"分享":"问答"},content:function(){var t=this.topic.content,a=/\n/g;return t.replace(a,"<br/>")}},watch:{topic:function(){this.topic.create_at=kt(this.topic.create_at),this.topic.replies=dt(this.topic.replies)}},created:function(){this.topicId=this.$route.params.id,this.getTopic()}},Pt=wt,xt=(s("44f5"),Object(_["a"])(Pt,jt,Tt,!1,null,"41dbe663",null)),$t=xt.exports;e["a"].use(K["a"]);var Ot=new K["a"]({base:"",routes:[{path:"/",name:"HomeContext",component:yt},{path:"/:id",name:"detailContext",component:$t}],scrollBehavior:function(t,a,s){return{x:0,y:0}}});s("4ee2"),s("e382"),s("3aff");e["a"].use(ft["a"]);var Mt=new ft["a"].Store({state:{params:{tab:"all",page:1},topic:{},topicId:""},mutations:{changeTab:function(t,a){t.params.tab=a},changePage:function(t,a){t.params.page=a},setTopicId:function(t,a){t.topicId=a},setTopic:function(t,a){t.topic=a}},actions:{changeTab:function(t,a){var s=t.commit;s("changeTab",a)},changePage:function(t,a){var s=t.commit;s("changePage",a)},setTopicId:function(t,a){var s=t.commit;s("setTopicId",a)},setTopic:function(t,a){var s=t.commit;s("setTopic",a)}}});e["a"].config.productionTip=!1,e["a"].set(Ot),new e["a"]({router:Ot,store:Mt,render:function(t){return t(U)}}).$mount("#app")},6015:function(t,a,s){},6257:function(t,a,s){"use strict";var e=s("1f53"),i=s.n(e);i.a},"84c2":function(t,a,s){},ae05:function(t,a,s){},bd0c:function(t,a,s){"use strict";var e=s("d121"),i=s.n(e);i.a},d121:function(t,a,s){},d245:function(t,a,s){},d9d8:function(t,a,s){"use strict";var e=s("ae05"),i=s.n(e);i.a},da6f:function(t,a,s){},ddd2:function(t,a,s){},e382:function(t,a,s){},e671:function(t,a,s){}});
//# sourceMappingURL=app.bc1154a7.js.map