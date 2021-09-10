const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[main].[contenthash].js",
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    mode: 'production',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css|.scss$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ],
            },
            {
                test: /\.webp$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]',
                }
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'LegoHero',
            filename: "index.[contenthash].html",
            template: "./src/index.ejs",
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    extractComments: true,
                }),
        ]
    }

}