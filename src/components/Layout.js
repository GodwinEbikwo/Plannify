import styles from "./layout.module.scss";
import Head from "next/head";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./footer";

export const siteTitle = "TravelNow";
export const description = "The most trustworthy travel agency ";

export default function Layout({ children, description }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:locale" content="en_GB" />
        <meta name="description" content={description} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{siteTitle}</title>
      </Head>
      {/* <Banner /> */}
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
