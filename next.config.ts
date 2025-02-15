import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'behoof.up.railway.app',
				port: '4002'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'https://behoof.up.railway.app/uploads/:path*'
			}
		]
	}
}

export default nextConfig
