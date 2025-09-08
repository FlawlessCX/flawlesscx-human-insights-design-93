
import Hero from "@/components/Hero";
import ProblemDefinition from "@/components/ProblemDefinition";
import SolutionOverview from "@/components/SolutionOverview";
import DiscoveryStackSection from "@/components/DiscoveryStackSection";
import ServicePackages from "@/components/ServicePackages";
import ProvenResults from "@/components/ProvenResults";
import Clients from "@/components/Clients";
import FinalCTA from "@/components/FinalCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemDefinition />
      <SolutionOverview />
      <DiscoveryStackSection />
      <ServicePackages />
      <ProvenResults />
      <Clients />
      <FinalCTA />
    </div>
  );
};

export default Index;
