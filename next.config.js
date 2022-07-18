/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"images.unsplash.com",
			"images.ctfassets.net",
			"drive.google.com",
			"www.dropbox.com",
		],
	},
};

module.exports = nextConfig;
