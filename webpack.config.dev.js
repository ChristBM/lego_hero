const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
/* const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin") */

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: 'assets/[name][ext][query]',
    },
    mode: 'development',
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
                    filename: 'assets/images/[name][ext][query]',
                }
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'LegoHero',
            filename: "index.html",
            template: "./src/index.ejs",
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new BundleAnalyzerPlugin({
            analyzerMode:  'static',
            openAnalyzer:  true,
        }),

        /* new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: ['pngquant'],
            },
        }),
        new ImageMinimizerPlugin({
            deleteOriginalAssets: false,
            filename: '[name].webp',
            minimizerOptions: {
                plugins: ['imagemin-webp'],
            },
        }), */

    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        port: 3000,
        open: true,
    },
}