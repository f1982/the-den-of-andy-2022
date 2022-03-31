// this is mainly for the Why Did You Render
// https://github.com/welldone-software/why-did-you-render#tracking-components

// Notice: this will affect storybook, make it would not work
// module.exports = (api) => {
//   const isServer = api.caller((caller) => caller?.isServer);
//   const isCallerDevelopment = api.caller((caller) => caller?.isDev);
//   const isStorybook = api.caller((caller) => {
//     console.log('babel.config: caller: ', caller);
//   });

//   const presets = [
//     [
//       // https://nextjs.org/docs/advanced-features/customizing-babel-config
//       'next/babel',
//       {
//         'preset-react': {
//           importSource:
//             !isServer && isCallerDevelopment
//               ? '@welldone-software/why-did-you-render'
//               : 'react',
//         },
//       },
//     ],
//   ];

//   return { presets };
// };