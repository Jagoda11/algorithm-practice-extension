const path = require('path')

module.exports = {
  entry: {
    background: './src/background.ts',
    content: './src/content.ts',
    popup: './src/popup.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
