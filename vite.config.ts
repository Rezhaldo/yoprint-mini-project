import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@design-system': path.resolve(__dirname, 'src/design-system'),
			'@shared': path.resolve(__dirname, 'src/shared'),
		},
	},
	server: {
		port: 3000,
	},
});
