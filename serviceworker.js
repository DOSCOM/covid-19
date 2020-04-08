var CACHE_NAME = 'testing_1';
var urlsToCache = [
  '/',
  // '/css/*.css',
  // '/images/*.png',
  // '/images/*.JPG',
  // '/images/*.jpg',
  // '/images/*.jpeg',
  // '/images/icons/*.png',
  // '/js/*.js',
  // '/js/*.min.js',
  // '/scss/*.scss',
  // '/scss/bootstrap/*.scss',
  // '/scss/bootstrap/mixins/*.scss',
  // '/scss/bootstrap/utilities/*.scss',
  // '/assets/css/bootstrap.min.css',
  // '/assets/js/*.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('in install service worker ... cache opened!');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
  
self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['testing_1'];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName){
              return cacheName != CACHE_NAME
          }).map(function(cacheName){
              return  caches.delete(cacheName)

          })
        );
      })
    );
  });