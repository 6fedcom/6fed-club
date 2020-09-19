const withCss = require('@zeit/next-css')
const path = require('path')
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss({
  config: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'components/'),
        '@style': path.resolve(__dirname, 'static/style/'),
      },
    },
  },
})
