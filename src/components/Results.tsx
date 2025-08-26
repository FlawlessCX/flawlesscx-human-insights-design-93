
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Average Conversion Increase",
      description: "Clients typically see significant conversion improvements within 3 months"
    },
    {
      icon: Users,
      value: "85%",
      label: "Customer Satisfaction Boost",
      description: "Enhanced experiences lead to measurable satisfaction improvements"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Faster Implementation",
      description: "Our strategic approach reduces time-to-market for improvements"
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      description: "Every project delivers measurable business impact"
    }
  ];

  const testimonials = [
    {
      quote: "FlawlessCX didn't just improve our interface—they transformed how we think about customer experience. The hidden friction points they uncovered were costing us millions.",
      author: "Sarah Chen",
      role: "Head of Digital, FinTech Scale-up"
    },
    {
      quote: "Their strategic approach to UX is unlike anything we've experienced. They understand both the human psychology and business metrics that matter.",
      author: "Marcus Thompson",
      role: "COO, E-commerce Platform"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you solve the right problems, the impact is measurable. 
            Here's what happens when human experience meets business strategy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl">
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The FlawlessCX Difference</h3>
            <p className="text-lg text-muted-foreground">
              We don't just deliver great design—we deliver great human experiences 
              that create measurable business value from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
