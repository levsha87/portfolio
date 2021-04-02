const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
    
    module: {
        rules: [
          {
            test: /\.html$/i,
            use: 'html-loader',
          },
          { test: /\.svg$/, use: 'svg-inline-loader' },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
         {
           test: /\.(woff|woff2|eot|ttf|otf)$/i,
           type: 'asset/resource',
         },
         /* {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',} */
         
         
        ]
      },
      devtool: 'inline-source-map',
      
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Portfolio Raman Liusha',
            template: path.resolve(__dirname, './index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        /* clean: true, */
    }, 
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      overlay: true,
      open: true
    }, 
};