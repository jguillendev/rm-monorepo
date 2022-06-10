const fs = require('fs');
const glob = require('glob');
const path = require('path');
const mkdirp = require('mkdirp');

const buildFolder = path.resolve('dist');
const staticFolder = path.resolve('dist'); //path.join(buildFolder, 'static');
const staticSecretFolder = path.join(buildFolder, 'static-secret');

console.log("postBuild:moving:files *.map");
const files = glob.sync('**/**.map', {cwd: staticFolder});
files.forEach(file => {
    const oldPath = path.join(staticFolder, file);
    const newPath = path.join(staticSecretFolder, file);
    mkdirp.sync(path.parse(newPath).dir);
    fs.renameSync(oldPath, newPath);
});