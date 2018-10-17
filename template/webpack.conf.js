{{#lint}}
const path = require('path'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/lint}}
module.exports = {
  {{#lint}}
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve('./src'),
        options: {
          formatter: require('eslint-friendly-formatter'){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/lint}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
