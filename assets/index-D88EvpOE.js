(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function we(){return`
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
        `}function _e(e,t){return`
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
        `}function Le(){return`
            ${[{name:"John Doe",position:"CEO"},{name:"Celina Thomas",position:"Team Lead"},{name:"Mike Tysen",position:"Delivery Head"}].map(r=>`
            ${_e(r.name,r.position)} 
        `).join("")}
        `}function xe(){return`
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
                        ${Le()}
                    </div>
                </div>
            </section>
        `}function Ee(){return`
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
        `}function Oe(){return`
            <ul class="flex font-bold text-md xl:text-xl gap-8">
                ${[{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Contact Us",path:"/contact"}].map(r=>`
            <li>
                <a href="${r.path}" data-navigo class="hover:text-red-600 active:text-red-600">${r.name}</a>
            </li>
        `).join("")}
            </ul>
        `}function Ae(){return`
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
        `}const K=["countries","beaches","temples"];function Re(){return`
            <div class="flex items-center justify-center w-80">
                <form id="searchForm" class="flex items-center bg-gray-800/30 rounded-lg px-4 py-2">
                    <input list="destinations" id="searchInput" placeholder="Enter a destination..." maxlength="10" 
                        class="text-white placeholder-gray-400 outline-none text-sm" />

                    <datalist id="destinations">
                        ${K.map(t=>`<option value="${t.charAt(0).toUpperCase()+t.slice(1)}">`).join("")}
                    </datalist>

                    <button type="submit" id="searchButton" class="text-sm px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Search
                    </button>

                    <button type="button" id="clearButton" class="text-sm ml-2 px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700/90 active:bg-gray-700/90 cursor-pointer font-semibold">
                        Clear
                    </button>
                </form>
            </div>
        `}var Se=/([:*])(\w+)/g,Pe="([^/]+)",ke=/\*/g,Ce="?(?:.*)",He=/\/\?/g,Te="/?([^/]+|)",je="(?:/^|^)",Ie="";function Q(e){return e===void 0&&(e="/"),j()?location.pathname+location.search+location.hash:e}function d(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function O(e){return typeof e=="string"}function Be(e){return typeof e=="function"}function A(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Fe(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(r,a,i){return r===null&&(r={}),r[t[i]]=decodeURIComponent(a),r},null)}function R(e){var t=d(e).split(/\?(.*)?$/);return[d(t[0]),t.slice(1).join("")]}function T(e){for(var t={},r=e.split("&"),a=0;a<r.length;a++){var i=r[a].split("=");if(i[0]!==""){var s=decodeURIComponent(i[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(i[1]||""))):t[s]=decodeURIComponent(i[1]||"")}}return t}function J(e,t){var r=R(d(e.currentLocationPath)),a=r[0],i=r[1],s=i===""?null:T(i),u=[],h;if(O(t.path)){if(h=je+d(t.path).replace(Se,function(w,y,_){return u.push(_),Pe}).replace(ke,Ce).replace(He,Te)+"$",d(t.path)===""&&d(a)==="")return{url:a,queryString:i,hashString:A(e.to),route:t,data:null,params:s}}else h=t.path;var v=new RegExp(h,Ie),p=a.match(v);if(p){var L=O(t.path)?Fe(p,u):p.groups?p.groups:p.slice(1);return{url:d(a.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:A(e.to),route:t,data:L,params:s}}return!1}function Y(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function b(e,t){return typeof e[t]>"u"||e[t]===!0}function Me(e){if(!e)return{};var t=e.split(","),r={},a;return t.forEach(function(i){var s=i.split(":").map(function(u){return u.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":r.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=s[1];break;case"resolveOptionsHash":a||(a={}),a.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":r[s[0]]=s[1]==="true";break}}),a&&(r.resolveOptions=a),r}function j(){return typeof window<"u"}function Ue(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(r){return r}).forEach(function(r){["before","after","already","leave"].forEach(function(a){r[a]&&(t[a]||(t[a]=[]),t[a].push(r[a]))})}),t}function m(e,t,r){var a=t||{},i=0;(function s(){if(!e[i]){r&&r(a);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](a)?e[i][1]:e[i][2])),s()):e[i](a,function(u){typeof u>"u"||u===!0?(i+=1,s()):r&&r(a)})})()}m.if=function(e,t,r){return Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]),[e,t,r]};function $(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=Q(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function S(e,t){for(var r=0;r<e.instance.routes.length;r++){var a=e.instance.routes[r],i=J(e,a);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Ne(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function $e(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var z=j(),ze=Y();function De(e,t){if(b(e.navigateOptions,"updateBrowserURL")){var r=("/"+e.to).replace(/\/\//g,"/"),a=z&&e.resolveOptions&&e.resolveOptions.hash===!0;ze?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",a?"#"+r:r),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!a){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):z&&(window.location.href=e.to)}t()}function Z(e,t){var r=e.instance;if(!r.lastResolved()){t();return}m(r.lastResolved().map(function(a){return function(i,s){if(!a.route.hooks||!a.route.hooks.leave){s();return}var u=!1,h=e.instance.matchLocation(a.route.path,e.currentLocationPath,!1);if(a.route.path!=="*")u=!h;else{var v=e.matches?e.matches.find(function(p){return a.route.path===p.route.path}):!1;u=!v}if(b(e.navigateOptions,"callHooks")&&u){m(a.route.hooks.leave.map(function(p){return function(L,w){return p(function(y){y===!1?e.instance.__markAsClean(e):w()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function Ge(e,t){e.match.route.hooks&&e.match.route.hooks.before&&b(e.navigateOptions,"callHooks")?m(e.match.route.hooks.before.map(function(r){return function(i,s){return r(function(u){u===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function qe(e,t){b(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function We(e,t){e.match.route.hooks&&e.match.route.hooks.after&&b(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(r){return r(e.match)}),t()}function Ve(e,t){var r=e.instance.lastResolved();if(r&&r[0]&&r[0].route===e.match.route&&r[0].url===e.match.url&&r[0].queryString===e.match.queryString){r.forEach(function(a){a.route.hooks&&a.route.hooks.already&&b(e.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(i){return i(e.match)})}),t(!1);return}t()}function Xe(e,t){var r=e.instance._notFoundRoute;if(r){e.notFoundHandled=!0;var a=R(e.currentLocationPath),i=a[0],s=a[1],u=A(e.to);r.path=d(i);var h={url:r.path,queryString:s,hashString:u,data:null,route:r,params:s!==""?T(s):null};e.matches=[h],e.match=h}t()}function Ke(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Qe(e,t){e.instance._setCurrent(null),t()}function ee(e,t){b(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var te=[Ve,Ge,qe,We],D=[Z,Xe,m.if(function(e){var t=e.notFoundHandled;return t},te.concat([ee]),[Ke,Qe])];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}function G(e,t){var r=0;function a(){if(r===e.matches.length){ee(e,t);return}m(te,C({},e,{match:e.matches[r]}),function(){r+=1,a()})}Z(e,a)}function P(e){e.instance.__markAsClean(e)}function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},H.apply(this,arguments)}var q="[data-navigo]";function Je(e,t){var r=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:q},a=this,i="/",s=null,u=[],h=!1,v,p=Y(),L=j();e?i=d(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function w(n){return n.indexOf("#")>=0&&(r.hash===!0?n=n.split("#")[1]||"/":n=n.split("#")[0]),n}function y(n){return d(i+"/"+d(n))}function _(n,o,c,f){return n=O(n)?y(n):n,{name:f||d(String(n)),path:n,handler:o,hooks:Ue(c)}}function re(n,o,c){var f=this;return typeof n=="object"&&!(n instanceof RegExp)?(Object.keys(n).forEach(function(l){if(typeof n[l]=="function")f.on(l,n[l]);else{var g=n[l],x=g.uses,ye=g.as,be=g.hooks;u.push(_(l,x,[v,be],ye))}}),this):(typeof n=="function"&&(c=o,o=n,n=i),u.push(_(n,o,[v,c])),this)}function I(n,o){if(a.__dirty){a.__waiting.push(function(){return a.resolve(n,o)});return}else a.__dirty=!0;n=n?d(i)+"/"+d(n):void 0;var c={instance:a,to:n,currentLocationPath:n,navigateOptions:{},resolveOptions:H({},r,o)};return m([$,S,m.if(function(f){var l=f.matches;return l&&l.length>0},G,D)],c,P),c.matches?c.matches:!1}function B(n,o){if(a.__dirty){a.__waiting.push(function(){return a.navigate(n,o)});return}else a.__dirty=!0;n=d(i)+"/"+d(n);var c={instance:a,to:n,navigateOptions:o||{},resolveOptions:o&&o.resolveOptions?o.resolveOptions:r,currentLocationPath:w(n)};m([Ne,$e,S,m.if(function(f){var l=f.matches;return l&&l.length>0},G,D),De,P],c,P)}function ae(n,o,c){var f=M(n,o);return f!==null?(B(f.replace(new RegExp("^/?"+i),""),c),!0):!1}function ie(n){return this.routes=u=u.filter(function(o){return O(n)?d(o.path)!==d(n):Be(n)?n!==o.handler:String(o.path)!==String(n)}),this}function oe(){p&&(this.__popstateListener=function(){a.__freezeListening||I()},window.addEventListener("popstate",this.__popstateListener))}function se(){this.routes=u=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=h=!0}function ce(n,o){return a._notFoundRoute=_("*",n,[v,o],"__NOT_FOUND__"),this}function F(){if(L)return le().forEach(function(n){if(n.getAttribute("data-navigo")==="false"||n.getAttribute("target")==="_blank"){n.hasListenerAttached&&n.removeEventListener("click",n.navigoHandler);return}n.hasListenerAttached||(n.hasListenerAttached=!0,n.navigoHandler=function(o){if((o.ctrlKey||o.metaKey)&&o.target.tagName.toLowerCase()==="a")return!1;var c=n.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var f=new URL(c);c=f.pathname+f.search}catch{}var l=Me(n.getAttribute("data-navigo-options"));h||(o.preventDefault(),o.stopPropagation(),a.navigate(d(c),l))},n.addEventListener("click",n.navigoHandler))}),a}function le(){return L?[].slice.call(document.querySelectorAll(r.linksSelector||q)):[]}function ue(n){return"/"+i+"/"+d(n)}function fe(n){return v=n,this}function de(){return s}function M(n,o,c){var f=u.find(function(x){return x.name===n}),l=null;if(f){if(l=f.path,o)for(var g in o)l=l.replace(":"+g,o[g]);l=l.match(/^\//)?l:"/"+l}return l&&c&&!c.includeRoot&&(l=l.replace(new RegExp("^/"+i),"")),l}function he(n){return n.getAttribute("href")}function U(n){var o=R(d(n)),c=o[0],f=o[1],l=f===""?null:T(f),g=A(n),x=_(c,function(){},[v],c);return{url:c,queryString:f,hashString:g,route:x,data:null,params:l}}function pe(){return U(d(Q(i)).replace(new RegExp("^"+i),""))}function ge(n){var o={instance:a,currentLocationPath:n,to:n,resolveOptions:r};return S(o,function(){}),o.matches?o.matches:!1}function me(n,o,c){typeof o<"u"&&(typeof c>"u"||c)&&(o=y(o));var f={instance:a,to:o,currentLocationPath:o};$(f,function(){}),typeof n=="string"&&(n=typeof c>"u"||c?y(n):n);var l=J(f,{name:String(n),path:n,handler:function(){},hooks:{}});return l||!1}function E(n,o,c){return typeof o=="string"&&(o=N(o)),o?(o.hooks[n]||(o.hooks[n]=[]),o.hooks[n].push(c),function(){o.hooks[n]=o.hooks[n].filter(function(f){return f!==c})}):(console.warn("Route doesn't exists: "+o),function(){})}function N(n){return typeof n=="string"?u.find(function(o){return o.name===y(n)}):u.find(function(o){return o.handler===n})}function ve(n){n.instance.__dirty=!1,n.instance.__waiting.length>0&&n.instance.__waiting.shift()()}this.root=i,this.routes=u,this.destroyed=h,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ve,this.on=re,this.off=ie,this.resolve=I,this.navigate=B,this.navigateByName=ae,this.destroy=se,this.notFound=ce,this.updatePageLinks=F,this.link=ue,this.hooks=fe,this.extractGETParameters=function(n){return R(w(n))},this.lastResolved=de,this.generate=M,this.getLinkPath=he,this.match=ge,this.matchLocation=me,this.getCurrentLocation=pe,this.addBeforeHook=E.bind(this,"before"),this.addAfterHook=E.bind(this,"after"),this.addAlreadyHook=E.bind(this,"already"),this.addLeaveHook=E.bind(this,"leave"),this.getRoute=N,this._pathToMatchObject=U,this._clean=d,this._checkForAHash=w,this._setCurrent=function(n){return s=a.current=n},oe.call(this),F.call(this)}async function Ye(){try{const r=await fetch("/ibm-js-course-project/"+"/data/travel_recommendation_api.json");if(!r.ok)throw new Error("Network response was not ok.");return await r.json()}catch(e){return console.error("Error fetching destinations:",e),null}}function W(e,t,r){return`
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
    `}async function Ze(e){const t=await Ye();if(!t)return;let r="";if(e==="countries"){const a=t[e].length,i=Math.floor(Math.random()*a);r=t[e][i].cities.map(s=>W(s.name,s.imageUrl,s.description)).join("")}else r=t[e].map(a=>W(a.name,a.imageUrl,a.description)).join("");document.getElementById("search-results").innerHTML=r}const et=document.getElementById("root"),tt=document.getElementById("navbar"),nt=document.getElementById("sidebar"),rt=document.getElementById("searchbar");rt.innerHTML=Re();tt.innerHTML=Oe();nt.innerHTML=Ae();const at="/ibm-js-course-project/",ne=new Je(at);ne.on({"/":e=>{k(we(),e.url)},"/about":e=>{k(xe(),e.url)},"/contact":e=>{k(Ee(),e.url)}}).resolve();ne.updatePageLinks();function k(e,t){et.innerHTML=e}const V=document.getElementById("searchForm");V&&V.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("searchInput").value.toLowerCase().trim();if(!t)return;let r="";K.some(i=>(r=i.toLowerCase(),t==="country"&&(t=t.slice(0,-1)),r.startsWith(t)))?Ze(r):document.getElementById("search-results").innerHTML=`
            <div class="text-center text-gray-100 bg-gray-500/30 rounded-lg p-6">
                <p class="text-lg">No results found.</p>
                <p class="text-sm">Please try a different search category.</p>
            </div>
        `});const X=document.getElementById("clearButton");X&&X.addEventListener("click",function(){document.getElementById("searchInput").value=""});
