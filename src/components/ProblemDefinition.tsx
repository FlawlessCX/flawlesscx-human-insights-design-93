import { AlertTriangle, TrendingDown, Clock, Users, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemDefinition = () => {
  const frictionPoints = [
    {
      icon: Users,
      title: "Customer Abandonment",
      stat: "67%",
      description: "of customers abandon purchases due to friction in the checkout process",
      impact: "Lost conversions, reduced lifetime value"
    },
    {
      icon: Clock,
      title: "Process Delays", 
      stat: "40%",
      description: "of business processes contain unnecessary friction that slows operations",
      impact: "Increased costs, reduced efficiency"
    },
    {
      icon: DollarSign,
      title: "Revenue Leakage",
      stat: "15-30%",
      description: "of potential revenue is lost due to unidentified friction points",
      impact: "Lower profit margins, missed growth"
    },
    {
      icon: Target,
      title: "Poor Targeting",
      stat: "58%",
      description: "of businesses can't identify their biggest friction points without help",
      impact: "Wasted resources, wrong priorities"
    }
  ];

  const hiddenCosts = [
    "Customer service costs increase by 25% due to friction-related queries",
    "Average cart abandonment costs UK e-commerce £18bn annually", 
    "Internal processes with friction cost 2-3x more to complete",
    "Poor onboarding friction reduces customer lifetime value by 40%"
  ];

  return (
    <section className="py-24 bg-destructive/5 border-y border-destructive/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">Critical Business Issue</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hidden Friction is Costing You 
            <br /><span className="text-destructive">Revenue Every Day</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses lose 15-30% of their potential revenue to friction they don't even know exists. 
            Every day you wait, the cost compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {frictionPoints.map((point, index) => (
            <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors bg-card/50">
              <CardHeader className="text-center pb-4">
                <point.icon className="h-12 w-12 text-destructive mx-auto mb-3" />
                <div className="text-3xl font-bold text-destructive mb-2">{point.stat}</div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-3">{point.description}</p>
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-2">
                  <TrendingDown className="h-3 w-3 inline mr-1" />
                  {point.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-destructive/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            The Hidden Cost of Friction
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hiddenCosts.map((cost, index) => (
              <div key={index} className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                <span className="text-sm">{cost}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-destructive/10 to-warning/10 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Can You Afford to Ignore This?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every month of delay costs your business thousands in lost revenue. 
            The question isn't whether you can afford to fix friction – it's whether you can afford not to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/start-discovery">
                Discover Your Hidden Friction Points
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/start-discovery">
                Calculate Your Friction Cost
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDefinition;