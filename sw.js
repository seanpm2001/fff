if(!self.define){let e,f={};const s=(s,r)=>(s=new URL(s+".js",r).href,f[s]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=f,document.head.appendChild(e)}else e=s,importScripts(s),f()})).then((()=>{let e=f[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(f[i])return;let t={};const l=e=>s(e,i),a={module:{uri:i},exports:t,require:l};f[i]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f275fa96"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d5c53638b6f2d99dbf98a3223faa8903"},{url:"assets/app.cbcccf2c.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.3f365ee3.js",revision:null},{url:"assets/chunks/framework.8f17d1d7.js",revision:null},{url:"assets/chunks/pwa.a79bf4e1.js",revision:null},{url:"assets/chunks/theme.8d5f7e0e.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.587ddf41.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.dc90f814.js",revision:null},{url:"assets/concepts_flags.md.e777386d.js",revision:null},{url:"assets/concepts_flags.md.e777386d.lean.js",revision:null},{url:"assets/concepts_flavor-transform.md.a20b98a2.js",revision:null},{url:"assets/concepts_flavor-transform.md.a20b98a2.lean.js",revision:null},{url:"assets/concepts_object-media.md.34725825.js",revision:null},{url:"assets/concepts_object-media.md.34725825.lean.js",revision:null},{url:"assets/index.md.5efbccdb.js",revision:null},{url:"assets/index.md.5efbccdb.lean.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.lean.js",revision:null},{url:"assets/intro_implementing.md.571277d9.js",revision:null},{url:"assets/intro_implementing.md.571277d9.lean.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.lean.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.83d84177.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.83d84177.lean.js",revision:null},{url:"assets/packages_fff-transform-presets.md.f9f422c6.js",revision:null},{url:"assets/packages_fff-transform-presets.md.f9f422c6.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0fb256f6.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0fb256f6.lean.js",revision:null},{url:"assets/packages_remark-fff.md.9a4f10e5.js",revision:null},{url:"assets/packages_remark-fff.md.9a4f10e5.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.7f6cd3be.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.7f6cd3be.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.dfa02fd8.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.dfa02fd8.lean.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.cbaf1cac.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.cbaf1cac.lean.js",revision:null},{url:"assets/references_fff-transform-presets.md.c1a0b808.js",revision:null},{url:"assets/references_fff-transform-presets.md.c1a0b808.lean.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.be17a094.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.be17a094.lean.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b9fa11f4.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b9fa11f4.lean.js",revision:null},{url:"assets/references_index.md.d10ce8b9.js",revision:null},{url:"assets/references_index.md.d10ce8b9.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0592f356.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0592f356.lean.js",revision:null},{url:"assets/references_markdown-it-fff.md.fa61132f.js",revision:null},{url:"assets/references_markdown-it-fff.md.fa61132f.lean.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.lean.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.lean.js",revision:null},{url:"assets/references_remark-fff.md.bf5d942d.js",revision:null},{url:"assets/references_remark-fff.md.bf5d942d.lean.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.82082317.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.82082317.lean.js",revision:null},{url:"assets/style.ebb4c266.css",revision:null},{url:"assets/version_0.1.md.9e16a55b.js",revision:null},{url:"assets/version_0.1.md.9e16a55b.lean.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.lean.js",revision:null},{url:"assets/version_0.3.md.2a40f345.js",revision:null},{url:"assets/version_0.3.md.2a40f345.lean.js",revision:null},{url:"assets/version_0.4.md.525a3652.js",revision:null},{url:"assets/version_0.4.md.525a3652.lean.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.lean.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.lean.js",revision:null},{url:"assets/version_changelog.md.439272c0.js",revision:null},{url:"assets/version_changelog.md.439272c0.lean.js",revision:null},{url:"CHANGELOG.html",revision:"2cf74df591e00aa2aee482774ebcf750"},{url:"concepts/flags.html",revision:"2f9e1c2e7d623aa931d806dbb6d10044"},{url:"concepts/flavor-transform.html",revision:"877bdf4c5e26c2f23cd6375799024569"},{url:"concepts/object-media.html",revision:"3bad69061f7d8e5a09df6f2f10d572fa"},{url:"index.html",revision:"ca0a988afc338c39333ca455f9dc3060"},{url:"intro/contributing.html",revision:"f9d2bb2cc2a96fa2c7f9d9bc92c6855f"},{url:"intro/implementing.html",revision:"1491980578b298cfa3a465d26350ba9f"},{url:"intro/showcase.html",revision:"a1dd3b00ba2b612fa1f279281da1abfa"},{url:"intro/what-is-fff.html",revision:"e55bf2a22a6e7d9e121072ac34b9b00a"},{url:"packages/create-fff.html",revision:"ff3a7c2e403a1a5e882458c5d982671b"},{url:"packages/fff-flavored-frontmatter.html",revision:"a5a1e2b6120153854538fc5232d36402"},{url:"packages/fff-transform-presets.html",revision:"8fb660756f860c3ad418acbccfb1b294"},{url:"packages/indiekit-preset-fff.html",revision:"7393efe7d3f8055a46deed93baee7b79"},{url:"packages/markdown-it-fff.html",revision:"b73f7c59819f878257b5f80644484e0a"},{url:"packages/remark-fff.html",revision:"cfd68da98e882ffd567d648fcc81115a"},{url:"references/fff-flavored-frontmatter.fffaudio.html",revision:"a8a25b6050cfdbbc81d5b581f1723d7a"},{url:"references/fff-flavored-frontmatter.fffauthor.html",revision:"6da7d175208b4d8a86dc3cee59855435"},{url:"references/fff-flavored-frontmatter.fffbase.html",revision:"07070499cf090250c76fcdc216a8bdba"},{url:"references/fff-flavored-frontmatter.fffdatetime.html",revision:"75ecbc331017fee97cc91be0b5263df6"},{url:"references/fff-flavored-frontmatter.fffextra.html",revision:"535d9093526224936d3fa1507ed036ce"},{url:"references/fff-flavored-frontmatter.fffflavoredfrontmatter.html",revision:"2f730014187fa1387cfd87c40377307d"},{url:"references/fff-flavored-frontmatter.fffimage.html",revision:"2775b0be1eb0fca5852f08960800e64e"},{url:"references/fff-flavored-frontmatter.fffmedia.html",revision:"338feab8b0a04661835545e649513059"},{url:"references/fff-flavored-frontmatter.fffmention.html",revision:"2076b9574db76a57ba90dddc39829210"},{url:"references/fff-flavored-frontmatter.ffftransformpreset.html",revision:"d77c2c51442c2f1ae88c559484e857e0"},{url:"references/fff-flavored-frontmatter.ffftransformpresetreverse.html",revision:"ad544ca67a87a354451660e431617248"},{url:"references/fff-flavored-frontmatter.ffftransformpresetvalue.html",revision:"f6bf542a23725c76d5bba4b1035cf802"},{url:"references/fff-flavored-frontmatter.fffvideo.html",revision:"b6dcb0292665acf96dddae00357ae515"},{url:"references/fff-flavored-frontmatter.html",revision:"d482a6cc2806d51f3a1df106548743fa"},{url:"references/fff-flavored-frontmatter.strict.html",revision:"dff5c0d97b40c50a0ed9e7fbf1f7320a"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.html",revision:"add870afa4b6aaca54414f1e3f16f88b"},{url:"references/fff-flavored-frontmatter.tojsonfeeditem.html",revision:"63a4cb7efc8a18d42b90085c84664e0e"},{url:"references/fff-flavored-frontmatter.transform.html",revision:"7975731e95fbc5fcb5df9eb0c1d16592"},{url:"references/fff-flavored-frontmatter.typediscovery.html",revision:"e08c7aaabfff149ad836fcc000d7915e"},{url:"references/fff-transform-presets.hexo.html",revision:"84d7ec60771e4d05f85b64de7975cb63"},{url:"references/fff-transform-presets.html",revision:"c7bb4ca8fd36c311d21bdf1f0e3753a0"},{url:"references/fff-transform-presets.hugo.html",revision:"168b3b5aa3c999b7f16c24b1318bee44"},{url:"references/fff-transform-presets.jekyll.html",revision:"1dcc0f2e8a834bacee0faa2a98b5a095"},{url:"references/fff-transform-presets.mditvue.html",revision:"b6669aa66bea614d7aea8756ce938af2"},{url:"references/fff-transform-presets.nuxt.html",revision:"540e9a5a0dcfac36071656ba248758f6"},{url:"references/index.html",revision:"e718254c07ae4351a2e310245b2aa25f"},{url:"references/indiekit-preset-fff.html",revision:"5bc4ed0a7d01f4276a51924574e5de93"},{url:"references/indiekit-preset-fff.indiekitpresetfff._constructor_.html",revision:"594c5c72b9b9a0309adea2b74c707d47"},{url:"references/indiekit-preset-fff.indiekitpresetfff.html",revision:"7f98baf26510441198cd03fc8d3814e8"},{url:"references/indiekit-preset-fff.indiekitpresetfff.id.html",revision:"50e3929479aa9432498ead2b09f293ac"},{url:"references/indiekit-preset-fff.indiekitpresetfff.info.html",revision:"3ed824482417ca77490a61d9a714dd0e"},{url:"references/indiekit-preset-fff.indiekitpresetfff.init.html",revision:"d846cabcb5bcdc7b2b37222c66cc7180"},{url:"references/indiekit-preset-fff.indiekitpresetfff.meta.html",revision:"46432c3030f4cae19211981991102abb"},{url:"references/indiekit-preset-fff.indiekitpresetfff.name.html",revision:"95bb052ad2f809b7da36bfe3ed69f2b0"},{url:"references/indiekit-preset-fff.indiekitpresetfff.options.html",revision:"6df826f48cb2b31e265cfc8c03935728"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttemplate.html",revision:"fc957b2c60f5423b66e99d6e934510b1"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttypes.html",revision:"cfc4c3512357b6109e4fe49e324164b3"},{url:"references/indiekit-preset-fff.indiekitpresetfff.prompts.html",revision:"4b55e36855f158485cbb70056d3b349d"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.html",revision:"69769f69b545d612b6c72cbd9b5aa761"},{url:"references/markdown-it-fff.fffplugin.html",revision:"2e6ff081fa12b50adc073172acf479eb"},{url:"references/markdown-it-fff.fffpluginoptions.html",revision:"965cf318a10b2a1b2e88b46f8d6bd864"},{url:"references/markdown-it-fff.html",revision:"ebedd55117875ba0449beb7035d1c2fd"},{url:"references/remark-fff.fs.html",revision:"e30715ff963cdc5cc22b1bfdcab20776"},{url:"references/remark-fff.git.html",revision:"deb9aed178f87ac72350ca66178e366b"},{url:"references/remark-fff.html",revision:"af881ccf132f015d6bf3b43147521c63"},{url:"references/remark-fff.path.html",revision:"d248117442956b986b1ae2c9dd8e3ce2"},{url:"references/remark-fff.remarkfff.html",revision:"ba5ee671708b60e3f9f2ad27d1e124fd"},{url:"references/remark-fff.remarkfffoptions.html",revision:"2b248212b38f1ab580ad5d51f1eada95"},{url:"version/0.1.html",revision:"041eeb581d53618cd38f209d48148842"},{url:"version/0.2.html",revision:"995a4725220aff22aaa3396b08f37437"},{url:"version/0.3.html",revision:"37a811524fce41c71bdc5cf57f1d73a2"},{url:"version/0.4.html",revision:"fd1ccf6e426e8f1942829d11f991e0ab"},{url:"version/0.5.html",revision:"4505fbc1ae8a4626be4f89818ce81bf1"},{url:"version/0.6.html",revision:"01bde4613b8538d8002ced0330320376"},{url:"version/changelog.html",revision:"555362a0c4015fc39ba44adcc8e6d42d"},{url:"manifest.webmanifest",revision:"bfc13fa9b61ca7cf80d86e016a851524"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET")}));
