// LMS English - Service Worker
// Version: 1.0.0

const CACHE_NAME = 'lms-english-v1';
const STATIC_CACHE = 'lms-english-static-v1';
const DYNAMIC_CACHE = 'lms-english-dynamic-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/LMSDTI-English/',
  '/LMSDTI-English/LMS-English-DTI.html',
  '/LMSDTI-English/manifest.json',
  // External resources (will be cached when fetched)
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.log('[SW] Static cache failed:', err);
      })
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - network first with cache fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Google Sheets API requests (always fetch fresh)
  if (url.hostname.includes('google.com') || url.hostname.includes('googleapis.com')) {
    return;
  }

  // Strategy: Network first, then cache fallback
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // If successful, update cache
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If not in cache, return offline fallback for HTML
          if (request.mode === 'navigate') {
            return caches.match('/LMSDTI-English/LMS-English-DTI.html');
          }
          // Return a simple offline response for other resources
          return new Response('Offline - Resource not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Background sync for offline form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('[SW] Background sync triggered');
    // Future: sync offline data when back online
  }
});

// Push notification support (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Notifikasi baru dari LMS English',
      icon: '/LMSDTI-English/icons/icon-192x192.png',
      badge: '/LMSDTI-English/icons/icon-72x72.png',
      tag: data.tag || 'default',
      requireInteraction: false
    };
    event.waitUntil(
      self.registration.showNotification(data.title || 'LMS English', options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/LMSDTI-English/')
  );
});
