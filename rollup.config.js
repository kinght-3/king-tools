import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default {
  input: './index.ts', // 入口文件
  output: [
    {
      format: 'esm', // 打包为esm格式
      file: 'build/index.js', // 打包后的文件路径名称
      name: 'king-tools' // 打包后的默认导出文件名称
    }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    terser()
  ]
}
