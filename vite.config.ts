import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	envDir: './env/frontend',
	build: {
		ssr: false,
	}
});
