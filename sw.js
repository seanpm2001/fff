if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>n(s,r),o={module:{uri:r},exports:t,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(l(...s),t)))}}define(["./workbox-eb0071cf"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.2a721928.js",revision:null},{url:"assets/chunks/pwa.6247b594.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.4bcfe1a8.js",revision:null},{url:"assets/index.md.b160362e.js",revision:null},{url:"assets/index.md.b160362e.lean.js",revision:null},{url:"assets/intro_contributing.md.4d9d539d.js",revision:null},{url:"assets/intro_contributing.md.4d9d539d.lean.js",revision:null},{url:"assets/intro_implementation.md.e17007a0.js",revision:null},{url:"assets/intro_implementation.md.e17007a0.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.a1300eee.js",revision:null},{url:"assets/intro_what-is-fff.md.a1300eee.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.0113f2af.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.0113f2af.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.18521d75.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.18521d75.lean.js",revision:null},{url:"assets/packages_remark-fff.md.81bdc9ba.js",revision:null},{url:"assets/packages_remark-fff.md.81bdc9ba.lean.js",revision:null},{url:"assets/style.a38d65bd.css",revision:null},{url:"assets/version_0.1.md.cb145e0f.js",revision:null},{url:"assets/version_0.1.md.cb145e0f.lean.js",revision:null},{url:"assets/version_0.2.md.cb443bd9.js",revision:null},{url:"assets/version_0.2.md.cb443bd9.lean.js",revision:null},{url:"assets/version_0.3.md.d94c0692.js",revision:null},{url:"assets/version_0.3.md.d94c0692.lean.js",revision:null},{url:"assets/version_0.4.md.d03b9590.js",revision:null},{url:"assets/version_0.4.md.d03b9590.lean.js",revision:null},{url:"assets/version_changelog.md.588059fa.js",revision:null},{url:"assets/version_changelog.md.588059fa.lean.js",revision:null},{url:"glowing_star.svg",revision:"be698b88356d324a89466c184856846d"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
