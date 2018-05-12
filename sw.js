const staticAssets = [
    './',
    './style/style.css',
    './js/app.js'
];

self.addEventListener('install', async event=>{
    const cache = await caches.open('static-assits');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event=>{
    const req = event.request;
    const url = new URL(req.url);
    if(url.origin == location.origin){
        event.respondWith(cacheFirst(req));
    }else{
        event.respondWith(networkFirst(req));
    }
    
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(request) {
    const dynamicCache = await caches.open('meow-dynamic');
    try {
      const networkResponse = await fetch(request);
      dynamicCache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (err) {
      const cachedResponse = await dynamicCache.match(request);
      return cachedResponse || await caches.match('./fallback.json');
    }
  }