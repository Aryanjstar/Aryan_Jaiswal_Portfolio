/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	experimental: {
		outputFileTracingRoot: undefined,
	},
	trailingSlash: false,
	env: {
		CUSTOM_KEY: "azure-deployment",
	},
};

export default nextConfig;
