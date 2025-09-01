
import Hero from "@/components/Hero";
import VideoIntro from "@/components/VideoIntro";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import HowWeWork from "@/components/HowWeWork";
import DiscoveryStackHighlight from "@/components/DiscoveryStackHighlight";
import Services from "@/components/Services";
import AIAgenticApproach from "@/components/AIAgenticApproach";
import Impact from "@/components/Impact";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatMakesUsDifferent />
      <HowWeWork />
      <DiscoveryStackHighlight />
      <Services />
      <AIAgenticApproach />
      <Impact />
      <Clients />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
};

export default Index;
