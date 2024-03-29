'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3db4d3558c0a11dc4942934a8f4524b7",
"index.html": "5aea0ab759394e9a11dbd96e54067c28",
"/": "5aea0ab759394e9a11dbd96e54067c28",
"main.dart.js": "9560e37c524ac7d70c874127853bc935",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e1484dfaf887b2a396fcc2d1ff821594",
".git/config": "884d7cbe3c62108f13f82b3e016356d4",
".git/objects/9b/db5b5cbd553e2ba1547592463377d70618b32f": "c48170a72ecacad0199c9cdd913ace15",
".git/objects/9e/ec57d6a31554cf9c72180d410532c6ef7baee0": "4b4894f5614dc4b751ff71738acf1ea1",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/c6b357210901325b0a53072a17cf4711d70460": "48db74ec7b64299a7ed8a954c53f2f4b",
".git/objects/6a/5e6dbd5a064bba2e47cabf818148407a7cda75": "c46ab9f834bb20ffc7208b916d7140ec",
".git/objects/56/61b570c044e04afe46cb3c4390f2b23b4ddefd": "a3558e697112aa6b76290a0b45a5ebcb",
".git/objects/51/954a686895b54099643432089d3e8069dd0a7b": "dab6ce4953b2183b38e9f31d9e2a404d",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/8215cd2630589c303e535d48d5970b2cdd2b0f": "eda11337001c9a97c6ce30bc53a61461",
".git/objects/58/61ed05e89fa31b3458d8dc09449a6e5c1f3196": "5f90a137277a3392afbd6ac584805ba7",
".git/objects/58/554994228c4950f2066d5c64bbffd4e824c428": "8114df0533883102f7fe54f35940bb2b",
".git/objects/67/4a9c0cf345d7310837234f34ec31ef24255dea": "8029c28eac999ebab098598a8f13180f",
".git/objects/0e/84151d851563be5f98eeee91cadb8fe4626267": "0c47f5c4235d0d8bdb8beb92e5b1edd6",
".git/objects/33/2f33a058d5eac460fc1b2961214f830522263c": "9950bf9030587c2699e7fef43f1b750b",
".git/objects/9d/60d6833bc1339382774a6de543b3ff4fc82adb": "701a5c6f77f0056b44a22b3baea40351",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/1a23552ea91a40d9945071a8404ed6fff99337": "1c55da08f380c78cb658ee7a28fbea21",
".git/objects/d0/8e3394bddde715140215af6045e0fa8fa75cc5": "d8ad3cbe722f2168973d3e1cce8a7234",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/00489c6483956cacba36bdc56dbb3b232ed507": "5aaded3c3243f0c721183c7fbaa6990b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cf8914a8abe01ced6ee873eebc7d88822651df": "64887f1b77aa91d5701b8d17ef36a153",
".git/objects/d8/b1eda650e467b146f5f4122b0df77bfbde2746": "fbc1c34e9f4b08a615f6b4cbf6988b9d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9710e8d812119219701f56439b399dee22c9d6": "d183a980078b034529d4d58b948c01d9",
".git/objects/ee/9a0c8c507d6a0178ccf87dc565fa5b01203811": "293a7bd677ed27a3f8a72945e45db1fe",
".git/objects/fc/382ae4d2732985cef18a0173952b7710fc3b65": "45d3fba46645b6db2c37e40a77232834",
".git/objects/e3/d68be6784252b1045c5bd53ce456efa3e268d1": "1c131cb4854862c4de08d8e4dbd0442f",
".git/objects/ca/0f8e0537e70e8a909a7ac68085e57fa73f0293": "6871fd7d83dd52fd9d0e6e5b407eece0",
".git/objects/fe/61202953311fd7ad7ebb7222f75d441cb73197": "ff11bdead1b3e93be729618e0a0c384a",
".git/objects/c6/8b6bb0a68b4e8f466867c2bb8127534ef8f72d": "d84258166477c51bf37bb7c11cdd2145",
".git/objects/c6/2743d430dd03a461092c912f1803bc19dc5879": "fabacc73295d6bed06e8d30b9e88bd8d",
".git/objects/c6/cfebd14d3aca8ec6efa14461632e3ce522dcdb": "212df6ec07d182832d74923af7bbf017",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/4b416d1770d87bca42aaa280be741e8e4530fe": "2f60ef65718fca1729ae183826c4ef72",
".git/objects/18/767df6eb3ed9f82c834ff137df093f87c3823b": "9c93d6ef912214109f1566b3e4a90aa0",
".git/objects/18/f607b6d8fe84c2da4b5cd6ca73551b51076ace": "739ce0462e16282aee98826edf7220a8",
".git/objects/27/df274472c9147bbcac277a61bd7a037e7199fa": "c571483fde76de4ae96076edc88f810d",
".git/objects/29/bca7db314a3145c96bddc1a5dfb42b31891960": "4bb4d3885581f72abd1ea99688efa611",
".git/objects/73/aea1bdb5f00a0abd24e6dcae8c8482949f1986": "9ccd708972f298889c8ffd142052c03f",
".git/objects/87/3faffc2cfa07d7d0bff5ef073079a952246789": "ea87ee1a9fd6abf8c340f1f5264dedf5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2aecf082a99d982cd43c0308a9eea99e4636b6": "40f8e44c57d6a2d3eeb2abf2b530da29",
".git/objects/75/a4b8e0e9d23541ad5d56293a3ce0d091878ed7": "c08c2198f95e442e62f8a608bc3b3cb9",
".git/objects/81/17ebbff9b88cb6b35a7f38efe6fb201f8064af": "d561a7acc5d385f07c0a468c6ea316fa",
".git/objects/72/5c83d6cfce47a1c4a204e747cb0ec4e43f203a": "b86de59c7402e2be8ea2de0b0f2d1b29",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ca8cc6ccb49ac0d21b5028f8a1f4f2e075120b": "7c87f3feb9a12e4f74dfb11e7a4ca0ce",
".git/objects/00/dfc385f3fdc94ba2f769af73ba2670137f64f1": "14bb3cb6aee916d76ec9dfa929bb0bdd",
".git/objects/5c/b5dfcac0acb4c9c20d558e4de530c2604b26cf": "9425093aa739ca819927f45183e56972",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/3a/18fd76edbe849c9317ff139261a5f5d2d6c648": "a9140460dec4a8405f673288e2e8e96f",
".git/objects/54/8fbc4065a13b80c80b2447d36a4af57d187fdc": "ee0f069444a58c4d26c678d05b0377f9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/1546d0268f753540cbe8125f328bba6a53888d": "d329718c71d390e4faa3461932920d96",
".git/objects/5b/b973a5c62a767cf7133714b17f4f9c47d3947d": "a286117804644e97ed7a8dc76b482011",
".git/objects/6c/b1c17d39fde294b689a078584ab621b23c4545": "846853f502950086e5ec71ad2c2c36f0",
".git/objects/6c/034245b2d943bcb8ff04f5cfe1ef1921683690": "e83324c39182b65ee1b6635d3a9838d0",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/9e76af0d5fd046245e56ad6942862e920252fd": "0a59f6dcbe081addfad8f9972942e085",
".git/objects/99/634fcc61fc7a076d40a8743e9dd4fca310edff": "2221d2dabb888ea4fa58f4ca1e511d51",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d3/c881e7aca78f3cfba1f339ea40ba52343dc45e": "f0faf9556077f24ac92d1e4e1d0d7bf5",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/5d505e7237dae51d7341c8ba5a4c3811722620": "733735fe51bd20f2116a7facc953e60e",
".git/objects/b8/17dd265b5f82f002a50a676af81a6897a0e963": "c5b797dafde83696f5470ae595af4684",
".git/objects/d2/52aa943bc869fd33677efbec72a49575c82da6": "59d9ba62774d51904b8db5d2b3aef37d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/54ffadc23c8690b7102629408ab519a68e6e14": "968316ee0f9ca18cb968ddfad428426e",
".git/objects/a8/70c309f5f2339a45fc8634f7150f309d9acf0d": "46d0155b9d7c06760c9cfd65c5232188",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ff/74e4a6fbe20407ee6f0b22e5fdd6cf6c6de7ef": "766304d3a4d1c2028c14fc5e18b7ba4c",
".git/objects/e0/c5717e787f2c4583e859ab3b92b545e098352d": "e11ae3716ddbadc5bbf509d20a1083dd",
".git/objects/41/27e9d300398a1bed2182e38b3979315d06e071": "e5d33ee1dc868a72a856a497335d7aa5",
".git/objects/41/5c607bf07b99a85633eb4ecf588f64cab9f1f3": "5dd85afeb2dae625c15f26039f6ca7fa",
".git/objects/83/c4637a9985e4033ee7d8c816d3afa31c2b757f": "dfacc64a5679be9ca2d1d4a841dfeaa3",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/0c711fcbe4a24b09adc7b60a738355b0137c1c": "82273aaefb0766fa48d4b79d5cb27d00",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/25bcf891dd7311ad1743ee593e45a5a3889c21": "8e5adc6edf466c8de33002b65927f660",
".git/objects/1c/5cbb42d7825b9de1e8aedaacbd0078ca4f7ae4": "145e079d107255ae1b81e0c4698c9cb2",
".git/objects/82/3bd28fc656b679b0a275c1182fdd74b157a239": "644ee732c9b270b3633d0180d014695d",
".git/objects/49/8deb545439d54e06911a903bb043f15eb18773": "aa80a7b5baa68d5891078d9cfe9fb4f8",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/b851bffab138326233307eee98fef7c56c3a93": "12a28fe4f2d61da588884eff01e976bc",
".git/objects/2b/c3242af2085fd9d5eb90e41e69be5402fdb5ae": "66776f07b3ebdcec46e097cecf71eae6",
".git/objects/25/9b00217476b9ecf1c4978d62bf2f7226574d23": "495d95473f4e0cdb31e7cf35ffc1881e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11714ee9e9cccf65060958ca21585dc7",
".git/logs/refs/heads/main": "11714ee9e9cccf65060958ca21585dc7",
".git/logs/refs/remotes/origin/main": "97b453cee4a74a61930aed114c580f75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "39e2003175133de688558fbaaf404061",
".git/refs/remotes/origin/main": "39e2003175133de688558fbaaf404061",
".git/index": "554f749131fc44d8b47475408a946d21",
".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
"assets/AssetManifest.json": "6e8322e0f1f4f8e84ef01308932ce2f3",
"assets/NOTICES": "9fbbfd70d6ac9a42929f5465855908db",
"assets/FontManifest.json": "a36fd0920bf78fcfb1614328de1f9b7b",
"assets/AssetManifest.bin.json": "f117595b294124e5c829c9abdb6c2fdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cc6fee655de9b54d4c7395a883d76e9b",
"assets/fonts/MaterialIcons-Regular.otf": "fe9574b0a1ec5d05ce4b1c4991b64963",
"assets/assets/images/laptop1.jpeg": "1851fec0c3707d4b418751c981564cf7",
"assets/assets/fonts/JockeyOne-Regular.ttf": "d4c58485a8aa01b0040ff3c940043dbf",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
