if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>n(e,r),t={module:{uri:r},exports:a,require:o};s[r]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-eb0071cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"68c24b8aa5f0697121605c7203823663"},{url:"assets/app.3def0c79.js",revision:null},{url:"assets/CHANGELOG.md.054caecb.js",revision:null},{url:"assets/CHANGELOG.md.054caecb.lean.js",revision:null},{url:"assets/chunks/pwa.5e476cec.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.295a6886.js",revision:null},{url:"assets/concepts_flags.md.a667c8ef.js",revision:null},{url:"assets/concepts_flags.md.a667c8ef.lean.js",revision:null},{url:"assets/concepts_flavor-transform.md.c3c0b20f.js",revision:null},{url:"assets/concepts_flavor-transform.md.c3c0b20f.lean.js",revision:null},{url:"assets/concepts_object-media.md.66e3ef90.js",revision:null},{url:"assets/concepts_object-media.md.66e3ef90.lean.js",revision:null},{url:"assets/index.md.5d0cd25c.js",revision:null},{url:"assets/index.md.5d0cd25c.lean.js",revision:null},{url:"assets/intro_contributing.md.3fd449de.js",revision:null},{url:"assets/intro_contributing.md.3fd449de.lean.js",revision:null},{url:"assets/intro_implementing.md.3f270406.js",revision:null},{url:"assets/intro_implementing.md.3f270406.lean.js",revision:null},{url:"assets/intro_showcase.md.494c3abc.js",revision:null},{url:"assets/intro_showcase.md.494c3abc.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.31295325.js",revision:null},{url:"assets/intro_what-is-fff.md.31295325.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.ca50c6eb.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.ca50c6eb.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.3430847b.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.3430847b.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.f0ab2c1c.js",revision:null},{url:"assets/packages_markdown-it-fff.md.f0ab2c1c.lean.js",revision:null},{url:"assets/packages_remark-fff.md.eb9b4b39.js",revision:null},{url:"assets/packages_remark-fff.md.eb9b4b39.lean.js",revision:null},{url:"assets/style.a4f1be8d.css",revision:null},{url:"assets/version_0.1.md.8021dba0.js",revision:null},{url:"assets/version_0.1.md.8021dba0.lean.js",revision:null},{url:"assets/version_0.2.md.e2881d5c.js",revision:null},{url:"assets/version_0.2.md.e2881d5c.lean.js",revision:null},{url:"assets/version_0.3.md.c6e869e2.js",revision:null},{url:"assets/version_0.3.md.c6e869e2.lean.js",revision:null},{url:"assets/version_0.4.md.5dcb3405.js",revision:null},{url:"assets/version_0.4.md.5dcb3405.lean.js",revision:null},{url:"assets/version_0.5.md.0779f689.js",revision:null},{url:"assets/version_0.5.md.0779f689.lean.js",revision:null},{url:"assets/version_changelog.md.5e0ecc9b.js",revision:null},{url:"assets/version_changelog.md.5e0ecc9b.lean.js",revision:null},{url:"CHANGELOG.html",revision:"afd8736d8e24136bf649f6e00b0b74f2"},{url:"concepts/flags.html",revision:"c8d53c7eccf26dff6c1c8a88cb41de36"},{url:"concepts/flavor-transform.html",revision:"07e606eef11e5905a84591d5196f0c7b"},{url:"concepts/object-media.html",revision:"904ac1bd75d02036bad1a0bff96b4eb7"},{url:"index.html",revision:"d3fb2a8f44c2a74ce47a0d647de73d0b"},{url:"intro/contributing.html",revision:"242aece89d8b862e19b052a923d64a44"},{url:"intro/implementing.html",revision:"e36390192b11bf0fdebd9e54b3548a20"},{url:"intro/showcase.html",revision:"bc2ca74d2073750dc0729271fd025633"},{url:"intro/what-is-fff.html",revision:"e6d9b8e7c1502223d233fca2cf471673"},{url:"packages/fff-flavored-frontmatter.html",revision:"1aff2fdb5c65b438d7a4ffc7238e1856"},{url:"packages/indiekit-preset-fff.html",revision:"7c10628e3de52d7bc43d05377410e814"},{url:"packages/markdown-it-fff.html",revision:"63c5e917ad2cb29be8706a39751ff2e5"},{url:"packages/remark-fff.html",revision:"98798cee91d448ebd75f4f75b2c5ce52"},{url:"version/0.1.html",revision:"6ef931b484e6fa4d4e9a2da2bcf5056b"},{url:"version/0.2.html",revision:"aa7b250a8c892ea7a12ed49693433c77"},{url:"version/0.3.html",revision:"d16df8b6684ded50808635622001f51f"},{url:"version/0.4.html",revision:"fac290eb00bacd0a10d56928eaf631cc"},{url:"version/0.5.html",revision:"1222bca68c648689f7a896318c896aed"},{url:"version/changelog.html",revision:"b14a49efc1e09636a3a9c54080a57d83"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
