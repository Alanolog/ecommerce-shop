import Head from "next/head";
import React from "react";
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
} from "../components";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};
export default Home;
