import TransformationHero from "../components/transformation/TransformationHero";
import TransformationFeatures from "../components/transformation/TransformationFeatures";
import TransformationWorkflow from "../components/transformation/TransformationWorkflow";
import TransformationCTA from "../components/transformation/TransformationCTA";

export default function Transformation() {
  return (
    <div className="friday-page-gradient">
      <TransformationHero />
      <TransformationFeatures />
      <TransformationWorkflow />
      <TransformationCTA />
    </div>
  );
}
