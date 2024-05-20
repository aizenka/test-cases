import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import type { BuildOptions } from './types/config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CircularDependencyPlugin = require('circular-dependency-plugin')

export function buildPlugins ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {

  const plugins = [
    new HTMLWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    })
  ]

  return plugins
}