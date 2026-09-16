import CommunicationHero from "../components/Communication/CommunicationHero";
import CommunicationFeatures from "../components/Communication/CommunicationFeatures";
import CommunicationWorkflow from "../components/Communication/CommunicationWorkflow";
import CommunicationCTA from "../components/Communication/CommunicationCTA";

export default function Communication() {
  return (
    <div className="friday-page-gradient">
      <CommunicationHero />
      <CommunicationFeatures />
      <CommunicationWorkflow />
      <CommunicationCTA />
    </div>
  );
}
