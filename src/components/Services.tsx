
import { Search, Palette, Settings, TrendingUp, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "DiscoveryStack® — Fixed Package",
      subtitle: "Diagnose before you invest.",
      features: [
        "4–6 week diagnostic that maps CX + operations",
        "Friction & root-cause findings",
        "Prioritised roadmap + impact matrix (effort × value)",
        "AI opportunity map (assist/act/advise)",
        "Packages: Clarity (£12,500+), Impact (£19,500+), Vision (£29,500+)"
      ]
    },
    {
      icon: Settings,
      title: "Consultancy — Day rate or subscription",
      subtitle: "Discovery → Design → Delivery",
      features: [
        "Discovery: diagnostics, audits, decision support",
        "Design: strategy, roadmaps, solution definition",
        "Delivery: governance, measurement, de-risking",
        "Day rate typically £950–£1,250+/day (by seniority/scope)",
        "Retainers available; priced to outcomes and cadence"
      ]
    },
    {
      icon: Palette,
      title: "Design Services — Day rate or subscription",
      subtitle: "Research-led design that delivers.",
      features: [
        "Research & mapping; service blueprints",
        "Interface/interaction design; content & states",
        "Implementation support, testing, optimisation",
        "UX & product design",
        "End-to-end service design"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed to <span className="text-primary">Deliver Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything runs Discovery → Design → Delivery. All pricing indicative; confirmed post-scoping.
          </p>
          
          <Button variant="outline" size="lg" asChild>
            <Link to="/value-proposition">See Industry-Specific Solutions</Link>
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-primary font-medium mb-4 text-sm">{service.subtitle}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
