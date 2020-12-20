import styles from "./layout.module.scss";
import Head from "next/head";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./footer";

export const siteTitle = "Plannify";
export const url = "https://plannify.vercel.app/";
export const description = "The most trustworthy travel agency";
const previewImage = "Plannify.png";

export default function Layout({ children, description }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:url" content={url} key="ogurl" />
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
