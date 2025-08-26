import { Brain, BarChart3, Zap } from "lucide-react";
const WhatMakesUsDifferent = () => {
  const differences = [{
    icon: Brain,
    title: "Human Understanding",
    description: "We uncover emotional blockers, unmet needs, and irrational behaviours — the hidden forces behind customer friction."
  }, {
    icon: BarChart3,
    title: "Business Precision",
    description: "Our work is mapped to business goals, grounded in strategy, and always focused on commercial impact."
  }, {
    icon: Zap,
    title: "Efficient Execution",
    description: "We help you move fast — not by skipping steps, but by fixing the right thing first, avoiding waste, rework, and poor delivery."
  }];
  return <section id="what-we-do" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We don't just design for users.
            <br />
            <span className="text-primary">We design for the business.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differences.map((item, index) => <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhatMakesUsDifferent;