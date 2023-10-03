// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    react(),
    laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

],
})