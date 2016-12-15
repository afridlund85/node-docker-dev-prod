var webpack = require('webpack'),
  path = require('path'),
  ROOT_PATH = path.resolve(__dirname),
  ENTRY_PATH = path.resolve(ROOT_PATH, 'src/index'),
  OUTPUT_PATH = path.resolve(ROOT_PATH, 'public'),
  API_URL = process.env.API_PROD_HOST || 'http://api.example.com:3000/'

module.exports = {
  devtool: 'source-map',
  entry: [
    ENTRY_PATH,
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: OUTPUT_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(API_URL)
    })
  ]
};
