(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function _e(){return`
            <section class="flex flex-col sm:flex-row h-full justify-center sm:justify-between px-10 pt-50 sm:pt-0">
                <div id="home-text" class="flex flex-col gap-4 w-50 xl:w-120 justify-center -mt-25">
                    <h1 class="text-4xl xl:text-7xl font-bold">EXPLORE DREAM DESTINATION</h1>
                    <p class="text-lg">
                        It encourages exploration of unfamiliar territories, embracing diverse cultures and landscapes, 
                        while pursuing the desired destination that captivates the heart and ignites a sense of wonder.
                    </p>
                    <button type="button" id="exploreButton" class="px-2 py-1 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer w-40">
                        BOOK NOW
                    </button>
                </div>
                <div id="search-results" class="flex flex-col gap-5 pt-10 z-2 pb-10 sm:pb-0">
                </div>
            </section>
        `}function Le(e,t){return`
            <div class="flex gap-2 bg-gray-800/40 py-4 px-4 rounded-lg">
                <div>
                    <img src="${"/ibm-js-course-project/"+"/icons/person.svg"}" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-lg font-bold text-white">${e}</p>
                    <p class="text-sm text-gray-300">${e} is responsible for...</p>
                    <div class="py-2 px-5 bg-gray-600/70 rounded-lg text-center font-bold mt-2">${t}</div>
                </div>
            </div>
        `}function xe(){return`
            ${[{name:"John Doe",position:"CEO"},{name:"Celina Thomas",position:"Team Lead"},{name:"Mike Tysen",position:"Delivery Head"}].map(r=>`
            ${Le(r.name,r.position)} 
        `).join("")}
        `}function Ee(){return`
            <section class="flex flex-col h-full xl:justify-between px-10">
                <div id="about-header" class="flex flex-col gap-4 justify-center mt-5">
                    <h1 class="text-4xl xl:text-7xl font-bold">ABOUT US</h1>
                </div>
            
                <div id="about-text" class="flex flex-col vw-100 justify-center mt-5 xl:-mt-20 bg-gray-800/30 py-5 px-4 rounded-lg mr-10">
                    <p class="text-lg">
                        Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services/products to our customers.
                        Our mission is to <span class="font-bold">provide the best experience</span> for people traveling to different destinations around the world.
                    </p>
                    <p class="text-lg">
                        Our values include integrity, innovation, customer satisfaction, and teamwork. 
                        We believe in <span class="font-bold">putting our customers first</span> and <span class="">working together</span> to achieve our goals.
                    </p
                    <p class="text-lg">
                        Feel free to explore our website and learn more about what we offer!
                    </p>
                </div>

                <div id="our-team" class="flex flex-col xl:flex-row xl:gap-20 items-center justify-center mt-10 xl:mt-0  xl:mb-30">
                    <div id="team-title">
                        <h1 class="text-3xl xl:text-6xl font-bold">Our Team</h1>
                    </div>
                    <div class="flex flex-col xl:flex-row gap-5 py-3 px-4">
                        ${xe()}
                    </div>
                </div>
            </section>
        `}function Oe(){return`
            <section class="flex flex-col xl:flex-row h-full justify-between px-10 ">
                <div id="contact-text" class="flex flex-col gap-4 xl:w-150 justify-center xl:-mt-25">
                    <h1 class="text-4xl xl:text-7xl font-bold">CONTACT US</h1>
                    <p class="text-lg">Get in touch</p>
                </div>
                <div id="contact-form" class="flex items-center justify-center">
                    <form action="" method="POST" class="flex flex-col gap-4 bg-gray-800/30 py-3 px-4 rounded-lg w-[100%] xl:w-[40vw]">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg">

                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg">

                        <label for="message">Message</label>
                        <textarea name="message" rows="5" placeholder="Enter your message" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg resize-none"></textarea>
                        <button id="submitButton" type="submit" onclick="event.preventDefault()" class="px-2 py-1 bg-gray-200/10 rounded-lg hover:bg-gray-200/20 cursor-pointer">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        `}function Ae(){return`
            <ul class="flex font-bold text-md xl:text-xl gap-8">
                ${[{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Contact Us",path:"/contact"}].map(r=>`
            <li>
                <a href="${r.path}" data-navigo class="hover:text-red-600 active:text-red-600">${r.name}</a>
            </li>
        `).join("")}
            </ul>
        `}function Re(){return`
            <ul class="flex flex-col gap-4 items-center">
                ${[{title:"Facebook",path:"https://facebook.com",icon:`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="2rem">
                    <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 
                    4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/>
                    </svg>
                `},{title:"Instagram",path:"https://instagram.com",icon:`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="2rem">
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 
                    0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/>
                    </svg>
                `},{title:"GitHub",path:"https://github.com/Molnar-Zoltan/",icon:`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="2rem">
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 
                    0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 
                    0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 
                    208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 
                    15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                    </svg>
                `}].map(a=>`
            <li>
                <a href="${a.path}" class="hover:text-gray-400 active:text-gray-400" title="${a.title}">
                    ${a.icon}
                </a>
            </li>
        `).join("")}
            </ul>
        `}const Q=["countries","beaches","temples"];function Se(){return`
            <div class="flex items-center justify-center w-80">
                <form id="searchForm" class="flex items-center bg-gray-800/30 rounded-lg px-4 py-2">
                    <input list="destinations" id="searchInput" placeholder="Enter a destination..." maxlength="10" 
                        class="text-white placeholder-gray-400 outline-none text-sm" />

                    <datalist id="destinations">
                        ${Q.map(t=>`<option value="${t.charAt(0).toUpperCase()+t.slice(1)}">`).join("")}
                    </datalist>

                    <button type="submit" id="searchButton" class="text-sm px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Search
                    </button>

                    <button type="button" id="clearButton" class="text-sm ml-2 px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Clear
                    </button>
                </form>
            </div>
        `}var Pe=/([:*])(\w+)/g,ke="([^/]+)",Ce=/\*/g,He="?(?:.*)",Te=/\/\?/g,je="/?([^/]+|)",Ie="(?:/^|^)",Be="";function J(e){return e===void 0&&(e="/"),I()?location.pathname+location.search+location.hash:e}function d(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function O(e){return typeof e=="string"}function Fe(e){return typeof e=="function"}function A(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Me(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(r,a,i){return r===null&&(r={}),r[t[i]]=decodeURIComponent(a),r},null)}function R(e){var t=d(e).split(/\?(.*)?$/);return[d(t[0]),t.slice(1).join("")]}function j(e){for(var t={},r=e.split("&"),a=0;a<r.length;a++){var i=r[a].split("=");if(i[0]!==""){var o=decodeURIComponent(i[0]);t[o]?(Array.isArray(t[o])||(t[o]=[t[o]]),t[o].push(decodeURIComponent(i[1]||""))):t[o]=decodeURIComponent(i[1]||"")}}return t}function Y(e,t){var r=R(d(e.currentLocationPath)),a=r[0],i=r[1],o=i===""?null:j(i),u=[],h;if(O(t.path)){if(h=Ie+d(t.path).replace(Pe,function(w,y,_){return u.push(_),ke}).replace(Ce,He).replace(Te,je)+"$",d(t.path)===""&&d(a)==="")return{url:a,queryString:i,hashString:A(e.to),route:t,data:null,params:o}}else h=t.path;var v=new RegExp(h,Be),p=a.match(v);if(p){var L=O(t.path)?Me(p,u):p.groups?p.groups:p.slice(1);return{url:d(a.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:A(e.to),route:t,data:L,params:o}}return!1}function Z(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function b(e,t){return typeof e[t]>"u"||e[t]===!0}function Ue(e){if(!e)return{};var t=e.split(","),r={},a;return t.forEach(function(i){var o=i.split(":").map(function(u){return u.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":r.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=o[1];break;case"resolveOptionsHash":a||(a={}),a.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":r[o[0]]=o[1]==="true";break}}),a&&(r.resolveOptions=a),r}function I(){return typeof window<"u"}function Ne(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(r){return r}).forEach(function(r){["before","after","already","leave"].forEach(function(a){r[a]&&(t[a]||(t[a]=[]),t[a].push(r[a]))})}),t}function m(e,t,r){var a=t||{},i=0;(function o(){if(!e[i]){r&&r(a);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](a)?e[i][1]:e[i][2])),o()):e[i](a,function(u){typeof u>"u"||u===!0?(i+=1,o()):r&&r(a)})})()}m.if=function(e,t,r){return Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]),[e,t,r]};function z(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=J(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function S(e,t){for(var r=0;r<e.instance.routes.length;r++){var a=e.instance.routes[r],i=Y(e,a);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){t();return}}t()}function $e(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function ze(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var D=I(),De=Z();function Ge(e,t){if(b(e.navigateOptions,"updateBrowserURL")){var r=("/"+e.to).replace(/\/\//g,"/"),a=D&&e.resolveOptions&&e.resolveOptions.hash===!0;De?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",a?"#"+r:r),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!a){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):D&&(window.location.href=e.to)}t()}function ee(e,t){var r=e.instance;if(!r.lastResolved()){t();return}m(r.lastResolved().map(function(a){return function(i,o){if(!a.route.hooks||!a.route.hooks.leave){o();return}var u=!1,h=e.instance.matchLocation(a.route.path,e.currentLocationPath,!1);if(a.route.path!=="*")u=!h;else{var v=e.matches?e.matches.find(function(p){return a.route.path===p.route.path}):!1;u=!v}if(b(e.navigateOptions,"callHooks")&&u){m(a.route.hooks.leave.map(function(p){return function(L,w){return p(function(y){y===!1?e.instance.__markAsClean(e):w()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return t()})}function qe(e,t){e.match.route.hooks&&e.match.route.hooks.before&&b(e.navigateOptions,"callHooks")?m(e.match.route.hooks.before.map(function(r){return function(i,o){return r(function(u){u===!1?e.instance.__markAsClean(e):o()},e.match)}}).concat([function(){return t()}])):t()}function We(e,t){b(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function Ve(e,t){e.match.route.hooks&&e.match.route.hooks.after&&b(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(r){return r(e.match)}),t()}function Xe(e,t){var r=e.instance.lastResolved();if(r&&r[0]&&r[0].route===e.match.route&&r[0].url===e.match.url&&r[0].queryString===e.match.queryString){r.forEach(function(a){a.route.hooks&&a.route.hooks.already&&b(e.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(i){return i(e.match)})}),t(!1);return}t()}function Ke(e,t){var r=e.instance._notFoundRoute;if(r){e.notFoundHandled=!0;var a=R(e.currentLocationPath),i=a[0],o=a[1],u=A(e.to);r.path=d(i);var h={url:r.path,queryString:o,hashString:u,data:null,route:r,params:o!==""?j(o):null};e.matches=[h],e.match=h}t()}function Qe(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Je(e,t){e.instance._setCurrent(null),t()}function te(e,t){b(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var ne=[Xe,qe,We,Ve],G=[ee,Ke,m.if(function(e){var t=e.notFoundHandled;return t},ne.concat([te]),[Qe,Je])];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}function q(e,t){var r=0;function a(){if(r===e.matches.length){te(e,t);return}m(ne,C({},e,{match:e.matches[r]}),function(){r+=1,a()})}ee(e,a)}function P(e){e.instance.__markAsClean(e)}function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},H.apply(this,arguments)}var W="[data-navigo]";function Ye(e,t){var r=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:W},a=this,i="/",o=null,u=[],h=!1,v,p=Z(),L=I();e?i=d(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function w(n){return n.indexOf("#")>=0&&(r.hash===!0?n=n.split("#")[1]||"/":n=n.split("#")[0]),n}function y(n){return d(i+"/"+d(n))}function _(n,s,c,f){return n=O(n)?y(n):n,{name:f||d(String(n)),path:n,handler:s,hooks:Ne(c)}}function ae(n,s,c){var f=this;return typeof n=="object"&&!(n instanceof RegExp)?(Object.keys(n).forEach(function(l){if(typeof n[l]=="function")f.on(l,n[l]);else{var g=n[l],x=g.uses,be=g.as,we=g.hooks;u.push(_(l,x,[v,we],be))}}),this):(typeof n=="function"&&(c=s,s=n,n=i),u.push(_(n,s,[v,c])),this)}function B(n,s){if(a.__dirty){a.__waiting.push(function(){return a.resolve(n,s)});return}else a.__dirty=!0;n=n?d(i)+"/"+d(n):void 0;var c={instance:a,to:n,currentLocationPath:n,navigateOptions:{},resolveOptions:H({},r,s)};return m([z,S,m.if(function(f){var l=f.matches;return l&&l.length>0},q,G)],c,P),c.matches?c.matches:!1}function F(n,s){if(a.__dirty){a.__waiting.push(function(){return a.navigate(n,s)});return}else a.__dirty=!0;n=d(i)+"/"+d(n);var c={instance:a,to:n,navigateOptions:s||{},resolveOptions:s&&s.resolveOptions?s.resolveOptions:r,currentLocationPath:w(n)};m([$e,ze,S,m.if(function(f){var l=f.matches;return l&&l.length>0},q,G),Ge,P],c,P)}function ie(n,s,c){var f=U(n,s);return f!==null?(F(f.replace(new RegExp("^/?"+i),""),c),!0):!1}function se(n){return this.routes=u=u.filter(function(s){return O(n)?d(s.path)!==d(n):Fe(n)?n!==s.handler:String(s.path)!==String(n)}),this}function oe(){p&&(this.__popstateListener=function(){a.__freezeListening||B()},window.addEventListener("popstate",this.__popstateListener))}function ce(){this.routes=u=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=h=!0}function le(n,s){return a._notFoundRoute=_("*",n,[v,s],"__NOT_FOUND__"),this}function M(){if(L)return ue().forEach(function(n){if(n.getAttribute("data-navigo")==="false"||n.getAttribute("target")==="_blank"){n.hasListenerAttached&&n.removeEventListener("click",n.navigoHandler);return}n.hasListenerAttached||(n.hasListenerAttached=!0,n.navigoHandler=function(s){if((s.ctrlKey||s.metaKey)&&s.target.tagName.toLowerCase()==="a")return!1;var c=n.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var f=new URL(c);c=f.pathname+f.search}catch{}var l=Ue(n.getAttribute("data-navigo-options"));h||(s.preventDefault(),s.stopPropagation(),a.navigate(d(c),l))},n.addEventListener("click",n.navigoHandler))}),a}function ue(){return L?[].slice.call(document.querySelectorAll(r.linksSelector||W)):[]}function fe(n){return"/"+i+"/"+d(n)}function de(n){return v=n,this}function he(){return o}function U(n,s,c){var f=u.find(function(x){return x.name===n}),l=null;if(f){if(l=f.path,s)for(var g in s)l=l.replace(":"+g,s[g]);l=l.match(/^\//)?l:"/"+l}return l&&c&&!c.includeRoot&&(l=l.replace(new RegExp("^/"+i),"")),l}function pe(n){return n.getAttribute("href")}function N(n){var s=R(d(n)),c=s[0],f=s[1],l=f===""?null:j(f),g=A(n),x=_(c,function(){},[v],c);return{url:c,queryString:f,hashString:g,route:x,data:null,params:l}}function ge(){return N(d(J(i)).replace(new RegExp("^"+i),""))}function me(n){var s={instance:a,currentLocationPath:n,to:n,resolveOptions:r};return S(s,function(){}),s.matches?s.matches:!1}function ve(n,s,c){typeof s<"u"&&(typeof c>"u"||c)&&(s=y(s));var f={instance:a,to:s,currentLocationPath:s};z(f,function(){}),typeof n=="string"&&(n=typeof c>"u"||c?y(n):n);var l=Y(f,{name:String(n),path:n,handler:function(){},hooks:{}});return l||!1}function E(n,s,c){return typeof s=="string"&&(s=$(s)),s?(s.hooks[n]||(s.hooks[n]=[]),s.hooks[n].push(c),function(){s.hooks[n]=s.hooks[n].filter(function(f){return f!==c})}):(console.warn("Route doesn't exists: "+s),function(){})}function $(n){return typeof n=="string"?u.find(function(s){return s.name===y(n)}):u.find(function(s){return s.handler===n})}function ye(n){n.instance.__dirty=!1,n.instance.__waiting.length>0&&n.instance.__waiting.shift()()}this.root=i,this.routes=u,this.destroyed=h,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ye,this.on=ae,this.off=se,this.resolve=B,this.navigate=F,this.navigateByName=ie,this.destroy=ce,this.notFound=le,this.updatePageLinks=M,this.link=fe,this.hooks=de,this.extractGETParameters=function(n){return R(w(n))},this.lastResolved=he,this.generate=U,this.getLinkPath=pe,this.match=me,this.matchLocation=ve,this.getCurrentLocation=ge,this.addBeforeHook=E.bind(this,"before"),this.addAfterHook=E.bind(this,"after"),this.addAlreadyHook=E.bind(this,"already"),this.addLeaveHook=E.bind(this,"leave"),this.getRoute=$,this._pathToMatchObject=N,this._clean=d,this._checkForAHash=w,this._setCurrent=function(n){return o=a.current=n},oe.call(this),M.call(this)}async function Ze(){try{const r=await fetch("/ibm-js-course-project/"+"/data/travel_recommendation_api.json");if(!r.ok)throw new Error("Network response was not ok.");return await r.json()}catch(e){return console.error("Error fetching destinations:",e),null}}function V(e,t,r){return`
        <div class="w-80 bg-gray-700/60 rounded-lg p-4 flex flex-col items-center">
            <div class="w-full h-48 bg-cover bg-center rounded-lg mb-4">
                <img src="${"/ibm-js-course-project/"+t}" alt="${e}" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="font-bold text-xl text-center">${e}</h3>
                <p class="destination-description">${r}</p>
            </div>
            <button class="mt-2 px-4 py-2 bg-gray-600/80 rounded-lg hover:bg-gray-600/90 active:bg-gray-600/90 cursor-pointer font-semibold">
                Visit
            </button>
            
        </div>
    `}async function et(e){const t=await Ze();if(!t)return;let r="";if(e==="countries"){const a=t[e].length,i=Math.floor(Math.random()*a);r=t[e][i].cities.map(o=>V(o.name,o.imageUrl,o.description)).join("")}else r=t[e].map(a=>V(a.name,a.imageUrl,a.description)).join("");document.getElementById("search-results").innerHTML=r}const tt=document.getElementById("root"),nt=document.getElementById("navbar"),rt=document.getElementById("sidebar"),T=document.getElementById("searchbar");T.innerHTML=Se();nt.innerHTML=Ae();rt.innerHTML=Re();const at="/ibm-js-course-project/",re=new Ye(at);re.on({"/":e=>{k(_e(),e.url)},"/about":e=>{k(Ee(),e.url)},"/contact":e=>{k(Oe(),e.url)}}).resolve();re.updatePageLinks();function k(e,t){tt.innerHTML=e,t!==""?T.firstElementChild.classList.add("hidden"):T.firstElementChild.classList.remove("hidden")}const X=document.getElementById("searchForm");X&&X.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("searchInput").value.toLowerCase().trim();if(!t)return;let r="";Q.some(i=>(r=i.toLowerCase(),t==="country"&&(t=t.slice(0,-1)),r.startsWith(t)))?et(r):document.getElementById("search-results").innerHTML=`
            <div class="text-center text-gray-100 bg-gray-500/30 rounded-lg p-6">
                <p class="text-lg">No results found.</p>
                <p class="text-sm">Please try a different search category.</p>
            </div>
        `});const K=document.getElementById("clearButton");K&&K.addEventListener("click",function(){document.getElementById("searchInput").value=""});
