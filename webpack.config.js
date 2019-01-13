const path = require('path');
const globImporter = require('node-sass-glob-importer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	projectFolder: path.resolve(__dirname, '..'),
	root: path.resolve(__dirname),
	src: path.resolve(__dirname, 'src'),
	node_modules: path.resolve(__dirname, 'node_modules'),
};

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(paths.src , 'js/app.js')
  },
  output: {
		path: path.resolve(paths.root, 'dist'),
		filename: 'bundle.js',
  },
	plugins: [new HtmlWebpackPlugin({
    title: 'Exozet front-end',
    template: path.resolve(paths.src, 'html/index.html'),
  })],
  devtool: 'inline-cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    symlinks: false,
  },
  module: {
    rules: [].concat(
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
            name: '[name].[ext]',
          },
        },
      },
			{
				test: /\.s?css$/,
				include: [
					paths.src,
				],
				use: [
					{ loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter()
            }
          }
				],
			}
    )
  }
};