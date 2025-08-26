import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Lightbulb, Users, BarChart3, Target, Zap, Brain } from "lucide-react";

const DiscoveryStack = () => {
  const benefits = [
    {
      icon: Target,
      title: "Pinpoint the Real Problems",
      description: "Stop guessing. Our framework identifies the exact friction points causing customer drop-offs."
    },
    {
      icon: Brain,
      title: "AI-Enhanced Insights",
      description: "Human expertise combined with AI-powered analysis for deeper, faster insights."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make confident investment decisions backed by comprehensive diagnostics."
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description: "Get clarity in weeks, not months. Fast-track your way to better customer experiences."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Journey Mapping",
      description: "We map your complete customer journey across all touchpoints, identifying potential friction areas."
    },
    {
      step: "02",
      title: "Qualitative & Quantitive Research",
      description: "Gather insights from analytics, user feedback, subject matter experts within the business, and direct customer interactions."
    },
    {
      step: "03",
      title: "AI Analysis",
      description: "Our AI processes patterns, correlations, and anomalies in your customer experience data."
    },
    {
      step: "04",
      title: "Root Cause Identification",
      description: "Pinpoint exactly why problems occur, not just where they happen."
    },
    {
      step: "05",
      title: "Strategic Roadmap",
      description: "Receive a prioritised action plan with clear next steps and expected impact."
    }
  ];

  const outcomes = [
    "What's broken in the customer experience",
    "Why it's happening",
    "What to do next"
  ];

  const whatYouGet = [
    "A full picture of what's working and what's not",
    "The root causes behind performance issues",
    "A practical, actionable plan showing what to fix—and in what order"
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Clarity, Strategy, Confidence —
              <br />
              <span className="text-primary">Before You Build</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              At FlawlessCX, we believe the foundation of any successful customer experience lies in mastering three key stages: Discovery, Design, and Delivery.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Most businesses jump too quickly into design and build—without truly understanding the root causes of friction, missed opportunities, or what their customers actually need. That's where things go wrong.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              That's why we created <strong>DiscoveryStack®</strong> — our flagship diagnostics product designed to give you clarity before you commit, and confidence that what you design and deliver will work for both your customers and your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg">
                Book Your Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
            
            {/* Video */}
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
                  <iframe 
                    src="https://share.synthesia.io/embeds/videos/04bed666-4a6b-4205-b7f9-62940a07bde4?autoplay=0&muted=1&controls=1&cc_load_policy=1"
                    loading="lazy" 
                    title="DiscoveryStack® Overview"
                    allowFullScreen 
                    allow="encrypted-media; fullscreen; autoplay;" 
                    style={{ 
                      position: 'absolute', 
                      width: '100%', 
                      height: '100%', 
                      top: 0, 
                      left: 0, 
                      border: 'none', 
                      padding: 0, 
                      margin: 0, 
                      overflow: 'hidden' 
                    }}
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  A 2-minute overview of DiscoveryStack® and how it reveals the hidden friction in your customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DiscoveryStack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              What is DiscoveryStack®?
            </h2>
            
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                DiscoveryStack® is a fast, focused diagnostic designed to help you understand what's working, what's not, and where the biggest opportunities lie across your customer experience.
              </p>
              
              <p>
                It gives you a clear, visual map of the customer journey, highlighting pain points, blockers, and conversion gaps from both a customer and business perspective.
              </p>

              <p>
                Unlike generic UX audits or CX reports, DiscoveryStack® combines 10 years of practical expertise gained from working with brands like John Lewis, Sainsbury's, Ticketmaster, Net-a-Porter, Cinch Cars, and Wayflyer. Across all of them, the pattern is the same:
              </p>

              <div className="bg-slate-50 p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Friction reduces engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Friction reduces conversion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>And friction kills revenue</span>
                </div>
              </div>

              <p className="font-medium">
                DiscoveryStack® identifies exactly where that friction is—and what to do about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Stop Solving the Wrong Problems
            </h2>
            <p className="text-xl text-muted-foreground">
              DiscoveryStack® gives you clarity on exactly what needs fixing and why, 
              so you can invest your resources where they'll have the biggest impact.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">You'll Discover:</h3>
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-4 text-lg">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it's Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why it's Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Rooted in Experience</h3>
              <p className="text-muted-foreground">Built from a decade of hands-on work with major brands solving real business and customer experience challenges.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business-First</h3>
              <p className="text-muted-foreground">Goes beyond UX to uncover hidden commercial opportunities and operational inefficiencies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Balanced Viewpoint</h3>
              <p className="text-muted-foreground">Maps the journey from both customer and business angles, so solutions are usable and commercially viable.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast & Actionable</h3>
              <p className="text-muted-foreground">Delivered in just 3 weeks—with an option to accelerate to 2 weeks. You get clarity, fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              The DiscoveryStack® Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach combines human expertise with AI-powered analysis 
              to uncover insights that traditional methods miss.
            </p>
          </div>

          {/* DiscoveryStack Process Map */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/work/Conversion funnel Analysis & Visualisation.png" 
                alt="DiscoveryStack Process Map"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DiscoveryStack Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              DiscoveryStack® Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the level of insight that fits your needs and budget.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Silver Tier */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Silver</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-700">£7,500</span>
                    <span className="text-base text-muted-foreground ml-2">fixed price</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Essential insights for focused improvements</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic journey mapping</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Key friction point identification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority recommendations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">2-week delivery</span>
                  </div>
                </div>
                
                <Button variant="outline" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Gold Tier */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-primary p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Gold</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">£13,000</span>
                    <span className="text-base text-muted-foreground ml-2">fixed price</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Comprehensive analysis with strategic guidance</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete journey mapping & analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI-powered insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Root cause identification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Strategic roadmap</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3-week delivery</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full">
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Platinum Tier */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Platinum</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-700">£20,000</span>
                    <span className="text-base text-muted-foreground ml-2">fixed price</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Complete solution with ongoing support</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Gold</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Competitor benchmarking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Implementation workshop</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-day follow-up support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority delivery (2 weeks)</span>
                  </div>
                </div>
                
                <Button variant="outline" size="lg" className="w-full">
                  Premium Package
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powering Design & Delivery */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Powering Design & Delivery with Discovery
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Designing and delivering a flawless customer experience doesn't start in Figma or with a backlog—it starts with Discovery.
              </p>
              <p>
                DiscoveryStack® gives you the insight to design with precision, and deliver with confidence.
              </p>
              <p className="font-medium">
                If you're creating or optimising a digital product or service, DiscoveryStack® ensures you're solving the right problems—and building the right things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover What's Really Broken?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Book a Discovery Call to learn how DiscoveryStack® can reveal the hidden friction 
            costing you customers and revenue.
          </p>
          <Button size="lg" variant="secondary">
            Book Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default DiscoveryStack;
