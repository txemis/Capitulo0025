var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    mode: 'production',
    entry: __dirname + "/src/index.js",
    output: {
        //path: __dirname + "/public",   //cambiamos para producción
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "./",
    },
    optimization: {
        minimizer: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: false,
                warnings: false,
            },
        }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader' ,
                        options: {
                            presets: ['es2015','react'],
                            plugins: [/**'react-hot-loader/babel',**/'transform-class-properties'],
                        }
                }
                
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
                use:{
                    loader: "file-loader" ,
                    options: {
                        name: "static/media/[name].[ext]"
                    }
                }
            },
            
        ]
        
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/public/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                reduce_vars: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
        */
    
    ],
    


    /**
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-class-properties']
                }
            },
        ]
    },**/
};


