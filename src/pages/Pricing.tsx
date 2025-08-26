
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, Palette, Clock, FileText, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Our Services & Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We make it easy to work with us — whether you need deep diagnostic insight or flexible design and strategy support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                At FlawlessCX, we don't just design experiences — we help you deliver measurable value by finding the right problems to solve before you commit to delivery. Here's how we work with clients:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Discovery & Diagnosis */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Discovery & Diagnosis</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">Find the friction. Fix the cause.</p>
                    <p className="text-sm text-muted-foreground mb-6">
                      We identify what's holding your customers back — and why — before you invest in design or development.
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">DiscoveryStack – our proven diagnostics framework</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Customer journey mapping</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Friction & root cause analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Competitor & industry benchmark reviews</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Quick turnaround CX health checks</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">
                      Ideal for teams needing clarity on what to fix — and where to start.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy & Consulting */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Strategy & Consulting</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">Smart decisions start with the right questions.</p>
                    <p className="text-sm text-muted-foreground mb-6">
                      We support leadership and product teams with insight, focus, and strategic direction.
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Product & service design consultancy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Digital & CX investment planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Design leadership & team mentoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Internal capability building</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">On-demand strategic input</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">
                      Perfect for in-flight projects or teams navigating complexity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Design & Delivery */}
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Design & Delivery</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">Design that delivers. Not just looks good.</p>
                    <p className="text-sm text-muted-foreground mb-6">
                      We help you bring the right solutions to life — tested, validated, and ready to deliver results.
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">UX & product design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">End-to-end service design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Rapid prototyping & concept development</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Research-led design iterations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm">Design team augmentation</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">
                      For when you're ready to move from insight to impact.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Consultancy Services */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Consultancy & Design Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Flexible engagement options to suit your pace, priorities, and team needs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Day Rate */}
                <Card className="hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">Day Rate</CardTitle>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">£950</span>
                      <span className="text-sm text-muted-foreground ml-1">/ day</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-base mb-4 leading-relaxed">
                      Bring in senior expertise when you need it.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      Ideal for reviews, design critiques, team workshops, or leadership support.
                    </p>
                    <div className="text-center mt-auto">
                      <Button size="lg" className="text-lg px-8 py-4 w-full" asChild>
                        <Link to="/start-discovery">Book Discovery Call →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Monthly Subscription */}
                <Card className="hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">Monthly Subscription</CardTitle>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">£5,000</span>
                      <span className="text-sm text-muted-foreground ml-1">/ month</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-base mb-4 leading-relaxed">
                      Ongoing access to Alex Bradbury and the FlawlessCX team.
                    </p>
                    
                    <div className="mb-6 flex-1">
                      <h4 className="font-semibold mb-3">Use it for:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-sm">Strategy & decision support</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-sm">UX, service design & research</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-sm">Ongoing team advice</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-lg mb-6">
                      <p className="text-sm font-semibold">High-impact. Low-friction. Always on your side.</p>
                    </div>
                    
                    <div className="text-center">
                      <Button size="lg" className="text-lg px-8 py-4 w-full" asChild>
                        <Link to="/start-discovery">Book Discovery Call →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Project-Based */}
                <Card className="hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">Project-Based</CardTitle>
                    <div className="mb-4">
                      <span className="text-xl font-bold text-primary">Fixed Quote</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-base mb-4 leading-relaxed">
                      We'll scope the work and give you a clear, fixed price.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      Best for clearly defined problems or delivery outcomes.
                    </p>
                    <div className="text-center mt-auto">
                      <Button size="lg" className="text-lg px-8 py-4 w-full" asChild>
                        <Link to="/start-discovery">Book Discovery Call →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Makes FlawlessCX Different?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You're not just buying design or consultancy time — you're gaining access to decades of real-world experience, proven thinking, and a track record of delivering results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Experience You Can Trust */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">
                  Experience You Can Trust
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">20+ years in the London design industry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">10+ years running FlawlessCX across retail, media, finance & automotive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">£5 billion+ in project value delivered — from loyalty to checkout</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Trusted by leading brands: John Lewis, Sainsbury's, Virgin Media, Net-a-Porter, Cinch, Legal & General</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Every project taught us something — and our clients benefit from every lesson</span>
                  </div>
                </div>
              </div>

              {/* Speed Without Compromise */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">
                  Speed Without Compromise
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">We don't start from scratch — we apply proven thinking fast</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Clear, confident direction — based on what we know works</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Agile across contexts — from complex legacy platforms to startup journeys</span>
                  </div>
                </div>
              </div>

              {/* Strategic, Measurable Value */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">
                  Strategic, Measurable Value
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">No fluff. No guesswork. Just clarity and confidence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">We find the real problems — so you invest in what matters</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Every recommendation shaped by commercial insight and delivery know-how</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">Design that moves the needle for both your customer and your business</span>
                  </div>
                </div>
              </div>

              {/* A Partnership Built on Experience */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">
                  A Partnership Built on Experience
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">You're buying 20+ years of knowledge, not just a few hours of time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">We've solved problems like yours — and know how to avoid costly pitfalls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">We guide, challenge, and support — not just design and disappear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation call to discuss your project and find the best engagement model for your needs.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/start-discovery">Book a Free Consultation Call</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
