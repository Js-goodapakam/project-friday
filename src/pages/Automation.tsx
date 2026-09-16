import AutomationHero from "../components/automation/AutomationHero";
import AutomationFeatures from "../components/automation/AutomationFeatures";
import AutomationWorkflow from "../components/automation/AutomationWorkflow";
import AutomationCTA from "../components/automation/AutomationCTA";

export default function Automation() {
  return (
    <div className="friday-page-gradient">
      <AutomationHero />
      <AutomationFeatures />
      <AutomationWorkflow />
      <AutomationCTA />
    </div>
  );
}
