# Build Main App

```
$ npm i -g pkg
```

(or use npx pkg... as an alternative to installing globally)

```
$ pkg index.js \
--options max-old-space-size=4096 \
--target node14-macos-x64 \
--out-path dist/bin/
```

## Some config may be needed to ensure all imports work

In `package.json`, add

```json
pkg: {
    "scripts" : [
        "path-a/**/*.js",
        "path-b/**/*.js"
    ],
    "target": "node14-macos-x64",
    "outputPath": "dist/bin/",
}
```

In which case, build with:

```
$ pkg index.js \
--config package.json \
--options max-old-space-size=4096
```

# Run with PM2

```
$ pm2 start ./dist/bin/index --attach
```

# Build and run scripts

```
$ pkg scripts/run.js \
--out-path dist/bin/ \
--target node14-macos-x64
```

Suggest using an args parser like [minimist](https://www.npmjs.com/package/minimist)

```javascript
const argv = require('minimist')(process.argv.slice(2));
```

Then run the script with an argument, e.g. to run `module.exports.test()`

```
$ ./dist/bin/run test
```