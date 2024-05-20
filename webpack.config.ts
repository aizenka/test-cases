import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import type webpack from 'webpack'
import type { BuildPaths, BuildEnv } from './config/build/types/config'

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = 'development'
  const PORT = env.port || 3000


  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT
  })

  return config
}