import { defineConfig ,loadEnv} from 'vite'


export default defineConfig(({ }) => {

  return {
    root:'./src',
    build:{
      outDir:'dist',
    },
    base: './',           
    server:{
      port:3000,
      proxy:{
        '/api':{
          target:'http://127.0.0.1:8000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        }
      }
    },
    css:{
      modules:{
        generateScopedName:'[name]_[local]_[hash:base64:5]',
      }
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': '/src',
      },
    },
    esbuild: {
      jsx: 'automatic', 
    },
  };
});