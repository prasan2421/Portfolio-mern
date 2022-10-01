/** @type {import('next').NextConfig} */


module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
          fs: false
      }
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
          } 
        ],
        
      })
  }

    
    return config
  },

  images: {
    unoptimized: true
},

  experimental: {
    
    scrollRestoration: true,
},
resolve: {
        fallback: {
            "fs": false
        },
    },
    output: 'standalone',
    swcMinify: true,
}
