const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var WebpackProvidePlugin = require('webpack').ProvidePlugin;

const bundleName = 'bundle';
const bundleDir = 'dist/assets';

module.exports = (env, argv) => {
    return {
        mode: argv.mode == "production" ? "production" : "development",
        entry: ['./src/javascript/index.js', './src/styles/index.scss'],
        output: {
            filename: bundleName + ".js",
            path: path.resolve(__dirname, bundleDir)
        },
        module: {
            rules: [
                {
                    test: /\.s[c|a]ss$/,
                    use: 
                    [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    ctx: {
                                        env: argv.mode
                                    }
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        devtool: "source-map",
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: bundleName + '.css'
            }),
            new WebpackProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new WebpackProvidePlugin({
                _: 'lodash'
            })
        ],
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: false,
            publicPath: false
        }
    }
}