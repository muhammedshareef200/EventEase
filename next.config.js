/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'],
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'utfi.io',
                port:''
            }
        ]
    }
}

module.exports = nextConfig
