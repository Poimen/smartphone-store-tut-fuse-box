// const { src, task, watch, context, fuse } = require("fuse-box/sparky");

const {
  FuseBox,
  VueComponentPlugin,
  QuantumPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');

let isProduction = false;

let fuse = FuseBox.init({
  homeDir: './src',
  output: 'dist/$name.js',
  sourceMaps: true,
  debug: true,
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  "compilerOptions": {
    "importHelpers": true
  },
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
      title: 'TaskBoard | Task Processing and Handling Board',
      template: './src/index.html'
    }),
    isProduction && QuantumPlugin({
      bakeApiIntoBundle: 'app',
      uglify: true,
      treeshake: true
    }),
  ]
});

fuse.dev({
  port: 8080,
  open: true
});

const appBundle = fuse.bundle('app').instructions('> index.ts');
appBundle.watch().hmr();

fuse.run();

