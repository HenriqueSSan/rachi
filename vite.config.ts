import { defineConfig, ServerOptions } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';

const serverConfig: ServerOptions = {
  host: true,
  port: 3000,
};

export default defineConfig({
  plugins: [eslintPlugin()],

  server: { ...serverConfig },
});
