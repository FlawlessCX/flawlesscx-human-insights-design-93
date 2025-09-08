import { TrendingUp, Users, ShoppingCart, Clock, ArrowRight, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProvenResults = () => {
  const caseStudies = [
    {
      company: "John Lewis Partnership",
      logo: "/JohnLewis.svg",
      challenge: "£2bn+ revenue platform optimisation",
      solution: "Systematic checkout friction removal",
      results: [
        { metric: "Conversion Improvement", value: "15%", icon: TrendingUp },
        { metric: "Additional Revenue", value: "£300M", icon: ShoppingCart },
        { metric: "Implementation Time", value: "3 months", icon: Clock }
      ],
      timeframe: "6-week diagnostic, 3-month implementation",
      quote: "FlawlessCX identified friction points we didn't even know existed. The ROI was immediate and substantial."
    },
    {
      company: "Sainsbury's",
      logo: "/Sainsburys.svg", 
      challenge: "£1bn+ loyalty integration without disruption",
      solution: "Seamless Nectar integration into checkout flow",
      results: [
        { metric: "Loyalty Engagement", value: "+25%", icon: Users },
        { metric: "Customer Complaints", value: "0", icon: TrendingUp },
        { metric: "Process Efficiency", value: "+40%", icon: Clock }
      ],
      timeframe: "4-week analysis, 2-month implementation", 
      quote: "The systematic approach meant zero customer disruption during a major integration."
    },
    {
      company: "Net-A-Porter",
      logo: "/Net-a-Porter.svg",
      challenge: "£10s millions operational efficiency improvement", 
      solution: "Buyer and distribution centre workflow optimisation",
      results: [
        { metric: "Process Efficiency", value: "+40%", icon: TrendingUp },
        { metric: "Cost Savings", value: "£5M", icon: ShoppingCart },
        { metric: "Error Reduction", value: "-60%", icon: Clock }
      ],
      timeframe: "5-week diagnostic, 4-month transformation",
      quote: "The dual-perspective approach optimized both our customer and internal operations simultaneously."
    }
  ];

  const overallStats = [
    { label: "Average ROI", value: "5:1", subtitle: "within 12 months" },
    { label: "Client Satisfaction", value: "98%", subtitle: "would recommend" },
    { label: "Revenue Impact", value: "£2bn+", subtitle: "across all clients" },
    { label: "Delivery Speed", value: "4-6 weeks", subtitle: "vs industry 3-6 months" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2 bg-success/10 text-success border-success/20">
            Proven Track Record
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Measurable Outcomes, 
            <br />Not Just <span className="text-primary">Pretty Designs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients don't just get recommendations – they get results. Real revenue impact, 
            measurable improvements, and ROI you can track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-success mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/30 transition-colors">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src={study.logo} 
                      alt={`${study.company} logo`}
                      className="h-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                    <Badge variant="outline" className="text-xs">
                      {study.timeframe}
                    </Badge>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-primary mb-2">Solution Applied</div>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-success/5 rounded-lg border border-success/10">
                        <result.icon className="h-6 w-6 text-success flex-shrink-0" />
                        <div>
                          <div className="text-2xl font-bold text-success">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{study.quote}"
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-success/5 to-teal/5 rounded-2xl p-8 text-center border border-success/10">
          <h3 className="text-3xl font-bold mb-4">Ready to See Similar Results?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business has unique friction points, but our systematic approach delivers 
            consistent results. See what we can achieve for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/start-discovery">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">
                View All Case Studies
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;