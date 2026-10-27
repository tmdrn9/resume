/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;
const basePath = (() => {
  if (NODE_ENV !== 'production' || !homepage) {
    return '';
  }
  try {
    return new URL(homepage).pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
})();

module.exports = withImages({
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        console.log('> Detected homepage url in package.json');
        if (basePath) {
          console.log(`> Apply \'${basePath}\' to assetPrefix(subPath)`);
          return basePath;
        }
        return '';
      } catch {
        console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
        return '';
      }
    }
    return '';
  })(),
});
// withCSS({
// webpack: config => {
//   config.resolve.alias['@'] = __dirname;
//   return config;
// }
// }),
