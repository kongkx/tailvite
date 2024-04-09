import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    plugins: [liveReload('./**/*.(php|inc|theme|twig|scss)'), mkcert()],

    build: {
        manifest: true,
        rollupOptions: {
            input: ['resources/main.js'],
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `chunks/[name].[hash].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    },

    server: {
        cors: true,
        strictPort: true,
        port: 12321,
        hmr: {
            host: 'localhost',
        },
    },

    resolve: {
        alias: {
            jquery: '/resources/jquery.module.js',
        },
    },
});
