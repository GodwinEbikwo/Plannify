import Head from "next/head";
import { SmoothScrollProvider } from "../src/utils/SmoothScroll";
import Layout, { siteTitle } from "../src/components/Layout";
import Hero from "../src/components/Hero";
import One from "../src/components/One";
import Two from "../src/components/Two";
import Third from "../src/components/Third";
import Four from "../src/components/Four";

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="The most trustworthy travel agency"
          />
        </Head>
        <Hero />
        <One />
        <Two />
        <Third />
        <Four />
      </Layout>
    </SmoothScrollProvider>
  );
}
