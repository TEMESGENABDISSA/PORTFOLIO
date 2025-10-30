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
    port: 5173,
    strictPort: true,
    open: true,
    cors: true,
    fs: {
      strict: false
    },
    hmr: {
      clientPort: 5173,
      port: 5173,
      host: "localhost",
      protocol: "ws"
    }
  },
  build: {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxFdmFuZ2FkaVxcXFxQaGFzZS00XFxcXHBvcnRmb2xpb1xcXFxUT00tUE9SVEZPTElPXFxcXHRlbWVzZ2VuLTNkXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9FdmFuZ2FkaS9QaGFzZS00L3BvcnRmb2xpby9UT00tUE9SVEZPTElPL3RlbWVzZ2VuLTNkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgWydAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1yZWFjdC1qc3gnLCB7XG4gICAgICAgICAgICBydW50aW1lOiAnYXV0b21hdGljJyxcbiAgICAgICAgICAgIGltcG9ydFNvdXJjZTogJ3JlYWN0J1xuICAgICAgICAgIH1dLFxuICAgICAgICAgICdAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJ1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTE3MyxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIG9wZW46IHRydWUsXG4gICAgY29yczogdHJ1ZSxcbiAgICBmczoge1xuICAgICAgc3RyaWN0OiBmYWxzZVxuICAgIH0sXG4gICAgaG1yOiB7XG4gICAgICBjbGllbnRQb3J0OiA1MTczLFxuICAgICAgcG9ydDogNTE3MyxcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcHJvdG9jb2w6ICd3cydcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICByZWFjdDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICB0aHJlZTogWyd0aHJlZScsICdAcmVhY3QtdGhyZWUvZmliZXInLCAnQHJlYWN0LXRocmVlL2RyZWknXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAncmVhY3QnLFxuICAgICAgJ3JlYWN0LWRvbScsXG4gICAgICAndGhyZWUnLFxuICAgICAgJ0ByZWFjdC10aHJlZS9maWJlcicsXG4gICAgICAnQHJlYWN0LXRocmVlL2RyZWknLFxuICAgICAgJ2ZyYW1lci1tb3Rpb24nLFxuICAgICAgJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJ1xuICAgIF0sXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgICBqc3g6ICdhdXRvbWF0aWMnLFxuICAgICAganN4SW1wb3J0U291cmNlOiAncmVhY3QnXG4gICAgfVxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICBqc3g6ICdhdXRvbWF0aWMnLFxuICAgIGpzeEltcG9ydFNvdXJjZTogJ3JlYWN0J1xuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxvQkFBb0I7QUFDaFksT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLENBQUMscUNBQXFDO0FBQUEsWUFDcEMsU0FBUztBQUFBLFlBQ1QsY0FBYztBQUFBLFVBQ2hCLENBQUM7QUFBQSxVQUNEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsWUFBWTtBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixPQUFPLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDNUIsT0FBTyxDQUFDLFNBQVMsc0JBQXNCLG1CQUFtQjtBQUFBLFFBQzVEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsSUFDTCxpQkFBaUI7QUFBQSxFQUNuQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
