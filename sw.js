if(!self.define){let e,f={};const s=(s,r)=>(s=new URL(s+".js",r).href,f[s]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=f,document.head.appendChild(e)}else e=s,importScripts(s),f()})).then((()=>{let e=f[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(f[t])return;let i={};const a=e=>s(e,t),l={module:{uri:t},exports:i,require:a};f[t]=Promise.all(r.map((e=>l[e]||a(e)))).then((e=>(n(...e),i)))}}define(["./workbox-52b86d2e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d1e946570b8498011e468533054f2893"},{url:"assets/app.1e096b3f.js",revision:null},{url:"assets/CHANGELOG.md.013cb544.js",revision:null},{url:"assets/CHANGELOG.md.013cb544.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.586d28e6.js",revision:null},{url:"assets/chunks/framework.d3dc5784.js",revision:null},{url:"assets/chunks/pwa.c6391f10.js",revision:null},{url:"assets/chunks/theme.519851fb.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.ba286da6.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"assets/concepts_flags.md.9d3def94.js",revision:null},{url:"assets/concepts_flags.md.9d3def94.lean.js",revision:null},{url:"assets/concepts_flavor-transform.md.10830b75.js",revision:null},{url:"assets/concepts_flavor-transform.md.10830b75.lean.js",revision:null},{url:"assets/concepts_object-media.md.7fae6bef.js",revision:null},{url:"assets/concepts_object-media.md.7fae6bef.lean.js",revision:null},{url:"assets/index.md.b8c5dab3.js",revision:null},{url:"assets/index.md.b8c5dab3.lean.js",revision:null},{url:"assets/intro_contributing.md.f1acaad8.js",revision:null},{url:"assets/intro_contributing.md.f1acaad8.lean.js",revision:null},{url:"assets/intro_implementing.md.99ac83f3.js",revision:null},{url:"assets/intro_implementing.md.99ac83f3.lean.js",revision:null},{url:"assets/intro_showcase.md.44962a84.js",revision:null},{url:"assets/intro_showcase.md.44962a84.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.bfc68d71.js",revision:null},{url:"assets/intro_what-is-fff.md.bfc68d71.lean.js",revision:null},{url:"assets/packages_create-fff.md.df09d4af.js",revision:null},{url:"assets/packages_create-fff.md.df09d4af.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.0e6ecce1.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.0e6ecce1.lean.js",revision:null},{url:"assets/packages_fff-transform-presets.md.a3f466e2.js",revision:null},{url:"assets/packages_fff-transform-presets.md.a3f466e2.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.89b51abb.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.89b51abb.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0456692a.js",revision:null},{url:"assets/packages_markdown-it-fff.md.0456692a.lean.js",revision:null},{url:"assets/packages_remark-fff.md.fad22a2e.js",revision:null},{url:"assets/packages_remark-fff.md.fad22a2e.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.6f896003.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffaudio.md.6f896003.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.25bdd47a.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffauthor.md.25bdd47a.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.7dac277f.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffbase.md.7dac277f.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.fdbdcf74.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffdatetime.md.fdbdcf74.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.7e394695.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffextra.md.7e394695.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.c8c1a81a.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffflavoredfrontmatter.md.c8c1a81a.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.a6e4bb79.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffimage.md.a6e4bb79.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.7e2d850a.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmedia.md.7e2d850a.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.313ca955.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffmention.md.313ca955.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffoptionaltype.md.f43e22c5.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffoptionaltype.md.f43e22c5.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.10b38b3a.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpreset.md.10b38b3a.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.228b7794.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.ffftransformpresetvalue.md.228b7794.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.3585d5f7.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.fffvideo.md.3585d5f7.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.434c9055.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.md.434c9055.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.posttype.md.5678eb6c.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.posttype.md.5678eb6c.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.posttypediscovery.md.306630bb.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.posttypediscovery.md.306630bb.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.d777f26a.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strict.md.d777f26a.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.categories.md.e6b7e5bd.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.categories.md.e6b7e5bd.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.lang.md.58eb0b73.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.lang.md.58eb0b73.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.245c90fe.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.md.245c90fe.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.media.md.9cd2bac0.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.strictpresetoptions.media.md.9cd2bac0.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.16a33bb7.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.tojsonfeeditem.md.16a33bb7.lean.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.d2539f5d.js",revision:null},{url:"assets/references_fff-flavored-frontmatter.transform.md.d2539f5d.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.5cfc09f2.js",revision:null},{url:"assets/references_fff-transform-presets.hexo.md.5cfc09f2.lean.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.8f07c210.js",revision:null},{url:"assets/references_fff-transform-presets.hugo.md.8f07c210.lean.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.6596bb6f.js",revision:null},{url:"assets/references_fff-transform-presets.jekyll.md.6596bb6f.lean.js",revision:null},{url:"assets/references_fff-transform-presets.md.bc9bac57.js",revision:null},{url:"assets/references_fff-transform-presets.md.bc9bac57.lean.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.1d9b2452.js",revision:null},{url:"assets/references_fff-transform-presets.mditvue.md.1d9b2452.lean.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b99882f2.js",revision:null},{url:"assets/references_fff-transform-presets.nuxt.md.b99882f2.lean.js",revision:null},{url:"assets/references_fff-transform-presets.nuxtthemealpine.md.4ff1ce1d.js",revision:null},{url:"assets/references_fff-transform-presets.nuxtthemealpine.md.4ff1ce1d.lean.js",revision:null},{url:"assets/references_index.md.9a998082.js",revision:null},{url:"assets/references_index.md.9a998082.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.aa7d4ef1.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff._constructor_.md.aa7d4ef1.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.3fbef3e9.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.id.md.3fbef3e9.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.7f75bae6.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.info.md.7f75bae6.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.9ab7c8b7.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.init.md.9ab7c8b7.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.df5daa41.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.md.df5daa41.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.86e1a09c.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.meta.md.86e1a09c.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.fec686d9.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.name.md.fec686d9.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.d2f04760.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.options.md.d2f04760.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.38018af1.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttemplate.md.38018af1.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.7384740b.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.posttypes.md.7384740b.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.b70436ec.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfff.prompts.md.b70436ec.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.format.md.33b55e9b.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.format.md.33b55e9b.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.5b1e8079.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.md.5b1e8079.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.strict.md.7d2a8d29.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.strict.md.7d2a8d29.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.types.md.e3ffa277.js",revision:null},{url:"assets/references_indiekit-preset-fff.indiekitpresetfffoptions.types.md.e3ffa277.lean.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.4490e80f.js",revision:null},{url:"assets/references_indiekit-preset-fff.md.4490e80f.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.e70b0d5b.js",revision:null},{url:"assets/references_markdown-it-fff.fffplugin.md.e70b0d5b.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0d363176.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.md.0d363176.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.presets.md.6d5c5ac3.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.presets.md.6d5c5ac3.lean.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.strict.md.a359b6de.js",revision:null},{url:"assets/references_markdown-it-fff.fffpluginoptions.strict.md.a359b6de.lean.js",revision:null},{url:"assets/references_markdown-it-fff.md.5d878275.js",revision:null},{url:"assets/references_markdown-it-fff.md.5d878275.lean.js",revision:null},{url:"assets/references_remark-fff.fs.md.95cc155b.js",revision:null},{url:"assets/references_remark-fff.fs.md.95cc155b.lean.js",revision:null},{url:"assets/references_remark-fff.git.md.6a4b0df7.js",revision:null},{url:"assets/references_remark-fff.git.md.6a4b0df7.lean.js",revision:null},{url:"assets/references_remark-fff.md.4915f54f.js",revision:null},{url:"assets/references_remark-fff.md.4915f54f.lean.js",revision:null},{url:"assets/references_remark-fff.path.md.49bf7440.js",revision:null},{url:"assets/references_remark-fff.path.md.49bf7440.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.73cde8e0.js",revision:null},{url:"assets/references_remark-fff.remarkfff.md.73cde8e0.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.autofill.md.d59bfca7.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.autofill.md.d59bfca7.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.73416306.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.md.73416306.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.presets.md.cc636758.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.presets.md.cc636758.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.strict.md.cebc76bd.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.strict.md.cebc76bd.lean.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.target.md.0d7fdee6.js",revision:null},{url:"assets/references_remark-fff.remarkfffoptions.target.md.0d7fdee6.lean.js",revision:null},{url:"assets/style.5330087f.css",revision:null},{url:"assets/version_0.1.md.6a765f2c.js",revision:null},{url:"assets/version_0.1.md.6a765f2c.lean.js",revision:null},{url:"assets/version_0.2.md.592de368.js",revision:null},{url:"assets/version_0.2.md.592de368.lean.js",revision:null},{url:"assets/version_0.3.md.6802b430.js",revision:null},{url:"assets/version_0.3.md.6802b430.lean.js",revision:null},{url:"assets/version_0.4.md.e9f32a69.js",revision:null},{url:"assets/version_0.4.md.e9f32a69.lean.js",revision:null},{url:"assets/version_0.5.md.57bfc1de.js",revision:null},{url:"assets/version_0.5.md.57bfc1de.lean.js",revision:null},{url:"assets/version_1.0.md.59c82716.js",revision:null},{url:"assets/version_1.0.md.59c82716.lean.js",revision:null},{url:"assets/version_1.1.md.40e82f61.js",revision:null},{url:"assets/version_1.1.md.40e82f61.lean.js",revision:null},{url:"assets/version_changelog.md.d53ff940.js",revision:null},{url:"assets/version_changelog.md.d53ff940.lean.js",revision:null},{url:"CHANGELOG.html",revision:"6d511a6551a081280c83d6cb780bb7d6"},{url:"concepts/flags.html",revision:"6f297fd2f67c431c2b54ffe3967382bc"},{url:"concepts/flavor-transform.html",revision:"eab44c8ba307eef9b9bf60e15ef0d05c"},{url:"concepts/object-media.html",revision:"9477bb06f232a72e23bede1fa2dd3c64"},{url:"index.html",revision:"ada65799a29bb4ea11c0b0f28983c779"},{url:"intro/contributing.html",revision:"56dd87d8332d041293a0f4aa0298e9cb"},{url:"intro/implementing.html",revision:"395c8962a2a15c38c1b1a11f89123899"},{url:"intro/showcase.html",revision:"ac117c7c44d8f22c452c7f5aaa429972"},{url:"intro/what-is-fff.html",revision:"5db19881d0d610dacd8f26867f87f0d1"},{url:"packages/create-fff.html",revision:"63022f9ed805ec7517dbc7b67d7da705"},{url:"packages/fff-flavored-frontmatter.html",revision:"3a482460ef6047fe6015f0d285d225e8"},{url:"packages/fff-transform-presets.html",revision:"84ca06200a22023135b240ee8a4cdab0"},{url:"packages/indiekit-preset-fff.html",revision:"b8581c1ff1c0e913a8b8a1b5958c041b"},{url:"packages/markdown-it-fff.html",revision:"d346d58471991891fea156a51360ad6b"},{url:"packages/remark-fff.html",revision:"f6abbebba98d346e48e724ba1e910682"},{url:"references/fff-flavored-frontmatter.fffaudio.html",revision:"32c59f5eebedff87da6d9dc2686ae3be"},{url:"references/fff-flavored-frontmatter.fffauthor.html",revision:"7bcbf1e9c71130945e61983faf159aca"},{url:"references/fff-flavored-frontmatter.fffbase.html",revision:"f3dd16cf430a4e903953ddfb053c8d5e"},{url:"references/fff-flavored-frontmatter.fffdatetime.html",revision:"5a254a59fef5ed784cbe26a1e22613d9"},{url:"references/fff-flavored-frontmatter.fffextra.html",revision:"042a5a0770d9005eb4d56e95b1bb0770"},{url:"references/fff-flavored-frontmatter.fffflavoredfrontmatter.html",revision:"f7fdea53a8846f210987b068d30a656d"},{url:"references/fff-flavored-frontmatter.fffimage.html",revision:"ada82eaab91de6571380d0497fc1ee0c"},{url:"references/fff-flavored-frontmatter.fffmedia.html",revision:"6c2c7ef7dfce2cbe7633ce904034023b"},{url:"references/fff-flavored-frontmatter.fffmention.html",revision:"b5be5e0556c990243abeaaf313a1a1c9"},{url:"references/fff-flavored-frontmatter.fffoptionaltype.html",revision:"82fa917d2a2c0d2880d98456d8b7490b"},{url:"references/fff-flavored-frontmatter.ffftransformpreset.html",revision:"fcb3d02885f499d17acfaf3d836dc19d"},{url:"references/fff-flavored-frontmatter.ffftransformpresetvalue.html",revision:"7559987628d64d0ddf16901a4f55d326"},{url:"references/fff-flavored-frontmatter.fffvideo.html",revision:"5da2710671b6a0be3a500597b859a181"},{url:"references/fff-flavored-frontmatter.html",revision:"380438a462ecf1f254872bd6fb5c1a5b"},{url:"references/fff-flavored-frontmatter.posttype.html",revision:"3ffcab92d48645751a7db7b43dd82fa4"},{url:"references/fff-flavored-frontmatter.posttypediscovery.html",revision:"f38a722fa8c3d52b684cd5dd3275868d"},{url:"references/fff-flavored-frontmatter.strict.html",revision:"3695e7c428cdb6075d2523c7582f8c8e"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.categories.html",revision:"d3eb8e8b4310a194eb20011dc01e074c"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.html",revision:"0cce2456ab5c3b7060266e2bfb624fb1"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.lang.html",revision:"fba1e2f8dda8a3ab6aeb574b06606e37"},{url:"references/fff-flavored-frontmatter.strictpresetoptions.media.html",revision:"c32e2017b2682aeb40602b5bd6c82a51"},{url:"references/fff-flavored-frontmatter.tojsonfeeditem.html",revision:"569fa10cb9e68d435ef2c9a59b06e745"},{url:"references/fff-flavored-frontmatter.transform.html",revision:"a5e3d3a3cbddc4db00aa4ed333eaed1e"},{url:"references/fff-transform-presets.hexo.html",revision:"5dc11cccd2fb0113e0f3e8222a0f7c88"},{url:"references/fff-transform-presets.html",revision:"c5458ff3825355985716a7c729623445"},{url:"references/fff-transform-presets.hugo.html",revision:"1dd77dde9e4d3420dce22d94adcdcaab"},{url:"references/fff-transform-presets.jekyll.html",revision:"00d2d3486dcab1b285873b54cf6c6e0f"},{url:"references/fff-transform-presets.mditvue.html",revision:"22b435423446b80629bb890c1c29b467"},{url:"references/fff-transform-presets.nuxt.html",revision:"fac3e9a3b3cf5860463019c2e06d0fe4"},{url:"references/fff-transform-presets.nuxtthemealpine.html",revision:"bdaff7fcbc547ea5efc909e7b040e9e6"},{url:"references/index.html",revision:"f1d30abd42387261898519883fe2d795"},{url:"references/indiekit-preset-fff.html",revision:"c71e4143ecb3bc08dce27bf3435d1296"},{url:"references/indiekit-preset-fff.indiekitpresetfff._constructor_.html",revision:"786dbef84b9549379254415b42fa1193"},{url:"references/indiekit-preset-fff.indiekitpresetfff.html",revision:"a93eb5f0693b6a88f7ba438bc43c6c52"},{url:"references/indiekit-preset-fff.indiekitpresetfff.id.html",revision:"7ad3d7ae946e2a1ef61b8b185e086401"},{url:"references/indiekit-preset-fff.indiekitpresetfff.info.html",revision:"0056d7253c97642c18b3039a9ba58d70"},{url:"references/indiekit-preset-fff.indiekitpresetfff.init.html",revision:"320c7834162d7eac6af6825b1dc45403"},{url:"references/indiekit-preset-fff.indiekitpresetfff.meta.html",revision:"b2a6a3da8adcaff6a29ffda56b3463ec"},{url:"references/indiekit-preset-fff.indiekitpresetfff.name.html",revision:"c25f8e39f982654ae37f7263a71c23a1"},{url:"references/indiekit-preset-fff.indiekitpresetfff.options.html",revision:"c15c2ab7f951bef6a0a3a1c782434f85"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttemplate.html",revision:"fcf9ac4bcc586a98f01ab7b88f42e1e0"},{url:"references/indiekit-preset-fff.indiekitpresetfff.posttypes.html",revision:"be5a43786363db0013e0253c36d86039"},{url:"references/indiekit-preset-fff.indiekitpresetfff.prompts.html",revision:"af472a54ccd49ec72dfe59cbd9417684"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.format.html",revision:"dabab4aa4ae02ff8a5265e83aae9eb4f"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.html",revision:"7ce248566ad64b555ca1a9ef9bd4ac16"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.strict.html",revision:"ac189b3a3d9f7f40e5e23d7a98b5c4f6"},{url:"references/indiekit-preset-fff.indiekitpresetfffoptions.types.html",revision:"863d2f0494823aef61976281debf5bd8"},{url:"references/markdown-it-fff.fffplugin.html",revision:"da7cc6fa10be36a287a92b89609dc8d2"},{url:"references/markdown-it-fff.fffpluginoptions.html",revision:"7630ca3053a73023e89a65a8c4cc67ea"},{url:"references/markdown-it-fff.fffpluginoptions.presets.html",revision:"a8d435a23f04541152ef93b61f0dc381"},{url:"references/markdown-it-fff.fffpluginoptions.strict.html",revision:"9e87c048bb693e3901627cb568fdc11c"},{url:"references/markdown-it-fff.html",revision:"533be87460a408cb63341a13d4390084"},{url:"references/remark-fff.fs.html",revision:"bfdba4dab6675a1550f22c20d22e8a5b"},{url:"references/remark-fff.git.html",revision:"f43c64175dc7eba7ea8071d895d494ec"},{url:"references/remark-fff.html",revision:"6ebdade55db3d5e4cc5b186b1ac6a38f"},{url:"references/remark-fff.path.html",revision:"d84a33839700aa2d61f81064c39a6695"},{url:"references/remark-fff.remarkfff.html",revision:"e3a5395910719ba84f8ece09e6571d8a"},{url:"references/remark-fff.remarkfffoptions.autofill.html",revision:"ea54669b178fb6375eeaf8a628ce406c"},{url:"references/remark-fff.remarkfffoptions.html",revision:"3d08d2438365f0d807d9705ad9cf05ae"},{url:"references/remark-fff.remarkfffoptions.presets.html",revision:"b4f966278ae4fa402fe4920403b5f7ee"},{url:"references/remark-fff.remarkfffoptions.strict.html",revision:"d8f7c9054fec50aa33116fe5f290033c"},{url:"references/remark-fff.remarkfffoptions.target.html",revision:"c3d2fe59e49351374cdd5cd044d35271"},{url:"version/0.1.html",revision:"e83a8712ed64bfddfff579b373120ce3"},{url:"version/0.2.html",revision:"3840a6939abe939a01a3925b61cd498a"},{url:"version/0.3.html",revision:"9f3099d2d18d7f28564e39b770cc0e3a"},{url:"version/0.4.html",revision:"df6faa8df621b1e9517cda070bd88021"},{url:"version/0.5.html",revision:"3ded8544be586de251a6861664c852ee"},{url:"version/1.0.html",revision:"c2d40593d71994a9b7587565a6ed0789"},{url:"version/1.1.html",revision:"22a63c9e97dabb03e76faab8366ded4d"},{url:"version/changelog.html",revision:"38ca18e8c2a522269102021c5398be05"},{url:"manifest.webmanifest",revision:"bfc13fa9b61ca7cf80d86e016a851524"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:10})]}),"GET")}));
