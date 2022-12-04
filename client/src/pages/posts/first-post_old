import Link from 'next/link';
import Image from 'next/image';
import profile from '../../public/images/profile.jpg';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


const YourComponent = () => (
    <Image
      src={profile} // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

export default function FirstPost() {
    return (
        <Layout>
         <Head>
        <title>First Post</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        {/* <meta property="og:title" content="My page title" key="title" /> */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h1>First Post</h1>
    <YourComponent/>
    <h2>
    <Link href="/">Back to home</Link>
  </h2>
  </Layout>
    );
  }