import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/workers/index.js'),
      name: 'WebWorker',
      fileName: (format) => `web-worker.${format}.js`,
    },
    outDir: 'dist/workers',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
  },
  worker: {
    format: 'es',
    plugins: [],
  },
});
