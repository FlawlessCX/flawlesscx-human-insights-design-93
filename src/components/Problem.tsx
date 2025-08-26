
import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Revenue Leakage",
      description: "Customer friction points that quietly drain conversion rates and lifetime value"
    },
    {
      icon: Users,
      title: "Experience Gaps",
      description: "Disconnects between what customers need and what your product delivers"
    },
    {
      icon: Target,
      title: "Misaligned Metrics",
      description: "Business KPIs that don't reflect the real customer experience quality"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-medium">The Hidden Challenge</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your customers are struggling,
            <br className="hidden md:block" />
            but you don't know why
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses focus on symptoms—low conversion, high churn, poor reviews. 
            We dig deeper to find the root causes hiding in your customer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Cost of Invisible Problems</h3>
            <p className="text-lg text-muted-foreground">
              Every day these hidden friction points cost you customers, revenue, and competitive advantage. 
              The longer they remain undetected, the harder they become to solve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
