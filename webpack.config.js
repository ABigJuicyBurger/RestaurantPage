const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js", // the entry point for the application
    output: {
        filename: "restaurant.js", // the name of the output file
        path: path.resolve(__dirname, "dist"), // the path to the output directory
        clean: true,
    },
    devtool: "eval-source-map", // to see the original code in the browser automatically using webpack-dev-server
    devServer: {
      watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // to use the template.html file as the template for the index.html file, downloaded with npm i html-webpack-plugin
        }),
    ],
    module: {
        rules: [ 
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // to use the styles in the src folder from DOM manipulation / css reads imported css files and stores result in string
                // style takes the string and adds it to the DOM
            },
            {
                test: /\.html$/i,
                loader: "html-loader", // to use the template.html file as the template for the index.html file, downloaded with npm i html-loader
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // to use the images in the src folder from DOM manipulation
                type: "asset/resource",
            },
        ],
    },
};