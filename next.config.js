/** @type {import('next').NextConfig} */


module.exports = {
  // useFileSystemPublicRoutes: false,
  trailingSlash: true,
  env: {
    // HOST:'http://13.50.130.172:80/api'
    // ,
    HOST:'http://localhost:80/api',
    ACCESSKEY_ID: 'AKIA47WKKVG2DVLOYDO6',
  SECRETKEY_ID: 'EA8pDGvLbzIysDcXjfLSiW3WU5z6nL/ESS1mFt9O',

   
    // NODE_ENV : 'production'

  },
  // reactStrictMode:true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/test",
  //       destination: "http://localhost:3001/api/test",
  //     },
  //     {
  //       source: "/api/users",
  //       destination: "http://localhost:3001/api/users",
  //     },
  //     {
  //       source: "/api/contacts",
  //       destination: "http://localhost:3001/api/contacts",
  //     },
  //   ]
  // },



  images: {
    unoptimized: true
},

// experimental:{appDir: true},



    output: 'standalone',
    swcMinify: true,
}
