import "../styles/globals.css";
import "../styles/css/Home.css";
import "../styles/css/Footer.css";
import "../styles/css/Navbar.css";
import "../styles/css/Projects.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="shortcut icon" href="/images/logoCont.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
