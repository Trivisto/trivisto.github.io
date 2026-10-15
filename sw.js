// Trivisto hub offline cache. Only handles the hub's own root files,
// so each app site (/pixel/, /squish/ ...) keeps working on its own.
const VERSION = 'hub-v1';
const CORE = ['./', 'index.html', 'apps.json', 'favicon.svg', 'manifest.webmanifest', 'trivisto-180.png', 'trivisto-192.png', 'trivisto-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('hub-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.slice(1).includes('/')) return; // an app's own site, not the hub
  // network first so new apps show up right away; cache when offline
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
