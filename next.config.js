/** @type {import('next').NextConfig} */


module.exports = {
    // useFileSystemPublicRoutes: false,
    trailingSlash: true,
    env: {
      // HOST:'http://13.50.130.172:80/api'
      // ,
      HOST:'http://localhost:80/api',
      ACCESSKEY_ID: 'AKIA47WKKVG2CTX2ADNJ',
    SECRETKEY_ID: 'dr7Kv2Q7psc8YpSFLO4R7zOE64ognzZvPW826IGL',
  
     
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