import Head from "next/head";
import { SmoothScrollProvider } from "../src/utils/SmoothScroll";
import Layout, { siteTitle } from "../src/components/Layout";
import Hero from "../src/components/Hero";
import One from "../src/components/One";
import Two from "../src/components/Two";
import Third from "../src/components/Third";
import Four from "../src/components/Four";
import Partnership from "../src/components/Partnership";
import CTA from "../src/components/CTA";
import Testimonials from "../src/components/Testimonials";
import Newsletter from "../src/components/Newsletter";

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
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
          <meta
            name="description"
            content="The most trustworthy travel agency"
          />
        </Head>
        <Hero />
        <Partnership />
        <One />
        <CTA
          title=" Join thousands of travellers using plannify to travel around the
            world"
        />
        <Two />
        <Third />
        <Four />
        <CTA title="Ready for that dream vacation? Join now to see if you qualify" />
        <Testimonials />
        <Newsletter />
      </Layout>
    </SmoothScrollProvider>
  );
}
