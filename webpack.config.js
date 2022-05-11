const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      // {
      //   test: /\.json$/,
      //   use: {
      //     loader: 'json-loader',
      //   },
      // },
    ],

  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'source-map',

  // devServer: {
  //       // contentBase: path.join(__dirname, '/dist/'),
  //       // inline: true,
  //       host: 'localhost',
  //       port: 8080,
  //     }
};



// const path = require('path');
// console.log(path.join(__dirname, 'index.js'));
// module.exports = {
//   mode: 'development',
//   entry: path.join(__dirname, 'index.js'),
//   output: {
//     filename: 'app.bundle.js'
//   },
//   // clean: {
//   //   keep: /\.git/,
//   // },
//   devtool: 'source-map',
//   // watch: true,
//   // output: {
//   //   // path: path.join(__dirname, 'dist'),
//   //   publicPath: '/dist/',
//   //   filename: "bundle.js",
//   //   chunkFilename: '[name].js'
//   // },
//   module: {
//     rules: [
      
//       { test: /\.txt$/, loader: 'text-loader' },
//       // { enforce: 'pre', test: /\.js$/, use: 'eslint-loader' },
//       // {
//       //   enforce: "pre",
//       //   test: /\.js$/,
//       //   exclude: /node_modules/,
//       //   use: [
//       //     {
//       //       loader: 'eslint-loader',
//       //       options: {
//       //         // fix: false,
//       //         // configFile: eslintrcFile,
//       //         // cache: true,
//       //         configFile: '.eslintrc',
//       //         emitError: true,
//       //         emitWarning: true
//       //       }
//       //     }
//       //   ]
//       // },
//       {
//         test: /.js?$/,
//         // include: [
//         //   // path.resolve(__dirname, 'app')
//         // ],
//         // exclude: [
//         //   path.resolve(__dirname, './node_modules')
//         // ],
//         loader: 'babel-loader',
//         // query: {
//         //   presets: [
//         //     ["@babel/env", {
//         //       "targets": {
//         //         "browsers": "last 2 chrome versions"
//         //       }
//         //     }]
//         //   ]
//         // }
//       }]
//   },
//   // resolve: {
//   //   extensions: ['.json', '.js', '.jsx']
//   // },
//   // devServer: {
//   //   // contentBase: path.join(__dirname, '/dist/'),
//   //   inline: true,
//   //   host: 'localhost',
//   //   port: 8080,
//   // }
// };