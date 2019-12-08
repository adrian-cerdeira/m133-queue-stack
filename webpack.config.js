const HtmlwebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            template: 'src/index.html',
            // favicon: 'src/favicon.ico',
            inlineSource: '.(js|css)$', // embed all javascript and css inline needs inline-source-plugin
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};