module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-normalize')({
      forceImport: true,
    }),
  ],
}; 