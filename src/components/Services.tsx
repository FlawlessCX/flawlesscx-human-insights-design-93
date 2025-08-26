
import { Search, Palette, Settings, TrendingUp, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Customer Experience Diagnostics",
      subtitle: "Find the friction before you fund the fix.",
      features: [
        "DiscoveryStack® Diagnostics — our proprietary framework that maps journeys, pinpoints pain points, and identifies root causes.",
        "CX Audits & Heuristic Evaluations (web, app, in-store)",
        "Funnel analysis & drop-off point diagnosis",
        "Research synthesis from interviews, observations, analytics"
      ]
    },
    {
      icon: Palette,
      title: "UX & Product Design",
      subtitle: "Design experiences that convert, retain, and delight.",
      features: [
        "UX/UI Design for Web & App",
        "Mobile-first product design",
        "Prototyping & user flows",
        "Accessibility & usability optimisation",
        "Behaviourally informed interaction design"
      ]
    },
    {
      icon: Settings,
      title: "Service Design",
      subtitle: "Align your end-to-end journeys across people, systems, and processes.",
      features: [
        "Customer Journey Mapping",
        "Service Blueprints",
        "Cross-channel Experience Design",
        "Operational and Process Mapping",
        "Omni-channel service design strategies"
      ]
    },
    {
      icon: TrendingUp,
      title: "Experience Strategy & CX Consulting",
      subtitle: "Work smarter, reduce waste, and make better CX investment decisions.",
      features: [
        "Experience Vision & Roadmap Planning",
        "Ways of Working & Agile CX Support",
        "Product-Market Fit Exploration",
        "Digital Transformation Support",
        "Leadership-level advisory on CX/UX investments"
      ]
    },
    {
      icon: Bot,
      title: "AI & Insight Acceleration",
      subtitle: "Combine human expertise with AI-powered diagnostics.",
      features: [
        "AI-enhanced journey analysis",
        "Automated insight extraction from customer data",
        "Training for teams using DiscoveryStack® AI workflows",
        "Custom dashboards for CX health and decision-making"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🔧 FlawlessCX Service Offerings
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
