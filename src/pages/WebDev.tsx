import WebDevHero from "../components/webdev/WebDevHero";
import WebDevFeatures from "../components/webdev/WebDevFeatures";
import WebDevWorkflow from "../components/webdev/WebDevWorkflow";
import WebDevCTA from "../components/webdev/WebDevCTA";

export default function WebDev() {
  return (
    <div className="friday-page-gradient">
      <WebDevHero />
      <WebDevFeatures />
      <WebDevWorkflow />
      <WebDevCTA />
    </div>
  );
}
