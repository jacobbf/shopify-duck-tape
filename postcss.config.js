const prod = process.env.NODE_ENV == 'production';

let plugins = [
  require('postcss-import'),
  require('autoprefixer')
]

if (prod) {
  plugins.push(
    require('cssnano')({
      preset: 'default',
    })
  )
}

module.exports = {
  plugins,
  from: 'styles/index.css',
  to: 'assets/index.css'
}