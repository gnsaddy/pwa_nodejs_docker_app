const staticCacheName = 'site-static';
const assets = [
    'index.html',
    'js/app.js',
    'js/materialize.min.js',
    'js/init.js',
    'css/style.css',
    'css/materialize.min.css',

    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

self.addEventListener("fetch", function(event) {
    console.log("fetch event fired")
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response; //return the matching entry found
            }
            return fetch(event.request);
        })
    );
});