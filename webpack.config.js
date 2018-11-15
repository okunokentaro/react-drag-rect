const DEV_PORT = process.env.PORT || 4444;

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: DEV_PORT,
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
