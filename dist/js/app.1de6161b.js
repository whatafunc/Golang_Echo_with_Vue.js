(function(e){function t(t){for(var r,s,u=t[0],c=t[1],i=t[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2958:function(e,t,n){"use strict";n("b4b0")},4851:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s={name:"App"},u=s,c=(n("79fc"),n("2877")),i=Object(c["a"])(u,o,a,!1,null,null,null),l=i.exports,f=n("8c4f"),p=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.message))])])},d=[],h={name:"Home",data(){return{message:"Loading..."}},created(){fetch("/api/hello").then(e=>e.json()).then(e=>{this.message=e.message}).catch(e=>{this.message="Error loading message.",console.error("Error:",e)})}},m=h,v=(n("2958"),Object(c["a"])(m,p,d,!1,null,"070844a8",null)),b=v.exports,g=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.message))])])},_=[],y={name:"Health",data(){return{message:"Loading..."}},created(){fetch("/api/health").then(e=>e.json()).then(e=>{this.message=e.message}).catch(e=>{this.message="Error loading message.",console.error("Error:",e)})}},j=y,O=(n("cd88"),Object(c["a"])(j,g,_,!1,null,"07cf0cc4",null)),w=O.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"not-found"},[t("h1",[e._v("404 - Page Not Found")]),t("p",[e._v("The page you are looking for does not exist.")]),t("router-link",{attrs:{to:"/"}},[e._v("Go to Home")])],1)},P=[],S={name:"NotFound"},k=S,H=(n("ab89"),Object(c["a"])(k,x,P,!1,null,"40b15ad0",null)),E=H.exports;r["a"].use(f["a"]);const M=[{path:"/",name:"Home",component:b},{path:"/health",name:"Health",component:w},{path:"*",name:"NotFound",component:E}],T=new f["a"]({mode:"history",base:"/",routes:M});var F=T,N=n("2f62");r["a"].use(N["a"]);var J=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:F,store:J,render:e=>e(l)}).$mount("#app")},"5ea7":function(e,t,n){},"79fc":function(e,t,n){"use strict";n("5ea7")},ab89:function(e,t,n){"use strict";n("4851")},b4b0:function(e,t,n){},cd88:function(e,t,n){"use strict";n("d79e")},d79e:function(e,t,n){}});
//# sourceMappingURL=app.1de6161b.js.map