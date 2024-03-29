import FeatureCTA from "../components/FeatureCTA";
import FeatureDuo from "../components/FeatureDuo";
import FeatureFour from "../components/FeatureFour";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Girls Who Code TXST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Hero />
        {/* Philosophy */}
        <FeatureFour />
        {/* Donate CTA */}
        <FeatureCTA />
        {/* Double Feature Section */}
        <FeatureDuo />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
