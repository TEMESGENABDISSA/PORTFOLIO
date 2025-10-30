// vite.config.js
import { defineConfig } from "file:///C:/Evangadi/Phase-4/portfolio/TOM-PORTFOLIO/temesgen-3d/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Evangadi/Phase-4/portfolio/TOM-PORTFOLIO/temesgen-3d/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", {
            runtime: "automatic",
            importSource: "react"
          }],
          "@babel/plugin-transform-runtime"
        ]
      }
    })
  ],
  server: {
    port: 3e3,
    strictPort: false,
    open: true,
    cors: true,
    fs: {
      strict: false
    },
    // Configure headers for development
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    },
    hmr: {
      protocol: "ws",
      host: "localhost",
      host: "localhost",
      port: 3001,
      clientPort: 3001
    },
    proxy: {
      // Add any API proxies if needed
    }
  },
  define: {
    "process.env": {}
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"]
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "@babel/runtime/regenerator"
    ],
    esbuildOptions: {
      target: "es2020",
      jsx: "automatic",
      jsxImportSource: "react"
    }
  },
  esbuild: {
    target: "es2020",
    jsx: "automatic",
    jsxImportSource: "react"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9FdmFuZ2FkaS9QaGFzZS00L3BvcnRmb2xpby9UT00tUE9SVEZPTElPL3RlbWVzZ2VuLTNkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCh7XHJcbiAgICAgIGJhYmVsOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgWydAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1yZWFjdC1qc3gnLCB7XHJcbiAgICAgICAgICAgIHJ1bnRpbWU6ICdhdXRvbWF0aWMnLFxyXG4gICAgICAgICAgICBpbXBvcnRTb3VyY2U6ICdyZWFjdCdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUnXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgc3RyaWN0UG9ydDogZmFsc2UsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgY29yczogdHJ1ZSxcclxuICAgIGZzOiB7XHJcbiAgICAgIHN0cmljdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICAvLyBDb25maWd1cmUgaGVhZGVycyBmb3IgZGV2ZWxvcG1lbnRcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knOiAncmVxdWlyZS1jb3JwJyxcclxuICAgICAgJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JzogJ3NhbWUtb3JpZ2luJyxcclxuICAgIH0sXHJcbiAgICBobXI6IHtcclxuICAgICAgcHJvdG9jb2w6ICd3cycsXHJcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgcG9ydDogMzAwMSxcclxuICAgICAgY2xpZW50UG9ydDogMzAwMVxyXG4gICAgfSxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgIC8vIEFkZCBhbnkgQVBJIHByb3hpZXMgaWYgbmVlZGVkXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgICdwcm9jZXNzLmVudic6IHt9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcclxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgIHJlYWN0OiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG4gICAgICAgICAgdGhyZWU6IFsndGhyZWUnLCAnQHJlYWN0LXRocmVlL2ZpYmVyJywgJ0ByZWFjdC10aHJlZS9kcmVpJ11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1xyXG4gICAgICAncmVhY3QnLFxyXG4gICAgICAncmVhY3QtZG9tJyxcclxuICAgICAgJ3RocmVlJyxcclxuICAgICAgJ0ByZWFjdC10aHJlZS9maWJlcicsXHJcbiAgICAgICdAcmVhY3QtdGhyZWUvZHJlaScsXHJcbiAgICAgICdmcmFtZXItbW90aW9uJyxcclxuICAgICAgJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJ1xyXG4gICAgXSxcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIHRhcmdldDogJ2VzMjAyMCcsXHJcbiAgICAgIGpzeDogJ2F1dG9tYXRpYycsXHJcbiAgICAgIGpzeEltcG9ydFNvdXJjZTogJ3JlYWN0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXNidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcclxuICAgIGpzeDogJ2F1dG9tYXRpYycsXHJcbiAgICBqc3hJbXBvcnRTb3VyY2U6ICdyZWFjdCdcclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsb0JBQW9CO0FBQ2hZLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUCxDQUFDLHFDQUFxQztBQUFBLFlBQ3BDLFNBQVM7QUFBQSxZQUNULGNBQWM7QUFBQSxVQUNoQixDQUFDO0FBQUEsVUFDRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLElBQ1Y7QUFBQTtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsZ0NBQWdDO0FBQUEsTUFDaEMsOEJBQThCO0FBQUEsSUFDaEM7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sZUFBZSxDQUFDO0FBQUEsRUFDbEI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLE9BQU8sQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM1QixPQUFPLENBQUMsU0FBUyxzQkFBc0IsbUJBQW1CO0FBQUEsUUFDNUQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxpQkFBaUI7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxJQUNMLGlCQUFpQjtBQUFBLEVBQ25CO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
