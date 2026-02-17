self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('otto-cache').then(function(cache) {
      return cache.addAll([
        '/otto-ui/',
        '/otto-ui/index.html',
        '/otto-ui/control.html',
        '/otto-ui/activity.html',
        '/otto-ui/settings.html',
        '/otto-ui/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
