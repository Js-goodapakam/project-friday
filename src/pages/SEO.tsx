import SEOHero from "../components/seo/SEOHero";
import SEOFeatures from "../components/seo/SEOFeatures";
import SEOWorkflow from "../components/seo/SEOWorkflow";
import SEOCTA from "../components/seo/SEOCTA";

export default function SEO() {
  return (
    <div className="friday-page-gradient">
      <SEOHero />
      <SEOFeatures />
      <SEOWorkflow />
      <SEOCTA />
    </div>
  );
}
