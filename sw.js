// sw.js - basic service worker

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  // Optional: skip waiting so it activates immediately
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  // Optional: clean up old caches here later
});

// Fetch event
self.addEventListener("fetch", (event) => {
  // Currently just lets requests pass through
  event.respondWith(fetch(event.request));
});