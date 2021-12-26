/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b1fdc85a50e05e918a39e5269c5fb5d4"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1160f6fc.css",
    "revision": "da50c7329dbabc55c05c83b1af8b7e8a"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/report_add.64355dfa.png",
    "revision": "64355dfabae01158a19d040468a18319"
  },
  {
    "url": "assets/img/report_all.fcf0b931.png",
    "revision": "fcf0b9313e1be0b7c7881d770c14a8bd"
  },
  {
    "url": "assets/img/report_delete.854a8b28.png",
    "revision": "854a8b2812bab47ee271fc2e7449f5e3"
  },
  {
    "url": "assets/img/report_id.461a457a.png",
    "revision": "461a457a48ead6526428579b6dd3161e"
  },
  {
    "url": "assets/img/report_update.d1e62161.png",
    "revision": "d1e62161baed80bc45f0fd29b8e9ac8a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.baa31513.js",
    "revision": "7c3183bb28914e7eca93f8097e64cdf1"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.a50296b3.js",
    "revision": "7c93c89d0f9d2ddf7d39e76368930a9e"
  },
  {
    "url": "assets/js/14.eed6fbcb.js",
    "revision": "fc8adf744f64945e3fb309f06e74d6fa"
  },
  {
    "url": "assets/js/15.90a7e12c.js",
    "revision": "e989c24d3da7f7b7bc46e2ed54fe5a80"
  },
  {
    "url": "assets/js/16.cdf1bbb6.js",
    "revision": "c681404875593399abe876f9455b2612"
  },
  {
    "url": "assets/js/17.8dd5a120.js",
    "revision": "eaea2412e574f47f61ca2c6aeee68fe4"
  },
  {
    "url": "assets/js/18.2002ca3b.js",
    "revision": "6af711dd7b6113961f64b141e3d6c4b6"
  },
  {
    "url": "assets/js/19.2adfda0e.js",
    "revision": "8ac4f4ef684ac3ae5ed5d4b6d518c90e"
  },
  {
    "url": "assets/js/2.8e5ca1c9.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.99e426d5.js",
    "revision": "3c21c8bb38bfd774f1f6198656a6f0af"
  },
  {
    "url": "assets/js/21.1d51b010.js",
    "revision": "67123a3bbb9eb9b750299491eaee8b97"
  },
  {
    "url": "assets/js/22.4d4c4f29.js",
    "revision": "44e43356c0dc60a2f71edf3bdb9be1f0"
  },
  {
    "url": "assets/js/23.47596ce3.js",
    "revision": "d27f8258b7e6553297a31c458cdee32a"
  },
  {
    "url": "assets/js/24.946ba04b.js",
    "revision": "fbf96e027d47a6effe32a776055c9268"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.d5702423.js",
    "revision": "cfecf2605b180a613a22dfacc2849e24"
  },
  {
    "url": "assets/js/4.d2a8f5de.js",
    "revision": "974cd7ebf648decd1b05afd7fe208993"
  },
  {
    "url": "assets/js/5.66e81c4b.js",
    "revision": "380ea1057a82131278aaa086feeaac57"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.d6fbf01d.js",
    "revision": "46ad7d5ada3793aa18628a96f89ce767"
  },
  {
    "url": "assets/js/8.9bd88bfb.js",
    "revision": "6e77d6755a4be3b51d8e4cbe8328b320"
  },
  {
    "url": "assets/js/9.1a643b85.js",
    "revision": "6226e99f06884b8bcd9391d104337efb"
  },
  {
    "url": "assets/js/app.bd434340.js",
    "revision": "cb07c2600ea528d45c337ab9a33a42e4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b88e617ecae1d8074f435eb8173779f3"
  },
  {
    "url": "design/index.html",
    "revision": "42db7753964d7426ba20526a84b852c4"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "c96d7cb94027bcfbcff7a84f167a181a"
  },
  {
    "url": "intro/index.html",
    "revision": "d298022f3076440ba07591caa0bbb9ef"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "614c708c7ab400b9a92763c822220fde"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f62b8b0af2d956a1a4ae6e0a9e343fac"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e2ff1633e8d3aafe2f9b7d42f6cdfff3"
  },
  {
    "url": "software/index.html",
    "revision": "8e9f3a3ce34dd6813589c5ef77835f87"
  },
  {
    "url": "test/index.html",
    "revision": "3732cc138757bcfb29c8987a668d25f2"
  },
  {
    "url": "use cases/index.html",
    "revision": "7fa194deae786f91b79b9af2c74c6538"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
