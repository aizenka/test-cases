import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'
import type { BuildOptions } from './types/config'
import type webpack from 'webpack'

export function buildWebpackConfig (options: BuildOptions):  webpack.Configuration {
  const { mode, paths } = options

  return {
    mode,
    entry: {
      bundle: paths.entry
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      publicPath: '/',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(paths),
    devtool: 'eval-cheap-module-source-map',
    devServer: buildDevServer(options)
  }
}