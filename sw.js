/* sw.js - The System. Keep it next to index.html, manifest.webmanifest and the icons, and serve all of them over HTTPS.
   It makes the app installable and usable offline, shows notifications, and focuses the app when one is tapped.
   Bump CACHE when you want every device to drop its old copy. */
const CACHE = 'system-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {                    // network first, so updates arrive at once; cache only when offline
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => {
    if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if(e.action === 'dismiss') return;
  e.waitUntil(self.clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => {
    for(const c of list){ if('focus' in c) return c.focus(); }
    return self.clients.openWindow(self.registration.scope);
  }));
});
