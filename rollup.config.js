import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
export default [
  {
    input: './src/index.js',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'es',
      external: ['rxjs', 'framesync'],
    },
    plugins: [
      resolve({
        modulesOnly: true,
      }),
      filesize(),
    ],
  },
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        external: ['rxjs', 'framesync'],
        name: 'OA',
      },
    ],
  },
];
