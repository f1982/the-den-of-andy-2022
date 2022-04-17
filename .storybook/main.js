module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  // https://github.com/storybookjs/storybook/issues/15336#issuecomment-906809203
  "typescript": {
    "reactDocgen": false
  },
  "staticDirs": ['../public']
  // "webpackFinal": async (config, {
  //   configType
  // }) => {
  //   config.module.rules.push({
  //     test: /\.(glb|gltf)$/,
  //     use: ['file-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });
  //   return config;
  // },
}