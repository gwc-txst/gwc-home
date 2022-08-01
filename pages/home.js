import FeatureCTA from "../components/FeatureCTA";
import FeatureDuo from "../components/FeatureDuo";
import FeatureFour from "../components/FeatureFour";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
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
  );
}
