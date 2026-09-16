import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesGrid from "../components/industries/IndustriesGrid";
import IndustriesCTA from "../components/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <div className="friday-page-gradient">
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesCTA />
    </div>
  );
}
