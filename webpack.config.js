const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                },{
                    loader:'less-loader'
                }]
            }
        ],

    },
    resolve:{
        extensions:['.js','.jsx','.json']
    },
    devServer: {
        hot: true,
        host: '127.0.0.1',
        port: '8081',
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
    ],
    
};
