// vite.config.js
import { defineConfig } from "file:///C:/Evangadi/Phase-4/portfolio/TOM-PORTFOLIO/temesgen-3d/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Evangadi/Phase-4/portfolio/TOM-PORTFOLIO/temesgen-3d/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Evangadi\\Phase-4\\portfolio\\TOM-PORTFOLIO\\temesgen-3d";
var vite_config_default = defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 5173,
    // Default Vite port
    strictPort: false,
    // Allow fallback to next available port if 5173 is taken
    open: true,
    cors: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Content-Security-Policy": [
        "default-src 'self';",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: http://localhost:* https:;",
        "style-src 'self' 'unsafe-inline' https:;",
        "img-src 'self' data: blob: https: http:;",
        "font-src 'self' data: https: http:;",
        "connect-src 'self' http: https: ws: wss:;",
        "media-src 'self' data: blob: https: http:;",
        "worker-src 'self' blob: data: 'unsafe-inline' 'wasm-unsafe-eval' http: https:;",
        "child-src 'self' blob: data: http: https:;",
        "frame-src 'self' http: https:;",
        "object-src 'none';",
        "base-uri 'self';",
        "form-action 'self';",
        "frame-ancestors 'self';",
        "upgrade-insecure-requests;"
      ].join(" ")
    },
    fs: {
      strict: false
    },
    hmr: {
      clientPort: 24678,
      port: 24678,
      host: "localhost",
      protocol: "ws"
    },
    // Proxy configuration if needed
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  worker: {
    format: "es",
    plugins: [
      // Add any worker-specific plugins here
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis"
      },
      // Enable esbuild polyfill for Node.js globals
      target: "es2020",
      // Enable WebAssembly
      wasm: true,
      // Additional optimizations
      treeShaking: true,
      minify: true
    },
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react-router-dom",
      "framer-motion",
      "three",
      "three/examples/jsm/loaders/GLTFLoader",
      "three/examples/jsm/loaders/DRACOLoader",
      "@react-three/fiber",
      "@react-three/drei",
      "maath",
      "prop-types",
      "react-tilt",
      "@emailjs/browser",
      "react-icons/fa",
      "react-icons/si",
      "react-icons/fi",
      "axios"
    ],
    exclude: [],
    force: true
    // Force dependency pre-bundling
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    sourcemap: true,
    chunkSizeWarningLimit: 1e3,
    // Increase chunk size warning limit (in kbs)
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        worker: resolve(__vite_injected_original_dirname, "src/workers/webgl.worker.js")
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-dom/client"],
          framer: ["framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          vendor: ["@babel/runtime", "prop-types"]
        },
        // Ensure worker files are properly named
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === "worker" ? "assets/workers/[name].js" : "assets/js/[name]-[hash].js";
        },
        // Ensure proper handling of asset paths
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        }
      }
    }
  },
  resolve: {
    alias: {
      // Add any necessary aliases here
      "@": resolve(__vite_injected_original_dirname, "src"),
      "three/examples/jsm/": "three/examples/jsm/"
    }
  },
  define: {
    "process.env": {},
    "process.browser": true,
    global: "globalThis"
  },
  // Preview configuration
  preview: {
    port: 4173,
    strictPort: true,
    open: true
  },
  // CSS configuration
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9FdmFuZ2FkaS9QaGFzZS00L3BvcnRmb2xpby9UT00tUE9SVEZPTElPL3RlbWVzZ2VuLTNkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsIC8vIERlZmF1bHQgVml0ZSBwb3J0XG4gICAgc3RyaWN0UG9ydDogZmFsc2UsIC8vIEFsbG93IGZhbGxiYWNrIHRvIG5leHQgYXZhaWxhYmxlIHBvcnQgaWYgNTE3MyBpcyB0YWtlblxuICAgIG9wZW46IHRydWUsXG4gICAgY29yczogdHJ1ZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ3Jvc3MtT3JpZ2luLUVtYmVkZGVyLVBvbGljeSc6ICdyZXF1aXJlLWNvcnAnLFxuICAgICAgJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JzogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICdDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5JzogJ2Nyb3NzLW9yaWdpbicsXG4gICAgICAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knOiBbXG4gICAgICAgIFwiZGVmYXVsdC1zcmMgJ3NlbGYnO1wiLFxuICAgICAgICBcInNjcmlwdC1zcmMgJ3NlbGYnICd1bnNhZmUtaW5saW5lJyAndW5zYWZlLWV2YWwnICd3YXNtLXVuc2FmZS1ldmFsJyBibG9iOiBodHRwOi8vbG9jYWxob3N0OiogaHR0cHM6O1wiLFxuICAgICAgICBcInN0eWxlLXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnIGh0dHBzOjtcIixcbiAgICAgICAgXCJpbWctc3JjICdzZWxmJyBkYXRhOiBibG9iOiBodHRwczogaHR0cDo7XCIsXG4gICAgICAgIFwiZm9udC1zcmMgJ3NlbGYnIGRhdGE6IGh0dHBzOiBodHRwOjtcIixcbiAgICAgICAgXCJjb25uZWN0LXNyYyAnc2VsZicgaHR0cDogaHR0cHM6IHdzOiB3c3M6O1wiLFxuICAgICAgICBcIm1lZGlhLXNyYyAnc2VsZicgZGF0YTogYmxvYjogaHR0cHM6IGh0dHA6O1wiLFxuICAgICAgICBcIndvcmtlci1zcmMgJ3NlbGYnIGJsb2I6IGRhdGE6ICd1bnNhZmUtaW5saW5lJyAnd2FzbS11bnNhZmUtZXZhbCcgaHR0cDogaHR0cHM6O1wiLFxuICAgICAgICBcImNoaWxkLXNyYyAnc2VsZicgYmxvYjogZGF0YTogaHR0cDogaHR0cHM6O1wiLFxuICAgICAgICBcImZyYW1lLXNyYyAnc2VsZicgaHR0cDogaHR0cHM6O1wiLFxuICAgICAgICBcIm9iamVjdC1zcmMgJ25vbmUnO1wiLFxuICAgICAgICBcImJhc2UtdXJpICdzZWxmJztcIixcbiAgICAgICAgXCJmb3JtLWFjdGlvbiAnc2VsZic7XCIsXG4gICAgICAgIFwiZnJhbWUtYW5jZXN0b3JzICdzZWxmJztcIixcbiAgICAgICAgXCJ1cGdyYWRlLWluc2VjdXJlLXJlcXVlc3RzO1wiXG4gICAgICBdLmpvaW4oJyAnKVxuICAgIH0sXG4gICAgZnM6IHtcbiAgICAgIHN0cmljdDogZmFsc2VcbiAgICB9LFxuICAgIGhtcjoge1xuICAgICAgY2xpZW50UG9ydDogMjQ2NzgsXG4gICAgICBwb3J0OiAyNDY3OCxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcHJvdG9jb2w6ICd3cydcbiAgICB9LFxuICAgIC8vIFByb3h5IGNvbmZpZ3VyYXRpb24gaWYgbmVlZGVkXG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdvcmtlcjoge1xuICAgIGZvcm1hdDogJ2VzJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBBZGQgYW55IHdvcmtlci1zcGVjaWZpYyBwbHVnaW5zIGhlcmVcbiAgICBdXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICAvLyBOb2RlLmpzIGdsb2JhbCB0byBicm93c2VyIGdsb2JhbFRoaXNcbiAgICAgIGRlZmluZToge1xuICAgICAgICBnbG9iYWw6ICdnbG9iYWxUaGlzJyxcbiAgICAgIH0sXG4gICAgICAvLyBFbmFibGUgZXNidWlsZCBwb2x5ZmlsbCBmb3IgTm9kZS5qcyBnbG9iYWxzXG4gICAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgICAgLy8gRW5hYmxlIFdlYkFzc2VtYmx5XG4gICAgICB3YXNtOiB0cnVlLFxuICAgICAgLy8gQWRkaXRpb25hbCBvcHRpbWl6YXRpb25zXG4gICAgICB0cmVlU2hha2luZzogdHJ1ZSxcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IFtcbiAgICAgICdyZWFjdCcsXG4gICAgICAncmVhY3QtZG9tJyxcbiAgICAgICdyZWFjdC1kb20vY2xpZW50JyxcbiAgICAgICdyZWFjdC1yb3V0ZXItZG9tJyxcbiAgICAgICdmcmFtZXItbW90aW9uJyxcbiAgICAgICd0aHJlZScsXG4gICAgICAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcicsXG4gICAgICAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRFJBQ09Mb2FkZXInLFxuICAgICAgJ0ByZWFjdC10aHJlZS9maWJlcicsXG4gICAgICAnQHJlYWN0LXRocmVlL2RyZWknLFxuICAgICAgJ21hYXRoJyxcbiAgICAgICdwcm9wLXR5cGVzJyxcbiAgICAgICdyZWFjdC10aWx0JyxcbiAgICAgICdAZW1haWxqcy9icm93c2VyJyxcbiAgICAgICdyZWFjdC1pY29ucy9mYScsXG4gICAgICAncmVhY3QtaWNvbnMvc2knLFxuICAgICAgJ3JlYWN0LWljb25zL2ZpJyxcbiAgICAgICdheGlvcydcbiAgICBdLFxuICAgIGV4Y2x1ZGU6IFtdLFxuICAgIGZvcmNlOiB0cnVlIC8vIEZvcmNlIGRlcGVuZGVuY3kgcHJlLWJ1bmRsaW5nXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLCAvLyBJbmNyZWFzZSBjaHVuayBzaXplIHdhcm5pbmcgbGltaXQgKGluIGticylcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgd29ya2VyOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy93b3JrZXJzL3dlYmdsLndvcmtlci5qcycpXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHJlYWN0OiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1kb20vY2xpZW50J10sXG4gICAgICAgICAgZnJhbWVyOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICB0aHJlZTogWyd0aHJlZScsICdAcmVhY3QtdGhyZWUvZmliZXInLCAnQHJlYWN0LXRocmVlL2RyZWknXSxcbiAgICAgICAgICB2ZW5kb3I6IFsnQGJhYmVsL3J1bnRpbWUnLCAncHJvcC10eXBlcyddLFxuICAgICAgICB9LFxuICAgICAgICAvLyBFbnN1cmUgd29ya2VyIGZpbGVzIGFyZSBwcm9wZXJseSBuYW1lZFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogKGNodW5rSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiBjaHVua0luZm8ubmFtZSA9PT0gJ3dvcmtlcicgXG4gICAgICAgICAgICA/ICdhc3NldHMvd29ya2Vycy9bbmFtZV0uanMnXG4gICAgICAgICAgICA6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcyc7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEVuc3VyZSBwcm9wZXIgaGFuZGxpbmcgb2YgYXNzZXQgcGF0aHNcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKC93b2ZmfHdvZmYyfGVvdHx0dGZ8b3RmL2kudGVzdChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9mb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvJHtleHR9L1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIEFkZCBhbnkgbmVjZXNzYXJ5IGFsaWFzZXMgaGVyZVxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICAgJ3RocmVlL2V4YW1wbGVzL2pzbS8nOiAndGhyZWUvZXhhbXBsZXMvanNtLydcbiAgICB9XG4gIH0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudic6IHt9LFxuICAgICdwcm9jZXNzLmJyb3dzZXInOiB0cnVlLFxuICAgIGdsb2JhbDogJ2dsb2JhbFRoaXMnLFxuICB9LFxuICAvLyBQcmV2aWV3IGNvbmZpZ3VyYXRpb25cbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQxNzMsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBvcGVuOiB0cnVlXG4gIH0sXG4gIC8vIENTUyBjb25maWd1cmF0aW9uXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2VPbmx5JyxcbiAgICB9LFxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7YFxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsb0JBQW9CO0FBQ2hZLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7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
