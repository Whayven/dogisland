(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-efa09a76":"791f9013"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-efa09a76":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-efa09a76":"fdefe5ca"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("div",{staticClass:"wrapper"},[n("router-view")],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticStyle:{"text-align":"center"}},[n("small",[e._v("\n      Copyright©\n      "),n("i",[e._v("Foster")])])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=(n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("div",{staticClass:"banner-container"},[n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[e._v("\n        Home\n        ")]),n("router-link",{staticClass:"link",attrs:{to:"/popular"}},[e._v("\n        Popular\n        ")]),e.user?n("button",{staticClass:"link",on:{click:e.logout}},[e._v("\n        Logout\n        ")]):n("button",{staticClass:"link",on:{click:e.login}},[e._v("\n        Login\n        ")])],1),n("h1",{staticClass:"banner"},[e._v("Dog Island")])])])])},u=[],l=n("2f62");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"Navigation",methods:f({},Object(l["b"])(["fetchUser","logout"]),{login:function(){this.$auth.loginRedirect()}}),computed:f({},Object(l["c"])(["user"]))},h=d,m=(n("acbe"),n("2877")),g=Object(m["a"])(h,s,u,!1,null,"ffb61bec",null),v=g.exports;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"App",components:{Navigation:v},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUser();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),watch:{$route:"onRouteChange"},methods:y({},Object(l["b"])(["fetchUser"]),{onRouteChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUser();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},O=w,j=(n("034f"),Object(m["a"])(O,a,o,!1,null,null,null)),_=j.exports,k=n("8c4f"),C=n("bc79"),x=n.n(C),P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"wrapper"},[n("h3",{staticClass:"header colorful"},[e._v("Welcome to Dog Island")]),n("div",{staticClass:"card"},[n("span",[e._v("Dog Island has just gone through a massive overhaul, from the web design to the server-side code running on the back end. A lot of changes have been made to make this website an awesome experience, and I will continue to put my best foot forward when it comes to developing this experience.")])])]),n("h3",{staticClass:"title"},[e._v("The Goal")]),n("div",{staticClass:"card"},[n("span",[e._v("You must be wondering, what is this all about? Dog Island is simply a pet appreciation project design for you guys to see cool pictures of dogs and maybe get some cool stuff out of it. My current plans include:\n      "),n("ul",[n("li",[e._v("Dog gallery")]),n("li",[e._v("Hall of fame for dog the day winners")]),n("li",[e._v("...and more!")])])])]),n("h3",{staticClass:"title"},[e._v("Popular dogs")]),n("ol",[n("li",[e._v("Labrador Retriver")]),n("li",[e._v("Husky")]),n("li",[e._v("German Shephard")])]),n("h3",{staticClass:"title"},[e._v("Why get a dog?")]),n("p",[e._v("\n    Dogs are\n    "),n("b",[e._v("amazing")]),e._v(" companions. The real question is, why don't you have a dog?\n  ")])])}],R={name:"Home"},E=R,S=(n("cccb"),Object(m["a"])(E,P,D,!1,null,null,null)),$=S.exports;r["a"].use(x.a,{issuer:"https://dev-492717.okta.com/oauth2/default",client_id:"0oa1d67frxty99puM357",redirect_uri:"https://dog-island.social/implicit/callback",scope:"openid profile email",pkce:!0}),r["a"].use(k["a"]);var U=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/popular",name:"popular",component:function(){return n.e("chunk-efa09a76").then(n.bind(null,"5b75"))}},{path:"/implicit/callback",component:x.a.handleCallback()}]});U.beforeEach(r["a"].prototype.$auth.authRedirectGuard());var T=U,I=(n("28a5"),n("6762"),n("2fdb"),n("bc3a")),L=n.n(I),A="/api/dogs",N="https://dog.ceo/api/breed",M={dogs:[],candidates:[],image:"",voted:!1},H={allDogs:function(e){return e.dogs},allCandidates:function(e){return e.candidates},image:function(e){return e.image},voted:function(e){return e.voted}},q={fetchDogs:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,L.a.get(A);case 3:r=e.sent,n("setDogs",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fetchCandidates:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,L.a.get("".concat(A,"/candidates"));case 3:r=e.sent,n("setCandidates",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fetchImage:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=n.toLowerCase(),n.includes(" ")&&(n=n.split(" ").reverse().join("/")),e.next=5,L.a.get("".concat(N,"/").concat(n,"/images/random"));case 5:a=e.sent,r("setImage",a.data.message);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),updateDog:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,L.a.put("".concat(A,"/").concat(n._id));case 3:r("setVote");case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},B={setDogs:function(e,t){return e.dogs=t},setCandidates:function(e,t){return e.candidates=t},setImage:function(e,t){return e.image=t},setVote:function(e){return e.voted=!0}},G={state:M,getters:H,actions:q,mutations:B},F=n("4be7"),J={user:null},V={user:function(e){return e.user}},W={fetchUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,this._vm.$auth.getUser();case 3:r=e.sent,n("setUser",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,this._vm.$auth.logout();case 3:return e.next=5,this._vm.$auth.getUser();case 5:r=e.sent,T.push("/").catch((function(e){Object(F["reject"])(e)})),n("setUser",r);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},z={setUser:function(e,t){return e.user=t}},K={state:J,getters:V,actions:W,mutations:z};r["a"].use(l["a"]);var Y=new l["a"].Store({modules:{dogs:G,users:K}});r["a"].config.productionTip=!1,new r["a"]({store:Y,router:T,render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,n){},acbe:function(e,t,n){"use strict";var r=n("c55b"),a=n.n(r);a.a},c55b:function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(e,t,n){}});
//# sourceMappingURL=app.5ffb7bc3.js.map