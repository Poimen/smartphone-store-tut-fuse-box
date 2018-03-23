const {
  FuseBox,
  VueComponentPlugin,
  QuantumPlugin,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');

const eslinter = require('fuse-box-eslint-plugin');
const fs = require('fs');

let fuse;
let isProduction = false;

Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: './src',
    output: 'dist/$name.js',
    // sourceMaps: !isProduction,
    sourceMaps: true,
    useTypescriptCompiler: true,
    tsConfig: 'tsconfig.json',
    polyfillNonStandardDefaultUsage: true,
    plugins: [
      VueComponentPlugin({
        style: [
          SassPlugin({
            importer: true
          }),
          CSSResourcePlugin(),
          CSSPlugin({
            group: 'components.css',
            inject: 'components.css'
          })
        ]
      }),
      CSSPlugin(),
      [SassPlugin({
        importer: true
      }), CSSPlugin()],
      WebIndexPlugin({
        title: 'Smartphone App tutorial',
        template: './src/index.html'
      }),
      eslinter({ pattern: '/ts$/' }),
      isProduction && QuantumPlugin({
        bakeApiIntoBundle: 'vendor',
        uglify: { es6: true },
        treeshake: true,
        ensureES5: false
      }),
    ]
  });

  if(!isProduction) {
    fuse.dev({
      open: true,
      port: 8080
    });
  }
});

Sparky.task('set-production-state', () => isProduction = true);

Sparky.task('clean', ['clean-dist', 'clean-cache'], () => {});
Sparky.task('clean-dist', () => Sparky.src('./dist').clean('dist/'));
Sparky.task('clean-cache', () => Sparky.src('./.fusebox').clean('.fusebox/'));

Sparky.task('watch-assets', () => Sparky.watch('./assets', { base: './src' }).dest('./dist'));
Sparky.task('copy-assets', () => Sparky.src('./assets', { base: './src' }).dest('./dist'));

Sparky.task('bundle', () => {
  const vendorBundle = fuse.bundle('vendor').instructions('~ index.ts');

  const appBundle = fuse.bundle('app').instructions('> [index.ts]');

  const dirs = fs.readdirSync('./src');

  for (let dir of dirs) {
    appBundle.alias(dir, `~/${dir}`)
    vendorBundle.alias(dir, `~/${dir}`)
  }

  if(!isProduction) {
    appBundle.watch().hmr();
  }
});

Sparky.task('default', ['clean-cache', 'clean', 'config', 'watch-assets', 'bundle'], () => {
  return fuse.run();
});

Sparky.task('build', ['clean', 'set-production-state', 'config', 'copy-assets', 'bundle'], () => {
  return fuse.run();
});
