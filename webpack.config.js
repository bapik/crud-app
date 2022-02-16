import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx|tsx|ts)$/,
        resolve: {
          fullySpecified: false,
          extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
        },
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'media',
            publicPath: 'media' 
          }
        }
      }
    ]
  },
  plugins:  [new HtmlWebpackPlugin({ template: './src/index.html' })]
}