// service-worker.js 

const CACHE_NAME = 'portfolio-cache-v1'; const urlsToCache = ['/', '/404.html', '/404.css', '/script.js',];// Ajoutez d'autres fichiers nécessaires 
// Installation du service worker et mise en cache des fichiers
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => { return cache.addAll(urlsToCache); })); });

// Activation du service worker et nettoyage du cache
self.addEventListener('activate', (event) => { const cacheWhitelist = [CACHE_NAME]; event.waitUntil(caches.keys().then((cacheNames) => { return Promise.all(cacheNames.map((cacheName) => { if (!cacheWhitelist.includes(cacheName)) { return caches.delete(cacheName); } })); })); });
// Récupération des ressources, utilisation du cache si hors ligne
self.addEventListener('fetch', (event) => { event.respondWith(caches.match(event.request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; } return fetch(event.request); }).catch(() => { return caches.match('/404.html'); })); });
// Si l'utilisateur est hors ligne, renvoyer la page 404 


window.oai_logHTML ? window.oai_logHTML() : window.oai_SSR_HTML = window.oai_SSR_HTMLDate.now(); requestAnimationFrame((function () { window.oai_logTTI ? window.oai_logTTI() : window.oai_SSR_TTI = window.oai_SSR_TTIDate.now() }))