const path = require('path');
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
		path: path.resolve(paths.root, "dist"),
		filename: "bundle.js",
  },
	plugins: [new HtmlWebpackPlugin({
    title: "",
    template: path.resolve(paths.src, "html/index.html"),

  })],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    symlinks: false,
  },

  module: {
    rules: [].concat(
			{
				test: /\.s?css$/,
				include: [
					paths.src,
				],
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				],
			}
    )
  }
};