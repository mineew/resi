import fs from 'fs';
import pt from 'path';

import {
  defaultAssetName,
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config';

export default defineConfig({
  images: ['public/favicon.svg'],

  preset: {
    ...preset,

    assetName: (...args) => {
      const name = defaultAssetName(...args);
      return `icons/${name}`;
    },
  },

  headLinkOptions: {
    preset: '2023',
  },
});

// -----------------------------------------------------------------------------

function before() {
  const iconsPath = pt.resolve(__dirname, 'public', 'icons');

  fs.access(iconsPath, (error) => {
    if (error?.code === 'ENOENT') {
      fs.mkdir(iconsPath, () => undefined);
    }
  });
}

before();
