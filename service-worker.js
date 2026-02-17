const CACHE_NAME = "otto-cache-v1";

const urlsToCache = [
  "/otto-ui/",
  "/otto-ui/index.html",
  "/otto-ui/control.html",
  "/otto-ui/activity.html",
  "/otto-ui/settings.html",
  "/otto-ui/style.css",
  "/otto-ui/otto.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
