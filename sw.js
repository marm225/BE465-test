const staticname = 'site-static';
const assets = ['/', '/app.js', '/aI-interface(survey.html)/boca.alz.life/css/survey.css','/aI-interface(survey.html)/boca.alz.life/lib/howler.min.js',
'/aI-interface(survey.html)/boca.alz.life/lib/TweenMax.min.js', '/aI-interface(survey.html)/boca.alz.life/lib.resources/img/icon.png', '/aI-interface(survey.html)/boca.alz.life/src/survey.js', 
'/aI-interface(survey.html)/boca.alz.life/tests/01_memory_immediate_recall/script.js'
];
//need to add more cache stuff when get source code

//installing service dude
self.addEventListener('install', evt =>  {

    console.log('service worker has been installed');
    evt.waitUntil(
    caches.open(staticname).then(cache => {
        console.log('caching index assets');
        cache.addAll(assets);

    }))
});



//activate service dude
self.addEventListener('activate', evt => {

    console.log('service worker has been activated');
    
});

//fetching stuff
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes ||fetch(evt.request);
        })

    );
});

