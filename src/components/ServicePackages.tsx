import { CheckCircle, Star, ArrowRight, Clock, Target, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ServicePackages = () => {
  const packages = [
    {
      name: "Express Diagnostic",
      price: "£8,500",
      duration: "2-3 weeks",
      icon: Clock,
      description: "Perfect for urgent issues requiring immediate attention",
      features: [
        "Single journey analysis",
        "Top 5 friction points identified",
        "30-day action plan",
        "Executive summary report",
        "1 implementation workshop"
      ],
      ideal: "Urgent conversion issues, specific pain points, quick wins needed",
      color: "warning"
    },
    {
      name: "Clarity Package",
      price: "£12,500", 
      duration: "4 weeks",
      icon: Target,
      description: "Comprehensive friction analysis with dual perspective",
      features: [
        "Dual journey mapping (CX + BX)",
        "Comprehensive friction analysis",
        "3-month roadmap",
        "AI opportunity assessment",
        "Implementation priorities",
        "2 stakeholder workshops"
      ],
      ideal: "Growing businesses, process optimization, systematic improvement",
      popular: true,
      color: "secondary"
    },
    {
      name: "Impact Package", 
      price: "£19,500",
      duration: "5-6 weeks",
      icon: TrendingUp,
      description: "Multi-channel analysis with detailed implementation guidance",
      features: [
        "Multi-channel analysis",
        "Detailed implementation guidance", 
        "12-month transformation roadmap",
        "Technology recommendations",
        "3-month advisory support",
        "Team training included"
      ],
      ideal: "Established businesses, digital transformation, long-term strategy",
      color: "primary"
    },
    {
      name: "Vision Package",
      price: "£29,500",
      duration: "6-8 weeks", 
      icon: Zap,
      description: "Strategic transformation with AI integration strategy",
      features: [
        "Strategic transformation planning",
        "AI integration strategy",
        "18-month roadmap",
        "Change management support",
        "6-month partnership support",
        "Executive coaching included"
      ],
      ideal: "Large organizations, AI adoption, strategic transformation",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string, isPopular?: boolean) => {
    if (isPopular) return "border-secondary bg-secondary/5";
    
    switch (color) {
      case "warning": return "border-warning/30 hover:border-warning/50";
      case "secondary": return "border-secondary/30 hover:border-secondary/50"; 
      case "primary": return "border-primary/30 hover:border-primary/50";
      case "accent": return "border-accent/30 hover:border-accent/50";
      default: return "border-border hover:border-primary/50";
    }
  };

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-primary">Friction Removal</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing, clear deliverables, and guaranteed ROI. Choose the package 
            that matches your business needs and urgency level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 transform hover:scale-105 ${getColorClasses(pkg.color, pkg.popular)}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <pkg.icon className={`h-12 w-12 mx-auto mb-4 text-${pkg.color}`} />
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <Badge variant="outline" className="text-sm">{pkg.duration}</Badge>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Ideal For
                  </div>
                  <p className="text-xs text-muted-foreground">{pkg.ideal}</p>
                </div>

                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/start-discovery">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Package is Right?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your specific needs. 
            We'll recommend the best approach and provide a custom proposal if needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/start-discovery">
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/start-discovery">
                Download Package Comparison
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;