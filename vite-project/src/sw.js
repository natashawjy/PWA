import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

// Add event listeners
self.addEventListener('install', (event) => {
    console.log('install:')
    // Do something when the service worker is installed
});

self.addEventListener('activate', (event) => {
    console.log('activate:')
    // Do something when the service worker is activated
});

self.addEventListener('fetch', (event) => {
    console.log('fetch:')
    // Do something when a resource is fetched
});

self.addEventListener('push', (event) => {
    console.log('push:')
    // Do something when a push notification is ..
});