var HtmlwebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path'),
    webpack = require('webpack');

/* PostCSS Plugins */
var postcssImport = require('postcss-import'),
    postcssNested = require('postcss-nested'),
    postcssLost = require('lost-grid'),
    postcssRucksack = require('rucksack-css');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {

    entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?minimize!postcss-loader",
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    },
    resolve: {
        /* Resolves extensions to require('file') instead of require('file.js') */
        extensions: ['', '.js', '.jsx', '.json', '.coffee']
    },
    postcss: function () {
        return [
            postcssImport({
                  onImport: function (files) {
                      files.forEach(this.addDependency);
                  }.bind(this)
              }),
              postcssNested(),
              postcssRucksack(),
              postcssLost()
        ];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Grid Prototyping App'
        })
    ]
}

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel?stage=1'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
