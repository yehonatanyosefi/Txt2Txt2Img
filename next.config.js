// next.config.js

module.exports = {
	reactStrictMode: true,
	webpack: (config, options) => {
		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'replicate.delivery',
				port: '',
				pathname: '**',
			},
		],
	},
}
