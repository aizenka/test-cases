import { cssLoader } from './loaders'
import type webpack from 'webpack'

export function buildLoaders (): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoaders = cssLoader()

  const svgLoader = {
    test: /\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [{
            name: 'removeViewBox',
            active: false
          }]
        }
      }
    }
  }

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }

  return [
    fontsLoader,
    imageLoader,
    svgLoader,
    cssLoaders,
    typescriptLoader
  ]
}