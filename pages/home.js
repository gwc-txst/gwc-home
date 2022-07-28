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
      {/* Become a member */}
      <FeatureDuo />
      {/* Donate CTA */}
      <FeatureCTA />
      {/* Footer */}
      <Footer />
    </div>
  );
}
