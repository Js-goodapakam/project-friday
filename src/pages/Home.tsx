import FridayWelcomeAnimation from "../components/home/FridayWelcomeAnimation";
import Hero from "../components/hero/Hero";
import WhatIsFriday from "../components/home/WhatIsFriday";
import Solutions from "../components/home/Solutions";
import Services from "../components/home/Services";
import BusinessWorkflow from "../components/home/BusinessWorkflow";
import Industries from "../components/home/Industries";

export default function Home() {
  return (
    <div className="friday-page-gradient">
      <FridayWelcomeAnimation />

      <Hero />
      <WhatIsFriday />
      <Solutions />
      <Services />
      <BusinessWorkflow />
      <Industries />
    </div>
  );
}