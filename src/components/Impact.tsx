
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Increased Conversion"
    },
    {
      icon: Clock,
      title: "Faster Delivery Cycles"
    },
    {
      icon: DollarSign,
      title: "Reduced CX Costs"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results. <span className="text-primary">Not Just Great Design.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">✅ {impact.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-border max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-6">
            "Alex did an outstanding job at researching and fully understanding our customers, testing all iterations and building a great UX"
          </blockquote>
          <cite className="text-primary font-semibold">Andreu Tobella Brunet - Entrepreneur / CPO Hometree</cite>
        </div>
      </div>
    </section>
  );
};

export default Impact;
