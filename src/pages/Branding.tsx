import BrandingHero from "../components/branding/BrandingHero";
import BrandingFeatures from "../components/branding/BrandingFeatures";
import BrandingWorkflow from "../components/branding/BrandingWorkflow";
import BrandingCTA from "../components/branding/BrandingCTA";

export default function Branding() {
  return (
    <div className="friday-page-gradient">
      <BrandingHero />
      <BrandingFeatures />
      <BrandingWorkflow />
      <BrandingCTA />
    </div>
  );
}
