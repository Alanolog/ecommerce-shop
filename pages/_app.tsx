import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar, Announcement, Footer } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RANDOM.</title>
        <meta name="description" content="Ecommerce web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navbar />
        <Announcement />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
