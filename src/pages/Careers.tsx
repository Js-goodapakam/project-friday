import CareersHero from "../components/careers/CareersHero";
import CareersOpenRoles from "../components/careers/CareersOpenRoles";
import CareersCTA from "../components/careers/CareersCTA";

export default function Careers() {
  return (
    <div className="friday-page-gradient">
      <CareersHero />
      <CareersOpenRoles />
      <CareersCTA />
    </div>
  );
}
