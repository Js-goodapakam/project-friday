import TeamHero from "../components/team/TeamHero";
import TeamGrid from "../components/team/TeamGrid";
import TeamCTA from "../components/team/TeamCTA";

export default function OurTeam() {
  return (
    <div className="friday-page-gradient">
      <TeamHero />
      <TeamGrid />
      <TeamCTA />
    </div>
  );
}
