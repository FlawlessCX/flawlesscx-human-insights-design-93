import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Target, Brain, Zap, Eye, Users, BarChart3 } from "lucide-react";
import { useState } from "react";
import BookDiscoveryDialog from "@/components/BookDiscoveryDialog";

const DiscoveryStack = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const uniqueSellingPoints = [
    {
      icon: Target,
      title: "Root-Cause Clarity",
      description: "Go beyond surface issues. We identify the true causes behind customer drop-offs and operational friction."
    },
    {
      icon: Users,
      title: "Customer + Business Experience Together",
      description: "We connect front-end journeys with the business processes that shape them, giving leaders a complete view."
    },
    {
      icon: Brain,
      title: "AI-Ready by Design",
      description: "Every engagement highlights where agentic AI can assist, act, or advise — future-proofing your investment."
    }
  ];

  const valueDelivered = [
    "Rapid, actionable insights in just 4–6 weeks",
    "A prioritised roadmap balancing effort and impact",
    "Executive alignment workshops to drive clarity and commitment",
    "A clear AI opportunity map to guide future automation and optimisation"
  ];

  const pricingPackages = [
    {
      name: "Clarity",
      price: "From £12,500",
      duration: "4 weeks",
      description: "Focused insight on 1–2 journeys",
      features: [
        "Journey mapping & friction analysis",
        "Root cause identification",
        "Prioritised recommendations",
        "Executive playback session"
      ],
      icon: Eye,
      popular: false
    },
    {
      name: "Impact",
      price: "From £19,500",
      duration: "5–6 weeks",
      description: "Expanded diagnostics with a prioritised plan",
      features: [
        "Complete CX + BX mapping",
        "AI-powered insights",
        "Root cause analysis",
        "Impact matrix (effort × value)",
        "AI opportunity map",
        "Executive alignment workshops"
      ],
      icon: BarChart3,
      popular: true
    },
    {
      name: "Vision",
      price: "From £29,500+",
      duration: "6+ weeks",
      description: "Strategic transformation plus AI roadmap",
      features: [
        "End-to-end transformation plan",
        "Comprehensive AI strategy",
        "Change management framework",
        "Multi-phase implementation roadmap",
        "Ongoing advisory support",
        "Executive coaching sessions"
      ],
      icon: Zap,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              DiscoveryStack® —
              <br />
              <span className="text-primary">Diagnose Before You Invest</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              A 4–6 week diagnostic that maps your customer and business experiences, pinpoints friction, and delivers a prioritised roadmap with clear AI opportunities.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {uniqueSellingPoints.map((point, index) => (
                <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-4">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Delivered */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Value Delivered
            </h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                {valueDelivered.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 text-left">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-lg text-card-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pricing Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level of insight that fits your needs and budget.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                    pkg.popular ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      pkg.popular ? 'bg-accent/10' : 'bg-muted'
                    }`}>
                      <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-accent' : 'text-muted-foreground'}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className={`text-3xl font-bold ${pkg.popular ? 'text-accent' : 'text-foreground'}`}>
                        {pkg.price}
                      </span>
                      <span className="text-base text-muted-foreground ml-2">{pkg.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-accent' : 'text-muted-foreground'
                        }`} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={pkg.popular ? "default" : "outline"} 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Diagnose Before You Invest?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Get the clarity you need to make confident decisions about your customer experience investments.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsDialogOpen(true)}
              className="px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <BookDiscoveryDialog 
        isOpen={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        pageContext="DiscoveryStack"
      />
    </div>
  );
};

export default DiscoveryStack;