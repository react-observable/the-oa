import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: './src/index.js',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
    external: [
      'rxjs',
      'framesync',
      'rxjs/observable/empty',
      'rxjs/operators/map',
      'rxjs/Observable',
      'rxjs/observable/defer',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
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
        name: 'OA',
      },
    ],
    external: [
      'rxjs',
      'framesync',
      'rxjs/observable/empty',
      'rxjs/operators/map',
      'rxjs/Observable',
      'rxjs/observable/defer',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve({
        modulesOnly: true,
      }),
      filesize(),
    ],
  },
];
