# React Auth Template

Step one
[Fork it](https://github.com/MostlyFocusedMike/react-auth-template);

Step two:
Clone it down

Step 3

npm i, npm i dotenv, 

The `vite.config.js` file is a configuration file used in projects built with Vite, a fast web development build tool. This file allows you to customize various aspects of your project's development and build process.

Here are some common use cases for the vite.config.js file:

* _Customizing the build output:_ You can specify the output directory for the built files, configure asset filenames, enable/disable source maps, and control other build-related options.

* _Setting up development server:_ You can configure the development server options, such as the port number, proxy settings, and configuring SSL/TLS certificates.

* _Loading plugins:_ Vite supports various plugins that enhance the development experience or add additional functionality. In the vite.config.js file, you can import and configure these plugins to suit your project's needs.

* _Configuring preprocessing:_ Vite supports preprocessors like TypeScript, JSX, Vue, CSS, and more. You can configure how these preprocessors are handled, including their options and configurations.

* _Optimizing the build:_ You can configure build optimizations, such as minification, tree shaking, and code splitting. These options can help reduce the bundle size and improve performance.

The specific configuration options available in the vite.config.js file may vary depending on the version of Vite you are using and the plugins you have installed.

It's worth noting that Vite uses an ES module-based configuration format, which means you can utilize modern JavaScript syntax and import other modules within the configuration file.

Here's an example of a simple vite.config.js file:

```js
export default {
  build: {
    outDir: 'dist', // Output directory for built files
    sourcemap: true, // Generate source maps
  },
  server: {
    port: 3000, // Development server port
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to another server
    },
  },
};
```

Here is what the one in the React-auth-template looks like:

```js
/* eslint-disable */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, '..', 'public'),
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
```

The proxy field specifies the proxy configuration for your server.

'/api' is the path prefix that you want to proxy. Any request made to paths starting with /api will be forwarded to the specified target.

target specifies the target URL where the proxy will redirect requests. In this case, it is 'http://0.0.0.0:3000', which means that any request made to '/api' will be forwarded to http://0.0.0.0:3000.

changeOrigin is a boolean option that, when set to true, changes the Origin HTTP header to match the target URL. This is useful when the target server expects requests to have the same origin as itself.

secure is a boolean option that, when set to false, allows the proxy to accept SSL/TLS connections with self-signed certificates. This is useful during development when using a self-signed certificate.

ws is a boolean option that, when set to true, enables WebSocket proxying. This means that WebSocket requests made to '/api' will also be proxied to the target.

By configuring the proxy in this way, any request made to paths starting with /api will be forwarded to http://0.0.0.0:3000. This can be helpful when you have a separate backend server running on a different port during development, and you want to avoid CORS (Cross-Origin Resource Sharing) issues by proxying the requests through your development server.


