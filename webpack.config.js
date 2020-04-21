const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist/');
const SRC_DIR = path.resolve(__dirname, 'src');

const isProduction = (process.env.NODE_ENV === 'production');

const extractPlugin = new ExtractTextPlugin({
    filename: 'assets/styles/[name].css'
});

module.exports = {
    context: SRC_DIR,
    mode: 'development',
    entry: {
        app: SRC_DIR + '/app/app.js',
    },
    output: {
        path: DIST_DIR,
        filename: '[name].[contenthash].js',
    },
    node: {
        fs: 'empty',
        dns: 'empty',
        net: 'empty',
        tls: 'empty',
        path: true,
        url: false
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true
        }
    },
    devtool: (isProduction) ? '' : 'inline-source-map',
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            },
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                            publicPath: '../images/'
                        },
                    },
                    'img-loader',
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/',
                        publicPath: '../fonts/'
                    },
                }]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ]
    },
  
    resolve: {
        extensions: [ '.js', '.jsx', 'ts', 'tsx', '.json', '.html', '.scss', '.css']
    },
    plugins: [

        new CopyWebpackPlugin(
            [{
                from: 'app/assets/images',
                to: 'assets/images/'
            }], {
                ignore: [{
                    glob: 'svg/*'
                }]
            }
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html'
        }),

        extractPlugin,
        new CleanWebpackPlugin()
    ]
}

if (isProduction) {
    module.exports.plugins.push(
        new UglifyJSPlugin({
            sourceMap: true
        }),
    );
    module.exports.plugins.push(
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/i
        }),
    );
    module.exports.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                context: __dirname
            }
        }),
    );
}
