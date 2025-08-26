
import { Search, Users, Lightbulb, Target, ArrowRight } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      subtitle: "Uncover Hidden Problems",
      description: "We use strategic research methods to identify the invisible friction points that are silently impacting your business performance."
    },
    {
      icon: Users,
      title: "Understand",
      subtitle: "Human-Centred Analysis",
      description: "We map the complete customer journey, understanding both emotional and functional needs to reveal opportunity gaps."
    },
    {
      icon: Lightbulb,
      title: "Design",
      subtitle: "Strategic Solutions",
      description: "We craft experiences that solve real problems while aligning with your business objectives and technical constraints."
    },
    {
      icon: Target,
      title: "Deliver",
      subtitle: "Measurable Impact",
      description: "We ensure efficient implementation and measure success through both user satisfaction and business metrics."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Strategic Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just design interfaces. We architect experiences that bridge 
            the gap between human needs and business success.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-muted-foreground absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                )}
                
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-4">{step.subtitle}</h4>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-slate-50 p-12 rounded-3xl max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Why Our Approach Works</h3>
            <p className="text-lg text-muted-foreground mb-8">
              We combine deep human insight with business strategy, ensuring every design decision 
              serves both user needs and commercial objectives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Human-Centred</h4>
                <p className="text-muted-foreground">We understand the emotional and cognitive aspects of user experience</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business-Focused</h4>
                <p className="text-muted-foreground">Every recommendation ties directly to your commercial goals</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Strategically Pragmatic</h4>
                <p className="text-muted-foreground">We balance ideal solutions with practical implementation realities</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Measurably Effective</h4>
                <p className="text-muted-foreground">We track success through both qualitative and quantitative metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
