import CRMHero from "../components/Crm/CRMHero";
import CRMFeatures from "../components/Crm/CRMFeatures";
import CRMWorkflow from "../components/Crm/CRMWorkflow";
import CRMCTA from "../components/Crm/CRMCTA";

export default function CRM() {
  return (
    <div className="friday-page-gradient">
      <CRMHero />
      <CRMFeatures />
      <CRMWorkflow />
      <CRMCTA />
    </div>
  );
}