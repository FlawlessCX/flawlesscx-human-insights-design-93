import { CheckCircle, ArrowRight, Target, Zap, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SolutionOverview = () => {
  const pillars = [
    {
      icon: Target,
      title: "Diagnose",
      description: "Systematic friction identification using DiscoveryStack®",
      details: "Multi-channel audit, root cause analysis, impact prioritization"
    },
    {
      icon: Zap,
      title: "Design", 
      description: "Prioritised solution roadmap with ROI projections",
      details: "Evidence-based recommendations, implementation planning, quick wins identification"
    },
    {
      icon: BarChart,
      title: "Deliver",
      description: "Implementation support with measurable outcomes",
      details: "Outcome tracking, optimization, continuous improvement"
    }
  ];

  const comparisons = [
    { traditional: "Generic design improvements", flawlesscx: "Systematic friction diagnosis" },
    { traditional: "3-6 month delivery", flawlesscx: "4-6 week delivery" },
    { traditional: "Subjective recommendations", flawlesscx: "Data-driven prioritisation" },
    { traditional: "Single touchpoint focus", flawlesscx: "End-to-end journey analysis" },
    { traditional: "Design-first approach", flawlesscx: "Business outcome-first approach" },
    { traditional: "£50k-£200k+ engagements", flawlesscx: "£8.5k-£29.5k accessible pricing" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The UK's Only <span className="text-primary">Customer Experience</span>
            <br />Friction Specialist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We don't just make things look better – we make them work better. 
            Our systematic approach identifies and eliminates the specific friction points 
            that are costing your business revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <pillar.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">{pillar.description}</p>
                <p className="text-sm text-muted-foreground">{pillar.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose FlawlessCX Over Traditional UX Agencies?
          </h3>
          <div className="grid gap-4">
            {comparisons.map((comparison, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-card rounded-lg">
                <div className="flex-1">
                  <div className="text-muted-foreground mb-2">Traditional UX Agencies</div>
                  <div className="text-sm">{comparison.traditional}</div>
                </div>
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-primary font-semibold mb-2">FlawlessCX</div>
                  <div className="text-sm font-medium">{comparison.flawlesscx}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to See the Difference?</h3>
          <p className="text-muted-foreground mb-6">
            Discover exactly where friction is costing your business revenue
          </p>
          <Button size="lg" asChild>
            <Link to="/start-discovery">
              Start Your Free Friction Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;