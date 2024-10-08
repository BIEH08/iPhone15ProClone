import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		sentryVitePlugin({
			org: "bieh08",
			project: "javascript-react-iphone-15-pro-clone",
		}),
	],
	base: "/PhoneClone/",

	build: {
		sourcemap: true,
	},
});
