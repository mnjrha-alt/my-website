const CACHE_NAME = 'satoof-v3-cache';
const assets = [
  './',
  './M.png',
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth-compat.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});