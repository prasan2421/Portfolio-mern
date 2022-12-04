import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      

      <body 
    //   className="bg-white"
      >
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGQ35MD"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}