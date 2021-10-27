SystemJS.config({
  typescriptOptions: {
    module: "commonjs",
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  transpiler: false,
  baseURL: "/dist",
  map: {
    app: 'src',
    typescript: 'node_modules/typescript/lib/typescript.js',
    angular2: 'node_modules/angular2',
    rxjs: 'node_modules/rxjs'
  },
  packages: {
    app: {
      defaultExtension: 'ts',
      main: 'app.ts'
    },
    angular2: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
