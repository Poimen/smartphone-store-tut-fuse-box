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

let fuse;
let isProduction = false;

Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: './src',
    output: 'dist/$name.js',
    sourceMaps: !isProduction,
    useTypescriptCompiler: true,
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
      WebIndexPlugin({
        title: 'Smartphone App tutorial',
        template: './src/index.html'
      }),
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

Sparky.task('clean', () => Sparky.src('./dist').clean('dist/'));
Sparky.task('watch-assets', () => Sparky.watch('./assets', { base: './src' }).dest('./dist'));
Sparky.task('copy-assets', () => Sparky.src('./assets', { base: './src' }).dest('./dist'));

Sparky.task('bundle', () => {
  const vendorBundle = fuse.bundle('vendor').instructions('~ index.ts');

  const appBundle = fuse.bundle('app').instructions('> [index.ts]');

  if(!isProduction) {
    appBundle.watch().hmr();
  }
});

Sparky.task('default', ['config', 'clean', 'watch-assets', 'bundle'], () => {
  return fuse.run();
});

Sparky.task('build', ['set-production-state', 'config', 'clean', 'copy-assets', 'bundle'], () => {
  return fuse.run();
});
