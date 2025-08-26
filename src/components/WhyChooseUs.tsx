
import { Heart, Target, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      quote: "They get humans.",
      description: "We see past the surface to find what really holds people back."
    },
    {
      icon: Target,
      quote: "They get business.",
      description: "We understand pressure, politics, and priorities — and design to win."
    },
    {
      icon: CheckCircle,
      quote: "They get it done.",
      description: "We don't deliver decks. We deliver outcomes."
    }
  ];

  return (
    <section id="why-flawlesscx" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Strategic.</span> Human. Proven.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <blockquote className="text-2xl font-bold text-primary mb-4">
                "{reason.quote}"
              </blockquote>
              <p className="text-muted-foreground leading-relaxed text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
