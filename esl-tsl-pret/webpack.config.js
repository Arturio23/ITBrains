const path = require('path');

module.exports = {
  entry: './resources/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public/dist'),
    publicPath: '/public/dist',
    chunkFilename: '[id].js',
    library: 'MyLibrary',
    libraryTarget: 'umd',
    pathinfo: true,
    crossOriginLoading: 'anonymous',
    globalObject: 'this',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/, // регулярний вираз, який вказує, які файли будуть оброблятись цим правилом
        include: path.resolve(__dirname, 'src'), // шлях до папки з файлами, які потрібно обробити
        exclude: /node_modules/, // шаблон для виключення файлів, які не потрібно обробляти
        use: [
          {
            loader: 'babel-loader', // лоадер, який використовується для обробки вказаних файлів
            options: {
              presets: ['@babel/preset-env'], // налаштування лоадера
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // створює стиль CSS зі збереженням стилю в файлі
          {
            loader: 'css-loader', // збирає CSS-файли і забезпечує збереження їх в пам'яті
            options: {
              modules: true, // включає CSS-модулі
            },
          },
          'postcss-loader', // додає плагіни для обробки CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // тип, який вказує, що файли повинні бути включені в фінальну збірку в якості ресурсів
        generator: {
          filename: 'images/[hash][ext][query]', // шаблон імені файлів
        },
      },
    ],
  },
};
