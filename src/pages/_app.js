import "@/styles/globals.scss";
import { useEffect, useState } from "react";
import { Layout } from "./components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
