import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wine Gallery</title>
        <meta
          name="description"
          content="Site used for finding and creating listings for wine"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
