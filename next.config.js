const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const webpack = require('webpack')
const path = require('path')
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess(
  withCss({
    cssModules: true,
    webpack(config) {
      console.log(config.module.rules)
      let index = 0
      let test = config.module.rules[index].test
      while (test) {
        index++
        if (test == /\.less$/) {
          console.log(test, index)
          break
        }
      }
      config.resolve.alias = {
        ...config.resolve.alias,
        ...{
          '@components': path.resolve(__dirname, 'components/'),
          '@style': path.resolve(__dirname, 'static/style/'),
        },
      }
      return config
    },
  })
)
