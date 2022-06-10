module.exports = {
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{html,js,css,png,svg,jpg,gif,webp,json,woff,woff2,eot,ico,webmanifest,map}'
  ],
  swDest: 'dist/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  // runtimeCaching: [{
  //   urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/,
  //   handler: "cacheFirst",
  //   options: {
  //   cacheName: "images-cache-first",
  //   expiration: { maxEntries: 20, },
  //   },
  // }],
}