const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
  entry:'./src/index.js',
  output : {
    filename: 'main.js',
    path : outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}