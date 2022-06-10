importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
console.log('Hello from public/dev-service-worker.js');

//import {registerRoute, Route} from 'workbox-routing';
//import {NetworkFirst, CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
//import {ExpirationPlugin} from 'workbox-expiration';
//import {CacheableResponsePlugin} from 'workbox-cacheable-response';
//import {createHandlerBoundToURL} from 'workbox-precaching';

// https://developer.chrome.com/docs/workbox/modules/workbox-strategies/
// https://developer.chrome.com/docs/workbox/modules/workbox-sw/
const {registerRoute, Route} = workbox.routing;
const {CacheFirst, NetworkFirst, StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponse} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;


// Cache API REQUEST
const apiRoute = new Route(
  // Cache API Request
  ({ url, request }) => {
    request.mode === 'navigate';
    url.pathname === '/api/(.*)';
  },
  new StaleWhileRevalidate({
       cacheName: 'apiCache',
       plugins : [
          new ExpirationPlugin({
              maxEntries: 100,
              maxAgeSeconds: 30 * 60 // 30 Minutes
          })
      ]
  })
);

// Cache page navigations (html) with a Network First strategy
const pagesRoute = new Route(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

// Handle images:
const imageRoute = new Route(({ request }) => {
  return request.destination === 'image'
}, new CacheFirst({
  cacheName: 'images',
  plugins: [
    // Ensure that only requests that result in a 200 status are cached
    new CacheableResponse({
      statuses: [200],
    }),
    new ExpirationPlugin({
      // Only cache requests for a week
      maxAgeSeconds: 7 * 24 * 60 * 60,
      // Only cache 10 requests.
      maxEntries: 10,
    }),
  ]
}));

// Handle scripts:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new StaleWhileRevalidate({
  cacheName: 'scripts',
  plugins: [
    // Ensure that only requests that result in a 200 status are cached
    new CacheableResponse({
      statuses: [200],
    })
  ]
}));

const assetsRoute = new Route(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'assets',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

// Handle styles:
const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style';
}, new CacheFirst({
  cacheName: 'styles',
  plugins: [
    // Ensure that only requests that result in a 200 status are cached
    new CacheableResponse({
      statuses: [200],
    }),
  ],
}));

// Register routes
registerRoute(fStorageRoute);
registerRoute(apiRoute);
registerRoute(pagesRoute);
registerRoute(imageRoute);
registerRoute(scriptsRoute);
registerRoute(assetsRoute);
registerRoute(stylesRoute);