import { Search, Activity, Layout, Rocket, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiscoveryStackSection = () => {
  const stages = [
    {
      icon: Search,
      title: "Discover",
      subtitle: "Multi-channel friction audit",
      timeframe: "Week 1-2",
      description: "Comprehensive analysis across all customer and business touchpoints",
      deliverables: [
        "Customer journey mapping",
        "Business process analysis", 
        "Technical audit",
        "Stakeholder interviews"
      ]
    },
    {
      icon: Activity,
      title: "Diagnose", 
      subtitle: "Root cause analysis and prioritisation",
      timeframe: "Week 2-3",
      description: "Systematic identification of friction causes and business impact",
      deliverables: [
        "Friction impact assessment",
        "Root cause analysis",
        "Priority matrix",
        "ROI projections"
      ]
    },
    {
      icon: Layout,
      title: "Design",
      subtitle: "Solution roadmap and implementation plan", 
      timeframe: "Week 3-4",
      description: "Evidence-based solution design with clear implementation pathway",
      deliverables: [
        "Solution architecture",
        "Implementation roadmap",
        "Resource requirements",
        "Success metrics"
      ]
    },
    {
      icon: Rocket,
      title: "Deliver",
      subtitle: "Outcome measurement and optimisation",
      timeframe: "Week 4-6",
      description: "Implementation support and continuous improvement framework",
      deliverables: [
        "Implementation guidance",
        "Performance tracking",
        "Optimization recommendations", 
        "Success measurement"
      ]
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2">Proprietary Methodology</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            DiscoveryStack®: Systematic Friction 
            <br />Diagnosis in <span className="text-secondary">4-6 Weeks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology delivers rapid, accurate friction diagnosis with clear, 
            actionable recommendations. No lengthy consulting cycles – just fast, effective results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stages.map((stage, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-secondary/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <stage.icon className="h-10 w-10 text-secondary" />
                  <Badge variant="outline" className="text-xs">
                    {stage.timeframe}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{stage.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {stage.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{stage.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Deliverables
                  </div>
                  {stage.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Rapid Delivery</h3>
            <p className="text-muted-foreground">
              Get actionable insights in weeks, not months. Our streamlined process delivers fast results without compromising quality.
            </p>
          </div>
          <div className="text-center">
            <Activity className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Systematic Approach</h3>
            <p className="text-muted-foreground">
              Every friction point is identified, analyzed, and prioritized using our proven methodology and advanced analytics.
            </p>
          </div>
          <div className="text-center">
            <Rocket className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Actionable Results</h3>
            <p className="text-muted-foreground">
              Receive clear, prioritized recommendations with implementation guidance and ROI projections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryStackSection;