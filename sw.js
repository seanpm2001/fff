if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>n(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(l(...s),a)))}}define(["./workbox-eb0071cf"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"acc82a6c0d930443f984090566b43aa8"},{url:"assets/app.10693328.js",revision:null},{url:"assets/CHANGELOG.md.9c099b18.js",revision:null},{url:"assets/CHANGELOG.md.9c099b18.lean.js",revision:null},{url:"assets/chunks/pwa.e8a0beaa.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.4bcfe1a8.js",revision:null},{url:"assets/index.md.626d39e4.js",revision:null},{url:"assets/index.md.626d39e4.lean.js",revision:null},{url:"assets/intro_contributing.md.84f71fa1.js",revision:null},{url:"assets/intro_contributing.md.84f71fa1.lean.js",revision:null},{url:"assets/intro_implementing.md.3cbe2797.js",revision:null},{url:"assets/intro_implementing.md.3cbe2797.lean.js",revision:null},{url:"assets/intro_showcase.md.f8d84325.js",revision:null},{url:"assets/intro_showcase.md.f8d84325.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.51c2b4c7.js",revision:null},{url:"assets/intro_what-is-fff.md.51c2b4c7.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.c408120b.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.c408120b.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.78fe69b9.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.78fe69b9.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.79e9029e.js",revision:null},{url:"assets/packages_markdown-it-fff.md.79e9029e.lean.js",revision:null},{url:"assets/packages_remark-fff.md.20488b4a.js",revision:null},{url:"assets/packages_remark-fff.md.20488b4a.lean.js",revision:null},{url:"assets/style.f84da78e.css",revision:null},{url:"assets/version_0.1.md.fed6d218.js",revision:null},{url:"assets/version_0.1.md.fed6d218.lean.js",revision:null},{url:"assets/version_0.2.md.e6c1d726.js",revision:null},{url:"assets/version_0.2.md.e6c1d726.lean.js",revision:null},{url:"assets/version_0.3.md.f8598946.js",revision:null},{url:"assets/version_0.3.md.f8598946.lean.js",revision:null},{url:"assets/version_0.4.md.be36ca9c.js",revision:null},{url:"assets/version_0.4.md.be36ca9c.lean.js",revision:null},{url:"assets/version_0.5.md.ea7987fa.js",revision:null},{url:"assets/version_0.5.md.ea7987fa.lean.js",revision:null},{url:"assets/version_changelog.md.9f22676d.js",revision:null},{url:"assets/version_changelog.md.9f22676d.lean.js",revision:null},{url:"CHANGELOG.html",revision:"754a0c58d8bcbffef013acb2c1d0502a"},{url:"index.html",revision:"696def4568c6cb37e67e0e073b912a15"},{url:"intro/contributing.html",revision:"363f1267c819a16bf4669b53e978bbb3"},{url:"intro/implementing.html",revision:"35e2f48db4b9d9482fd713e9ebc35811"},{url:"intro/showcase.html",revision:"cce5d80996dcb265f31a0ad71e8b3100"},{url:"intro/what-is-fff.html",revision:"98f2454d5a00795cd340e3da358b7343"},{url:"packages/fff-flavored-frontmatter.html",revision:"3ca56eb5d66c38f6c3d39ca28bf01a99"},{url:"packages/indiekit-preset-fff.html",revision:"d9f491a85df0bd614142038cb3827610"},{url:"packages/markdown-it-fff.html",revision:"8a41cf2bd9e3e33fe6efdb0265baf6d9"},{url:"packages/remark-fff.html",revision:"f4bba84887863bb2f17d1add260bddd1"},{url:"version/0.1.html",revision:"37570d5fbba0033db785528ef6cc685e"},{url:"version/0.2.html",revision:"94feb2fd9ac93c0af79fb503d69eaad3"},{url:"version/0.3.html",revision:"ebca65c3347b7d40d9f388caf0cb55ad"},{url:"version/0.4.html",revision:"d54cac4cb3f5e28c307a875fd995b831"},{url:"version/0.5.html",revision:"e06bb7c21c4e240cdda97210da22e5b4"},{url:"version/changelog.html",revision:"a9a0eb27e8722837227737d72d59d245"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));