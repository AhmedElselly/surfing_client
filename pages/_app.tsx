import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Menubar from "@/components/Menubar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Menubar />
      <Component {...pageProps} />
    </Fragment>
  );
}
