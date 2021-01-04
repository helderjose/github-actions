// module.exports = {
//   outputDir: "dist",
//   configureWebpack: config => {
//     config.output.filename = 'aaa.[name].js'
//   }
// }



// do site
// https://stackoverflow.com/questions/50272314/change-vue-build-dist-file-prefixes
// module.exports = {
//   configureWebpack: config => {
//       config.output.filename = 'ittus.[name].js';

//   },
//   chainWebpack: config => {
//     config.plugin('extract-css')
//         .tap(([options, ...args]) => [
//             Object.assign({}, options, { filename: 'css/ittus.[name].css' }),
//             ...args
//         ])
//   }
// }

module.exports = {
  configureWebpack: config => {
      config.output.filename = 'js/[name].js';

  },
  chainWebpack: config => {
    config.plugin('extract-css')
        .tap(([options, ...args]) => [
            Object.assign({}, options, { filename: 'css/[name].css' }),
            ...args
        ])
  }
}