const fs = require('fs-extra')

// Copy directory, even if it has subdirectories or files
fs.copySync('./src/public/assets', './dist/public/assets');
fs.copySync('./src/public/dev-service-worker.js', './dist/dev-service-worker.js');