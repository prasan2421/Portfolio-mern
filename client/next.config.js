/** @type {import('next').NextConfig} */


module.exports = {
  // reactStrictMode:true,
  async rewrites() {
    return [
      {
        source: "/api/test",
        destination: "http://localhost:3001/api/test",
      },
      {
        source: "/api/users",
        destination: "http://localhost:3001/api/users",
      },
      {
        source: "/api/contacts",
        destination: "http://localhost:3001/api/contacts",
      },
    ]
  },

 
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
