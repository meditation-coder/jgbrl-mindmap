if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let t={};const d=e=>a(e,b),i={module:{uri:b},exports:t,require:d};s[b]=Promise.all(c.map((e=>i[e]||d(e)))).then((e=>(f(...e),t)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"97f8e9fe44649c28114fdedd27a6c2da"},{url:"about.html",revision:"e5d4a8fbaed56ac0939db4e56be754f4"},{url:"assets/（一）种性不断.html-102f4e2e.js",revision:"86bd5d4693f982f1f7976a34e03e5580"},{url:"assets/（一）种性不断.html-cff82fb9.js",revision:"05327531770fed9cabddce854d35fd2e"},{url:"assets/（七）立名.html-859eb0a5.js",revision:"a282c18d4f369f9f176795d5eeb7c4f8"},{url:"assets/（七）立名.html-f70706e5.js",revision:"d39568e3ba4a97c89d3476ebc72d9b0f"},{url:"assets/（三）行所住处.html-19dc6c4b.js",revision:"4fb0794c978142918da3814f862f5bbc"},{url:"assets/（三）行所住处.html-a9d9663d.js",revision:"f7369cd95338b72a772365513078e685"},{url:"assets/（二）发起行相.html-1938f3c5.js",revision:"03564fff3e43fdbedb091609f21cbbd3"},{url:"assets/（二）发起行相.html-5f4bd5b9.js",revision:"7a53cbaf326ca3aaec72d0edc5461395"},{url:"assets/（五）不失.html-714a3f4a.js",revision:"36c930dcaa967455cd5a41e412fa4b64"},{url:"assets/（五）不失.html-8d37ee09.js",revision:"ca63972d6060b3ad14a717044ecdb3c7"},{url:"assets/（六）地.html-3794f39a.js",revision:"5c5a91f7a6f2ae19ed8ac060559bd6db"},{url:"assets/（六）地.html-f18672f7.js",revision:"b18ff452c09e943f24912d649478b0f8"},{url:"assets/（四）对治.html-5a8d9448.js",revision:"069dba25d362e427ec44a18eb73b6b50"},{url:"assets/（四）对治.html-6ee5f5a7.js",revision:"b5c64f475c8a6ceb89f77383c893257f"},{url:"assets/404.html-513c93c1.js",revision:"23a561a8f15ae0504a89f0d1cf511de6"},{url:"assets/404.html-5fc877a0.js",revision:"2fdde65631bc4908da529ef19b21c181"},{url:"assets/about.html-088ccac4.js",revision:"cd82a7f48ace42bd866a4e8ef81c3a15"},{url:"assets/about.html-69ae177e.js",revision:"2fd37cc8ffb8a084b37bb84861817bf2"},{url:"assets/app-283cb972.js",revision:"4b37632298d9a76a6b7a6dcef27984d5"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/download.html-3de04192.js",revision:"91de09c3cd1ce55a6f3c6bf3701621f9"},{url:"assets/download.html-fd83a5de.js",revision:"45d307354ce1e627ce1b415ae419e8bb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-03f3a873.js",revision:"9bb4d93366009fc7b13b8ff709cdb61e"},{url:"assets/index.html-2d571823.js",revision:"887577f61a4b5d27ad9e2737a7bae947"},{url:"assets/style-f9ae40f6.css",revision:"b02752b21c6f26ec87ca8d4226f332da"},{url:"assets/七义句.html-d5ed3e57.js",revision:"24ffe50dd9c7dbb4ed4043784f59b66d"},{url:"assets/七义句.html-f9b65a87.js",revision:"51af219a07ccb92321d6cfb5588d25d5"},{url:"assets/经文01.html-6cbb0e2d.js",revision:"53a099a1d72b37e92739c7ba30f7309c"},{url:"assets/经文01.html-fd2ef614.js",revision:"64bb6b9bb5dbdf256b21f5bc5ce4c31b"},{url:"assets/经文02.html-6d0d8a52.js",revision:"9147c0e5b44310ee8d433d6702fd9463"},{url:"assets/经文02.html-cda2ee23.js",revision:"b53c7b5784e699ae12dc12e8005bb54a"},{url:"assets/经文03.html-79cf181d.js",revision:"85175a6e5c8b1ceb68483baabded5cfe"},{url:"assets/经文03.html-b6a83110.js",revision:"c24fff724af39737c0101283c1a59e5b"},{url:"assets/经文04.html-7cb69032.js",revision:"8112d160e6b9b4ba0b6c447e72634f76"},{url:"assets/经文04.html-fbfe2a76.js",revision:"447fd370a8cf48bea9c00b30088c8fc9"},{url:"assets/经文05.html-198f74e3.js",revision:"0f33a0842d652c465c9a00496f2c0448"},{url:"assets/经文05.html-79930420.js",revision:"f7de3301ddc0606c8e2c93f30b806756"},{url:"assets/经文06.html-344e9808.js",revision:"20c264d7cb3572a783c741e0d6e95233"},{url:"assets/经文06.html-66cc4b34.js",revision:"e739203720162af132b89bc6de466b9a"},{url:"assets/经文07.html-80ae847c.js",revision:"db759127f70f6395359472896d4a447b"},{url:"assets/经文07.html-e029b01c.js",revision:"1957e04c604bddfd37e71df41e4b3139"},{url:"assets/经文08.html-3d8be30f.js",revision:"05c4e6567327bfcbb433fb5a3b608bc8"},{url:"assets/经文08.html-e7cdcea8.js",revision:"e1641f943135727eb18077448fc9231b"},{url:"assets/经文09.html-74f961f7.js",revision:"1f746ac497caa7708d9ffd6a3c753abf"},{url:"assets/经文09.html-9c6e704c.js",revision:"0af056f36235cc722012ddc520fcca9e"},{url:"assets/经文10.html-318e0e6a.js",revision:"6035e3f74ca82dab5659573dcd8b4b96"},{url:"assets/经文10.html-a24b0633.js",revision:"7e9cfba7c1b2dac56d9d96a902c5700c"},{url:"assets/经文11.html-a5c3e8ec.js",revision:"00eccee2ee0bed2e06b9057666655b52"},{url:"assets/经文11.html-c1bc7e4b.js",revision:"eac05c5dd333bd3e59fd518a215f913b"},{url:"assets/经文12.html-b26a5112.js",revision:"3f1333cfe3b68e4dd47b96f7d2274db7"},{url:"assets/经文12.html-ea327632.js",revision:"f662dc7bc96c289a86bec5625b21f964"},{url:"assets/经文13.html-7f430ae6.js",revision:"09c34313ddcf7a4f4b6fe54cbcc62aa8"},{url:"assets/经文13.html-daa81d36.js",revision:"cea353feb515ff1b4c033032075ea5d2"},{url:"assets/经文14.html-441c34e0.js",revision:"e0710178d41655f50ab025c124b45481"},{url:"assets/经文14.html-e413ad83.js",revision:"2b40d168b345e9a41d72e5993a741a9c"},{url:"assets/经文15.html-6118d113.js",revision:"da712ae8ab22e5ae4014427287643800"},{url:"assets/经文15.html-c09eaa0b.js",revision:"3a24b01650c617c55be8d2acffd592b7"},{url:"assets/经文16.html-14b664a2.js",revision:"a797c364d5b657649fea1a5674578177"},{url:"assets/经文16.html-912ad96d.js",revision:"49d5c9b48b6b9424cc40a6c04e7ae335"},{url:"assets/经文17.html-1f0284be.js",revision:"81639f85f9f368469c614545ea90a8c0"},{url:"assets/经文17.html-999ef85b.js",revision:"8eb8b4b048f09d13130ee287b2c031c4"},{url:"assets/经文18.html-5e36d9fd.js",revision:"2ea65659194ed1709cdcb9842c3b4a89"},{url:"assets/经文18.html-62bad3e8.js",revision:"9755501023bf4620dd4e31192a861556"},{url:"assets/经文19.html-7834fea9.js",revision:"d0ab7b9c34cf1ed41cbfd6830e4716ef"},{url:"assets/经文19.html-b2c23ce0.js",revision:"8ce5469936812a0870f7b43b73771c56"},{url:"assets/经文20.html-a7191b92.js",revision:"d1c30e578c6e657123180338679a1d7f"},{url:"assets/经文20.html-ec054f1f.js",revision:"3e77896afd1716c7fc09259191b1346d"},{url:"assets/经文21.html-72c23112.js",revision:"212baf801c7d29a984875fa1f49823fe"},{url:"assets/经文21.html-c6cab7a9.js",revision:"93046722f8cd69fca617468e0367ba84"},{url:"assets/经文22.html-4eda42f5.js",revision:"2447ebf1f0cd8bad5351fa46363927f8"},{url:"assets/经文22.html-56feb820.js",revision:"ff3f4f02103e3f02473e28060d887084"},{url:"assets/经文23.html-4fa8fe59.js",revision:"51861ee79492c07ec60dc77cba2b5633"},{url:"assets/经文23.html-ba075f52.js",revision:"9bfb79fa020d85024813a0662fcdc5b8"},{url:"assets/经文24.html-4bb9e840.js",revision:"887d50f4905c6d0b5dd5f587c6115142"},{url:"assets/经文24.html-5ef8e5b7.js",revision:"3921865c46734d2dda1178d1f49fc370"},{url:"assets/经文25.html-40281ac0.js",revision:"e04de64bb52b860e32ab09dcba6b7e22"},{url:"assets/经文25.html-948655d2.js",revision:"bad94202aab0e8749c1632c969ae6366"},{url:"assets/经文26.html-6dbbf219.js",revision:"171bd31edfd11a090cef630f8161f008"},{url:"assets/经文26.html-8155aeb8.js",revision:"fc1060a2ffcbc5b309cf0b8da16893e1"},{url:"assets/经文27.html-662dfebe.js",revision:"99bb99cd22a44ad05231d3739b0ee335"},{url:"assets/经文27.html-de58a440.js",revision:"c9584f6fd7e6c78f869dfd5c74d8570e"},{url:"assets/经文28.html-4484c05f.js",revision:"17668215ee91c33a49cf6562053ec749"},{url:"assets/经文28.html-a4882d66.js",revision:"5ffeeb2b979392d27af6c820f32f853b"},{url:"assets/经文29.html-a4429644.js",revision:"a69d714ec5c0045affeeb14cbc85f124"},{url:"assets/经文29.html-fff67885.js",revision:"15325dd9a38cb413200bb2ab68c7f31b"},{url:"assets/经文30.html-0a2caf8c.js",revision:"abd650930075d0e710523eed71c6501f"},{url:"assets/经文30.html-36f956de.js",revision:"155332c421477bd5e077e8d4f4afdf4c"},{url:"assets/经文31.html-989da1fb.js",revision:"9a074e2f0ba7f13cfd5d36da5b7a2183"},{url:"assets/经文31.html-fbc438c1.js",revision:"18436529a2c788305e67880310251adc"},{url:"assets/经文32.html-58b73e56.js",revision:"b7943686ed44f24bf6db9ca58f0b5c07"},{url:"assets/经文32.html-bde69e95.js",revision:"0c69a36ef55207e299ba87713eba96d9"},{url:"assets/经文33.html-71b13c5e.js",revision:"bf383cc72a8bb7cc2ff211b2f3187609"},{url:"assets/经文33.html-965ce58d.js",revision:"4908ef0eae85954f29b572a74181d611"},{url:"assets/经文34.html-157dc43a.js",revision:"46beac65676bfd8472722d14459a21f2"},{url:"assets/经文34.html-a03cd791.js",revision:"4db6c75b91fe7b19e22cc90faef441aa"},{url:"assets/经文35.html-d45decc2.js",revision:"b1950dfc6fa548b8d88e3e1067b75724"},{url:"assets/经文35.html-f968f538.js",revision:"114e6b49d4a555e6668212d8e03b4e8b"},{url:"assets/说明.html-4b4371aa.js",revision:"a44e8c3ca8cae73bb353792a743b35d3"},{url:"assets/说明.html-ec0a90e0.js",revision:"52ae639e08ec41e96cf21f3155e7b26c"},{url:"content/（一）种性不断.html",revision:"e4d94a50c9b4ab94fae83ac66295b392"},{url:"content/（七）立名.html",revision:"34f8247dc337160e29a7e4ad7a9b4739"},{url:"content/（三）行所住处.html",revision:"530db9a87b13275765b3496d08589f17"},{url:"content/（二）发起行相.html",revision:"b74f405c49b0292e78d798df195d0286"},{url:"content/（五）不失.html",revision:"762edcf8bb66e763185782097b1e7fb8"},{url:"content/（六）地.html",revision:"540d4b9b5698aa70546c9c010d5599a1"},{url:"content/（四）对治.html",revision:"dbe0bc6a24c8f6001208eaeb2b2f912a"},{url:"content/七义句.html",revision:"f9c83f61dd0b3ca5c18f61310dce39d4"},{url:"content/经文01.html",revision:"de33f03e0be3eb88732165fe47dfe639"},{url:"content/经文02.html",revision:"00a5269539795351deafa2daced0e342"},{url:"content/经文03.html",revision:"80f00a6c672972e503fb0cb8b506ab6e"},{url:"content/经文04.html",revision:"97b3a7dbb11887e78dee884716d30ab1"},{url:"content/经文05.html",revision:"4ab4d6efe64c9d39c1a6b72e897e9551"},{url:"content/经文06.html",revision:"409d2153365bcf1d15fb4860ca702778"},{url:"content/经文07.html",revision:"5c8101309c6f6cb74be84921453049bd"},{url:"content/经文08.html",revision:"439bd6ce86f8f490c6e72079a2c25d2d"},{url:"content/经文09.html",revision:"42ac233f986f47653d787fef5e55ffac"},{url:"content/经文10.html",revision:"f4a0fbb5900418cf353d92acf12ce2eb"},{url:"content/经文11.html",revision:"de287fd2675720dd684d82366860f72f"},{url:"content/经文12.html",revision:"d389856a48b8e8e950db7b8a0e3d4007"},{url:"content/经文13.html",revision:"59b6f979eddf43df4a68e0591b11823f"},{url:"content/经文14.html",revision:"2c6516b8d006422e375a07651927a657"},{url:"content/经文15.html",revision:"f2d03719737960f5fe495cb6e2d07595"},{url:"content/经文16.html",revision:"14d6011a20ee54acc7ba8b1a192826d8"},{url:"content/经文17.html",revision:"85f37fa7af9bfa7c1eac685027fc971d"},{url:"content/经文18.html",revision:"cac84b2fdeb8fe164e69e3ebcbd47518"},{url:"content/经文19.html",revision:"dd7f76d83d61e5f9fa241674233acfbc"},{url:"content/经文20.html",revision:"a91036cebef3218ce23adbc048ab5392"},{url:"content/经文21.html",revision:"77a075e88af4565695d9094faa715a4a"},{url:"content/经文22.html",revision:"effc7be2f320a76e863eb4acee9d0eac"},{url:"content/经文23.html",revision:"919a965ea2a447f9ede62d9ef074b770"},{url:"content/经文24.html",revision:"ba4cdffb82b111e7912f27c9017f2950"},{url:"content/经文25.html",revision:"8565df07c579599e7ec0563a4b40c057"},{url:"content/经文26.html",revision:"cbaf88c570e1f881228e7ef5f3d4b2b3"},{url:"content/经文27.html",revision:"4f4f8673d027a745bab81c73a07d69cb"},{url:"content/经文28.html",revision:"8d95ab0cffd0163a1d8b665f34e4f170"},{url:"content/经文29.html",revision:"e8ff89b9dea72d3985cc78b0c814670b"},{url:"content/经文30.html",revision:"1846cc263e98241430208f9c0637ba9a"},{url:"content/经文31.html",revision:"10fe223125c05cb21cd0f6aa3975e960"},{url:"content/经文32.html",revision:"48491cd72c78c7f5120fb814fd380698"},{url:"content/经文33.html",revision:"8eaa54a7515f81cfd806623afde7a90d"},{url:"content/经文34.html",revision:"4ee31b15b4bf444303e38a995a31548f"},{url:"content/经文35.html",revision:"615b4541dfdf49daa7ccb3222a306f1f"},{url:"content/说明.html",revision:"3276f6b04e920bb52f305cc0d609be79"},{url:"download.html",revision:"00c73bc61825e13462e410070744a313"},{url:"images/android-chrome-192x192.png",revision:"1d4e9bf2b7bc519edf2cb7dedf92664f"},{url:"images/android-chrome-512x512.png",revision:"d5ecb1652f2762d30424862570ab2e64"},{url:"images/apple-touch-icon.png",revision:"cfcb7417fba45d848b247924eea3f2bc"},{url:"images/favicon-16x16.png",revision:"40e3783843387e8dd7cca1ba3f66b327"},{url:"images/favicon-32x32.png",revision:"7d60350cf893b86f7e887ebf82f365f2"},{url:"images/lotus.png",revision:"e125585b5f3a3378d5867ef048188784"},{url:"images/zoomIn.svg",revision:"7393db490c10e1225af2bea630dff600"},{url:"images/zoomOut.svg",revision:"950d42d1105146a1868ba45ac2ed54f5"},{url:"index.html",revision:"d2276b2f0bacc363b13c63c7aeb550e2"},{url:"pdfjs/pdf.min.js",revision:"96de323330f8b8336f637a0051835e00"},{url:"pdfjs/pdf.worker.min.js",revision:"a53a71a2a5d618ed0f86ebf099db032a"}],{})}));
