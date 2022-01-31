const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';
const productionPluginDefine = isProduction ? [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
] : [];
const clientLoaders = isProduction ? productionPluginDefine.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

const commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

module.exports = [
    {
        entry: ['@babel/polyfill', './src/server.js'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        target: 'node',
        node: {
            global: false,
            __filename: false,
            __dirname: false
        },
        externals: nodeExternals(),
        plugins: productionPluginDefine,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader']
                }
            ].concat(commonLoaders)
        }
    },
    {
        entry: './src/app/browser.js',
        output: {
            path: path.join(__dirname, '/dist/assets'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [].concat(!isProduction ? [] : [new MiniCssExtractPlugin()]),
        module: {
            rules: [
                {
                    test: /\.(js|x)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
];