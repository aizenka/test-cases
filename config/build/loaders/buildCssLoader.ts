export default function buildCssLoader () {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes('.module.'),
            localIdentName: '[path][name]__[local]--[hash:base64:3]'
          }
        }
      },
      'sass-loader'
    ]
  }
}