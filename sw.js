if(!self.define){let e,f={};const r=(r,s)=>(r=new URL(r+".js",s).href,f[r]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=f,document.head.appendChild(e)}else e=r,importScripts(r),f()})).then((()=>{let e=f[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(f[i])return;let l={};const t=e=>r(e,i),a={module:{uri:i},exports:l,require:t};f[i]=Promise.all(s.map((e=>a[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-f275fa96"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"626845c9e3d4488ad9bddb52f87305f8"},{url:"assets/app.38edda19.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.js",revision:null},{url:"assets/CHANGELOG.md.c58fa3f6.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.347e53bf.js",revision:null},{url:"assets/chunks/framework.8f17d1d7.js",revision:null},{url:"assets/chunks/pwa.a79bf4e1.js",revision:null},{url:"assets/chunks/theme.a3272461.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.117056e3.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.dc90f814.js",revision:null},{url:"assets/concepts_flags.md.e777386d.js",revision:null},{url:"assets/concepts_flags.md.e777386d.lean.js",revision:null},{url:"assets/concepts_flavor-transform.md.c9c58d7a.js",revision:null},{url:"assets/concepts_flavor-transform.md.c9c58d7a.lean.js",revision:null},{url:"assets/concepts_object-media.md.34725825.js",revision:null},{url:"assets/concepts_object-media.md.34725825.lean.js",revision:null},{url:"assets/index.md.5efbccdb.js",revision:null},{url:"assets/index.md.5efbccdb.lean.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.js",revision:null},{url:"assets/intro_contributing.md.eff5393c.lean.js",revision:null},{url:"assets/intro_implementing.md.571277d9.js",revision:null},{url:"assets/intro_implementing.md.571277d9.lean.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.js",revision:null},{url:"assets/intro_showcase.md.7938f9df.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.js",revision:null},{url:"assets/intro_what-is-fff.md.71830eee.lean.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.js",revision:null},{url:"assets/packages_create-fff.md.092870a0.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.a9154c54.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.a9154c54.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.50e1dbdf.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.1fb87f0b.js",revision:null},{url:"assets/packages_markdown-it-fff.md.1fb87f0b.lean.js",revision:null},{url:"assets/packages_remark-fff.md.e1a08a23.js",revision:null},{url:"assets/packages_remark-fff.md.e1a08a23.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.f61834e4.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.97b946f6.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.e22f1b5f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.223618fd.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.9b700756.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.e6136c41.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.8ca7a8ef.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.38e93825.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.8465f12b.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.716e3b91.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetreverse.md.03c147d8.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.177b298e.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.f191be89.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.1692a455.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.53db0c0f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.f3497483.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.9b6f6ea7.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.473acd9f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.typediscovery.md.e3503525.lean.js",revision:null},{url:"assets/references_index.md.a7a1b5c4.js",revision:null},{url:"assets/references_index.md.a7a1b5c4.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.ce2db55f.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.7c616cc5.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.f5062083.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.52f62144.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.31600bdd.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.60335090.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.1c4f50f7.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.9bc2fadb.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.69340a90.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.dfb92b21.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.9e2633b8.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.4d797140.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.ba28f1c3.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.d1977c37.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.cbf4d21d.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.cbf4d21d.lean.js",revision:null},{url:"assets/references_markdown-it-fff.hexo.md.ad53f533.js",revision:null},{url:"assets/references_markdown-it-fff.hexo.md.ad53f533.lean.js",revision:null},{url:"assets/references_markdown-it-fff.hugo.md.193d2e3e.js",revision:null},{url:"assets/references_markdown-it-fff.hugo.md.193d2e3e.lean.js",revision:null},{url:"assets/references_markdown-it-fff.jekyll.md.44b7c16e.js",revision:null},{url:"assets/references_markdown-it-fff.jekyll.md.44b7c16e.lean.js",revision:null},{url:"assets/references_markdown-it-fff.md.8bbe3515.js",revision:null},{url:"assets/references_markdown-it-fff.md.8bbe3515.lean.js",revision:null},{url:"assets/references_markdown-it-fff.nuxt.md.7fbda50d.js",revision:null},{url:"assets/references_markdown-it-fff.nuxt.md.7fbda50d.lean.js",revision:null},{url:"assets/references_markdown-it-fff.vue.md.1e5d7cd6.js",revision:null},{url:"assets/references_markdown-it-fff.vue.md.1e5d7cd6.lean.js",revision:null},{url:"assets/references_markdown-it-fff.zola.md.68718bf9.js",revision:null},{url:"assets/references_markdown-it-fff.zola.md.68718bf9.lean.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.js",revision:null},{url:"assets/references_remark-fff.fs.md.15eaa7ec.lean.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.js",revision:null},{url:"assets/references_remark-fff.git.md.61f7301c.lean.js",revision:null},{url:"assets/references_remark-fff.hexo.md.96bab635.js",revision:null},{url:"assets/references_remark-fff.hexo.md.96bab635.lean.js",revision:null},{url:"assets/references_remark-fff.hugo.md.222592b9.js",revision:null},{url:"assets/references_remark-fff.hugo.md.222592b9.lean.js",revision:null},{url:"assets/references_remark-fff.jekyll.md.f15c1b76.js",revision:null},{url:"assets/references_remark-fff.jekyll.md.f15c1b76.lean.js",revision:null},{url:"assets/references_remark-fff.md.8da08e9a.js",revision:null},{url:"assets/references_remark-fff.md.8da08e9a.lean.js",revision:null},{url:"assets/references_remark-fff.nuxt.md.dd43c75e.js",revision:null},{url:"assets/references_remark-fff.nuxt.md.dd43c75e.lean.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.js",revision:null},{url:"assets/references_remark-fff.path.md.3d8eb0e1.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.e2792c24.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.07169ac2.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.07169ac2.lean.js",revision:null},{url:"assets/references_remark-fff.zola.md.13d3f3a8.js",revision:null},{url:"assets/references_remark-fff.zola.md.13d3f3a8.lean.js",revision:null},{url:"assets/style.fc4141e3.css",revision:null},{url:"assets/version_0.1.md.9e16a55b.js",revision:null},{url:"assets/version_0.1.md.9e16a55b.lean.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.js",revision:null},{url:"assets/version_0.2.md.8c9e9c35.lean.js",revision:null},{url:"assets/version_0.3.md.2a40f345.js",revision:null},{url:"assets/version_0.3.md.2a40f345.lean.js",revision:null},{url:"assets/version_0.4.md.525a3652.js",revision:null},{url:"assets/version_0.4.md.525a3652.lean.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.js",revision:null},{url:"assets/version_0.5.md.4ba54f0b.lean.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.js",revision:null},{url:"assets/version_0.6.md.fc2c4975.lean.js",revision:null},{url:"assets/version_changelog.md.439272c0.js",revision:null},{url:"assets/version_changelog.md.439272c0.lean.js",revision:null},{url:"CHANGELOG.html",revision:"9032bc142e84bf0beee6b742035d48e7"},{url:"concepts/flags.html",revision:"ca8a7a5a7993f8b8c57b99e7acaf6c8b"},{url:"concepts/flavor-transform.html",revision:"ed61b31634e4175dcfaa5259944eb187"},{url:"concepts/object-media.html",revision:"3695f141e5b40661520fc84524ee4d2c"},{url:"index.html",revision:"b9336a39a15edbefa56763c63ed111cb"},{url:"intro/contributing.html",revision:"997e46bc2b87fc3a5c76191a56317137"},{url:"intro/implementing.html",revision:"0f42fb1764a30481414197d458018e39"},{url:"intro/showcase.html",revision:"43d1c0fd66e8da4efc9571e4647458fe"},{url:"intro/what-is-fff.html",revision:"22d3b57d889a89c43fb6e5965cdfaa0c"},{url:"packages/create-fff.html",revision:"a19147ae9a6daf7966b57940d2350b53"},{url:"packages/fff-flavored-frontmatter.html",revision:"9de56136ef46f6626832f144243b3d89"},{url:"packages/indiekit-preset-fff.html",revision:"5b330f15a8d152c30111445284961f35"},{url:"packages/markdown-it-fff.html",revision:"5ef7eb033505e863f5282417dbe05846"},{url:"packages/remark-fff.html",revision:"9b7c2f9cee65af424d2861f7f5db3323"},{url:"references/fff-flavored-frontmatter.fffaudio.html",revision:"6615948defc9006dc6a2d38cfa0efcaa"},{url:"references/fff-flavored-frontmatter.fffauthor.html",revision:"04d879d63dc886a89a77e55d4dfa1468"},{url:"references/fff-flavored-frontmatter.fffbase.html",revision:"1ede440d70601bb831cd237854766558"},{url:"references/fff-flavored-frontmatter.fffdatetime.html",revision:"b7fd6fd914f5c23a96b02b9f84e9c8f6"},{url:"references/fff-flavored-frontmatter.fffextra.html",revision:"b57e91e61961818a83a5dc7f143cb967"},{url:"references/fff-flavored-frontmatter.fffflavoredfrontmatter.html",revision:"245af09e73db3f536287955ee6bb5666"},{url:"references/fff-flavored-frontmatter.fffimage.html",revision:"8d92bb014b7d458198f35c48f58bd72c"},{url:"references/fff-flavored-frontmatter.fffmedia.html",revision:"dc6daba5497ee2452b3697002d668e7a"},{url:"references/fff-flavored-frontmatter.fffmention.html",revision:"7e38d7ad3a02686358a07e417545a967"},{url:"references/fff-flavored-frontmatter.ffftransformpreset.html",revision:"9f3210d32d667f8fb3ae6af8fc29bc3b"},{url:"references/fff-flavored-frontmatter.ffftransformpresetreverse.html",revision:"6f0735b03d76fa13a17730cde17aa0cc"},{url:"references/fff-flavored-frontmatter.ffftransformpresetvalue.html",revision:"ae4baeb9970249b41f68aa37733c18c6"},{url:"references/fff-flavored-frontmatter.fffvideo.html",revision:"81c5edff8c3fd956a62d21dcc68bab34"},{url:"references/fff-flavored-frontmatter.html",revision:"a9c55a1e3dc3ad0fa219e30835adde17"},{url:"references/fff-flavored-frontmatter.strict.html",revision:"a0761ccb5661b8ba85054faeff829ed0"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.html",revision:"68e428b6acd06baeedbed95d8087707c"},{url:"references/fff-flavored-frontmatter.tojsonfeeditem.html",revision:"54131ebd55f22adb4c99ab2f031f7718"},{url:"references/fff-flavored-frontmatter.transform.html",revision:"ad47fededb340887d0a0f45ee73f52a1"},{url:"references/fff-flavored-frontmatter.typediscovery.html",revision:"f7b2a0b3117515bda755eb9d23ea6254"},{url:"references/index.html",revision:"9b7b5613a4b2294e88fa0c8e537e197c"},{url:"references/indiekit-preset-fff.html",revision:"d0d2db2e745a8518a8bc9bcae6b89819"},{url:"references/indiekit-preset-fff.indiekitpresetfff._constructor_.html",revision:"66c8d0e962f8e63556b91c873112d68f"},{url:"references/indiekit-preset-fff.indiekitpresetfff.html",revision:"1ddcdb86821be73cd9e9e16965c41acd"},{url:"references/indiekit-preset-fff.indiekitpresetfff.id.html",revision:"c80af87e204cd6a9b7bdd03a7c219b1e"},{url:"references/indiekit-preset-fff.indiekitpresetfff.info.html",revision:"baf0742e3f7fc10d7920c452fefa9de4"},{url:"references/indiekit-preset-fff.indiekitpresetfff.init.html",revision:"9ad5e46d878410976de01df74d4edb4e"},{url:"references/indiekit-preset-fff.indiekitpresetfff.meta.html",revision:"4789cdfaea0854d6f7c15cfe97d652f5"},{url:"references/indiekit-preset-fff.indiekitpresetfff.name.html",revision:"76f5cbbdcfac7310efbebd90a809e4ac"},{url:"references/indiekit-preset-fff.indiekitpresetfff.options.html",revision:"0760db7a539794f9b9478ef08d847cca"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttemplate.html",revision:"ae673a47c42e1bf08983847280aa619f"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttypes.html",revision:"f4ae78ae3e60fa9abacbf723a1e2d6aa"},{url:"references/indiekit-preset-fff.indiekitpresetfff.prompts.html",revision:"078defc798ed5d72685896d207be3251"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.html",revision:"0fdb809aa8cb4a6c71c3a1f8c52566e2"},{url:"references/markdown-it-fff.fffplugin.html",revision:"1925bb1d457e5173b691608a124e2c26"},{url:"references/markdown-it-fff.fffpluginoptions.html",revision:"b1314101aec976d471e0a2eb74200cdc"},{url:"references/markdown-it-fff.hexo.html",revision:"74689fe50facb06921c7a73187b352a3"},{url:"references/markdown-it-fff.html",revision:"d8755e0eb07fb28cc02a0a6a3588e43a"},{url:"references/markdown-it-fff.hugo.html",revision:"3aabf77ef3bedfdf4655efef29cfe382"},{url:"references/markdown-it-fff.jekyll.html",revision:"8983c0b2dd27ef32e8b6c7220ff8f1eb"},{url:"references/markdown-it-fff.nuxt.html",revision:"3e128e668159d0b1abfbf2e75da1ad03"},{url:"references/markdown-it-fff.vue.html",revision:"8f13a2498402cfe800614262bd6c78e4"},{url:"references/markdown-it-fff.zola.html",revision:"9393a8c7c47e08d2dabad09ad337baa7"},{url:"references/remark-fff.fs.html",revision:"3f54967a93dd30ab2bb3b044a2fbac1a"},{url:"references/remark-fff.git.html",revision:"28c40c9f17ec4691f8c8dde436064aff"},{url:"references/remark-fff.hexo.html",revision:"762047da372d866725004dc4fee1fbf2"},{url:"references/remark-fff.html",revision:"1f021ee8d57b68295607019f9db1a49a"},{url:"references/remark-fff.hugo.html",revision:"1124879cb1463bd75bc9191b924b20d2"},{url:"references/remark-fff.jekyll.html",revision:"e56a0feb979111caf5009beda72e5f15"},{url:"references/remark-fff.nuxt.html",revision:"dfea02e30404f55d622532570bcbe66c"},{url:"references/remark-fff.path.html",revision:"7436aa2e3fa9a88e62fb784ff74b3996"},{url:"references/remark-fff.remarkfff.html",revision:"e418c0c15d8b5a9c3513dfa846e87584"},{url:"references/remark-fff.remarkfffoptions.html",revision:"8e80428bc4b715beee3ee9b0fa64ab15"},{url:"references/remark-fff.zola.html",revision:"1b7c276ff8282dbb0d096db466d5158f"},{url:"version/0.1.html",revision:"f4314f2cf4f89f0578e790a69e84cbd7"},{url:"version/0.2.html",revision:"5f9f6e01ef39333c07c7829b2e2c1e7e"},{url:"version/0.3.html",revision:"d153886a4e8f6b9b1467756bff82de42"},{url:"version/0.4.html",revision:"31491bd5273142e1e5cf7a64c8df6f8c"},{url:"version/0.5.html",revision:"c21185a72d44beda5b5dafc75d58cafd"},{url:"version/0.6.html",revision:"6bb91d884167131c991195e29a5defed"},{url:"version/changelog.html",revision:"06b59519aeddc96a167dd126309229a6"},{url:"manifest.webmanifest",revision:"bfc13fa9b61ca7cf80d86e016a851524"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET")}));
