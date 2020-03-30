const staticCacheName = 'site-static';
const assets = [
    'index.html',
    'js/app.js',
    'js/materialize.min.js',
    'js/init.js',
    'css/style.css',
    'css/materialize.min.css',
    'manifest.json',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
];

// // install event
// self.addEventListener('install', async evt => {
//     //console.log('service worker installed');
//     evt.waitUntil(
//         caches.open(staticCacheName).then((cache) => {
//             console.log('caching shell assets');
//             cache.addAll(assets);
//         })
//     );
// });



// // activate event
// self.addEventListener('activate', evt => {
//     console.log('service worker activated');
// });
//
// self.addEventListener("fetch", function(event) {
//     console.log("fetch event fired")
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             if (response) {
//                 return response; //return the matching entry found
//             }
//             return fetch(event.request);
//         })
//     );
// });


self.addEventListener('install', async e => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(assets);
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
    return self.skipWaiting();
});



self.addEventListener('activate', async e => {
    self.clients.claim().then(r => {
        console.log("service worker activated");
    });
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(staticCacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(staticCacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}