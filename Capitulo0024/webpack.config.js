
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        ///* Anulamos temporalmente el módulo Hot:
        /*'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        */
        __dirname + "/src/index.js",
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/",
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
                            plugins: ['react-hot-loader/babel','transform-class-properties']
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
            
        ]
        
    },

    resolve: {
        alias: {
            'styled-components$': 'styled-components',
        }
    },


    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/public/index.html", 
        })
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


    /* Anulamos temporalmente el módulo Hot:
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    */

    //Podría haber un módulo de Dev server para facilitar el desarrollo
    //Lo he evitado aquí
    
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        //hot: true,   /* Anulamos temporalmente el módulo Hot:
        //host: '0.0.0.0',
        //disableHostCheck: true,
        port: 3000,
    },

};


