import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, CheckCircle, Search, Palette, RefreshCw, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/value-proposition-hero.jpg";
import BookDiscoveryDialog from "@/components/BookDiscoveryDialog";
import WhyChooseUs from "@/components/WhyChooseUs";

const sectors = [
  { id: 'retail', name: 'Retail', active: true },
  { id: 'financial', name: 'Financial Services', active: true },
  { id: 'telecoms', name: 'Telecoms', active: true },
  { id: 'groceries', name: 'Groceries', active: true },
  { id: 'auto', name: 'Automotive', active: true },
];

const sectorData = {
  retail: {
    headline: "Diagnose shopping friction. Lift conversion and loyalty.",
    oneLiner: "FlawlessCX maps your end‑to‑end retail journeys (browse → buy → receive → return) alongside the operational delivery behind them to find the few fixes that drive the biggest commercial gains—ready to scale safely with agentic AI.",
    problems: [
      "Checkout drop‑off and payment friction across web, app and store",
      "Delivery promise accuracy, substitutions, and last‑mile handoffs",
      "Returns experience and refund timelines that erode trust",
      "Disconnected CX–Ops workflows (stock, fulfilment, customer care)",
      "Peaks readiness and cost‑to‑serve blowouts during promos/seasonal"
    ],
    deliverables: [
      "DiscoveryStack® diagnostic across CX + operations with root‑cause clarity",
      "Prioritised roadmap linking fixes to revenue uplift and cost reduction",
      "Service blueprint(s) for critical journeys (e.g., delivery & returns)",
      "\"No‑regrets\" quick‑wins and a 90‑day change plan",
      "Pragmatic AI opportunities with guardrails (e.g., agent assist, triage)"
    ],
    outcomes: [
      "Higher conversion and reduced basket abandonment",
      "Fewer WISMO/returns contacts; faster refunds",
      "Improved NPS/CSAT at delivery and returns moments",
      "Lower cost‑to‑serve across care and fulfilment"
    ],
    proofPoints: [
      "Trusted by major UK retailers and marketplaces",
      "Known for friction‑first diagnostics that translate into measurable uplift",
      "Human‑centred, system‑smart: we fix the experience and the enabling ops"
    ]
  },
  financial: {
    headline: "Remove onboarding and service friction. Grow trust and value.",
    oneLiner: "FlawlessCX uncovers the operational and experience blockers across acquisition, onboarding, servicing and retention—linking fixes to risk reduction, regulatory confidence and lifetime value, with a clear runway for compliant AI.",
    problems: [
      "Application and onboarding drop‑out (KYC/AML checks, document capture)",
      "Long waits, channel ping‑pong and opaque case progression",
      "Complaints handling inefficiency and poor root‑cause resolution",
      "Vulnerable customer journeys that fail regulatory expectations",
      "Fragmented operations and data across products and platforms"
    ],
    deliverables: [
      "DiscoveryStack® diagnostic across journeys + back office/process",
      "Prioritised fix list with benefit sizing (conversion, churn, cost, risk)",
      "Target operating model recommendations for service improvement",
      "\"No‑regrets\" quick‑wins and a 90‑day change plan",
      "Safe AI opportunities: document automation, triage, agent assistance"
    ],
    outcomes: [
      "Higher application completion and faster time‑to‑activate",
      "Reduced complaints and repeat contact; better first‑time resolution",
      "Stronger regulatory confidence and audit‑ready processes",
      "Lower operating cost per case with improved experience quality"
    ],
    proofPoints: [
      "Experience across complex, multi‑product, multi‑channel environments",
      "Delivery‑minded recommendations: weeks to actionable, not months of theory",
      "Tech‑agnostic: we make your current stack work harder before you buy more"
    ]
  },
  telecoms: {
    headline: "Fix activation, billing and support friction. Cut churn at the source.",
    oneLiner: "FlawlessCX pinpoints the operational weak links behind acquisition, provisioning, billing and support—so you reduce avoidable contact, stabilise experience at scale, and create space for smart AI automation.",
    problems: [
      "Activation/provisioning delays and engineer scheduling pain",
      "Billing errors, plan changes and credit/refund complexity",
      "Fault/outage communications that drive repeat contact and churn",
      "Disconnected journeys across digital, retail, field and contact centre",
      "Knowledge gaps and tooling that slow down agents"
    ],
    deliverables: [
      "DiscoveryStack® diagnostic across CX + operations with root causes",
      "Prioritised fixes tied to churn and cost‑to‑serve drivers",
      "Service blueprints for activation, billing and support journeys",
      "\"No‑regrets\" quick‑wins and a 90‑day change plan",
      "AI opportunities: assisted troubleshooting, proactive comms, triage"
    ],
    outcomes: [
      "Lower early‑life churn and repeat contact",
      "Faster issue resolution and reduced average handling time",
      "Better billing accuracy and reduced credit leakage",
      "Improved NPS/CSAT across activation and care moments"
    ],
    proofPoints: [
      "Trusted on complex, high‑volume, multi‑channel environments",
      "Friction‑first approach that lands measurable improvements quickly",
      "People + process + tech: recommendations that teams can actually deliver"
    ]
  },
  groceries: {
    headline: "Remove substitution and delivery friction. Protect margin and loyalty.",
    oneLiner: "FlawlessCX maps end‑to‑end grocery journeys (shop → pick → deliver/collect → credit) alongside the fulfilment engine to surface the smallest set of fixes with the biggest commercial impact—ready to scale safely with agentic AI.",
    problems: [
      "Slot search/booking friction and basket loss",
      "Out‑of‑stocks, picking accuracy and substitution rules that frustrate shoppers",
      "On‑time delivery and ETA accuracy; WISMO and driver handoffs",
      "Temperature control/cold‑chain breaches and damage claims",
      "Click & Collect queueing, signage and store handovers",
      "Refund/credit latency that erodes trust",
      "Peaks readiness (Christmas, promos) and cost‑to‑serve blowouts"
    ],
    deliverables: [
      "DiscoveryStack® diagnostic across CX + store/fulfilment/last‑mile ops",
      "Prioritised fix list tied to revenue, loyalty and cost‑to‑serve",
      "Service blueprint(s) for delivery, substitutions and credits",
      "\"No‑regrets\" quick‑wins and a 90‑day change plan",
      "Pragmatic AI opportunities: demand signals, proactive ETA comms, agent assist"
    ],
    outcomes: [
      "Higher on‑time delivery and reduced WISMO contact",
      "Fewer credits/substitution complaints; faster refund resolution",
      "Improved NPS at delivery and collection moments",
      "Lower cost‑to‑serve across contact centre and last‑mile",
      "Increased repeat rate and basket value"
    ],
    proofPoints: [
      "Experience across high‑volume, time‑critical grocery operations",
      "Friction‑first diagnostics that translate into measurable uplift",
      "People + process + tech: recommendations teams can actually deliver"
    ]
  },
  auto: {
    headline: "Unblock leads, orders and aftersales. Build lifetime loyalty.",
    oneLiner: "FlawlessCX uncovers the operational weak links across research, lead handling, finance, factory order tracking and aftersales—uniting OEM, captive finance and retailer operations—so you lift conversion and service retention while reducing complaints and cost.",
    problems: [
      "Slow lead‑to‑appointment speed and inconsistent follow‑up quality",
      "Finance/PCP application friction and compliance overhead",
      "Factory build/order tracking opacity and missed delivery promises",
      "Test‑drive booking, retailer handoffs and show‑rate drop‑off",
      "Part‑exchange journeys lacking transparency and confidence",
      "Service booking bottlenecks, warranty claims and recall communications",
      "Fragmented data and tooling across OEM CRM, DMS and contact centres",
      "Connected‑car app onboarding and support that drives repeat contact"
    ],
    deliverables: [
      "DiscoveryStack® diagnostic across journeys + retail/after‑sales operations",
      "Prioritised fixes tied to lead‑to‑sale, CSI and cost‑to‑serve drivers",
      "Service blueprints for lead handling, order tracking and service booking",
      "\"No‑regrets\" quick‑wins and a 90‑day change plan",
      "AI opportunities: intelligent triage, advisor assist, proactive order comms"
    ],
    outcomes: [
      "Higher lead‑to‑appointment and lead‑to‑sale conversion",
      "Faster response times and improved test‑drive show rates",
      "Increased service retention and CSI; reduced complaint volume",
      "Lower cost per case across customer and retailer support"
    ],
    proofPoints: [
      "Built for complex, multi‑entity environments (OEM ↔ finance ↔ retailer)",
      "Delivery‑minded recommendations: weeks to action, not months of theory",
      "Tech‑agnostic: make the current stack work harder before buying more"
    ]
  }
};

const Solutions = () => {
  const [selectedSector, setSelectedSector] = useState('retail');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentSector = sectorData[selectedSector as keyof typeof sectorData];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <Badge variant="outline" className="mb-6">
                Complete Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Why <span className="text-primary">FlawlessCX</span>?
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Because your customers deserve better than broken experiences, 
                and your business deserves better than guesswork. We deliver evidence-based CX 
                solutions tailored to your industry.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" onClick={() => setIsDialogOpen(true)}>
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/discovery-stack">See DiscoveryStack®</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="FlawlessCX solutions" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Problem with Traditional CX Approaches
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Assumptions Over Evidence</h3>
                <p className="text-muted-foreground">Teams build based on what they think customers want, not what they actually need.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Surface-Level Solutions</h3>
                <p className="text-muted-foreground">Quick fixes that address symptoms but ignore the root causes of friction.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wasted Resources</h3>
                <p className="text-muted-foreground">Money, time, and effort spent on the wrong priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Approach: Evidence-Based CX Strategy
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We don't guess. We diagnose. We don't assume. We discover.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-bold mb-6">The FlawlessCX Method</h3>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Diagnose First</h4>
                    <p className="text-muted-foreground">Using DiscoveryStack®, we map your entire customer journey to identify exactly where friction occurs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Find Root Causes</h4>
                    <p className="text-muted-foreground">We dig deeper than surface symptoms to understand why problems exist at a systemic level.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Prioritize Impact</h4>
                    <p className="text-muted-foreground">We create a clear roadmap showing you exactly what to fix first for maximum business impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Component */}
      <WhyChooseUs />

      {/* Sector Buttons */}
      <section className="py-16 border-b bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground">
              Each solution is crafted to address your industry's unique challenges and opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.map((sector) => (
              <Button
                key={sector.id}
                variant={selectedSector === sector.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedSector(sector.id)}
              >
                {sector.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Headline */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentSector.headline}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentSector.oneLiner}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What we solve */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What we solve (fast)</h3>
                  <div className="space-y-4">
                    {currentSector.problems.map((problem, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{problem}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What you get */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What you get in 3–4 weeks</h3>
                  <div className="space-y-4">
                    {currentSector.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Outcomes */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Outcomes we target</h3>
                  <div className="space-y-4">
                    {currentSector.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Proof Points */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Proof points</h3>
                  <div className="space-y-4">
                    {currentSector.proofPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed to <span className="text-primary">Deliver Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything runs Discovery → Design → Delivery. All pricing indicative; confirmed post-scoping.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* DiscoveryStack */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">DiscoveryStack® — Fixed Package</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">Diagnose before you invest.</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">4–6 week diagnostic that maps CX + operations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Friction & root-cause findings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Prioritised roadmap + impact matrix</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">AI opportunity map</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">
                    Clarity from £12,500 · Impact from £19,500 · Vision from £29,500+
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Consultancy */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consultancy</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">Discovery → Design → Delivery</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Discovery: diagnostics, audits, decision support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Design: strategy, roadmaps, solution definition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Delivery: governance, measurement, de-risking</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">
                    Day rate £950–£1,250+/day · Retainers available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Design Services */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design Services</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">Research-led design that delivers.</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Research & mapping; service blueprints</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">Interface/interaction design; content & states</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">UX & product design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm">End-to-end service design</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">
                    Day rate or subscription available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement Options */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Flexible Engagement Options
              </h3>
              <p className="text-lg text-muted-foreground">
                Choose the approach that fits your needs and timeline
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Monthly Subscription</h4>
                <p className="text-2xl font-bold text-primary mb-2">£5,000</p>
                <p className="text-sm text-muted-foreground">Ongoing access to Alex Bradbury and the FlawlessCX team</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Day Rate</h4>
                <p className="text-2xl font-bold text-primary mb-2">£950–£1,250+</p>
                <p className="text-sm text-muted-foreground">Senior expertise when you need it</p>
              </Card>
              
              <Card className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Project-Based</h4>
                <p className="text-xl font-bold text-primary mb-2">Fixed Quote</p>
                <p className="text-sm text-muted-foreground">Clear, fixed price for defined scope</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Proven Results with Major Brands
            </h2>
            
            <div className="space-y-12">
              {/* John Lewis Case */}
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">John Lewis — Checkout & Service Journeys</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-muted-foreground mb-4">Drop-offs in basket → payment; avoidable service demand.</p>
                    <h4 className="font-semibold text-blue-600 mb-2">What DiscoveryStack® found:</h4>
                    <p className="text-muted-foreground">Fragmented address/payment patterns; unclear error states; operational constraints creating rework.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">What we did:</h4>
                    <p className="text-muted-foreground mb-4">Redesigned checkout & self-serve; clarified copy/states; aligned CX with ops rules; prioritised release plan.</p>
                    <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">Higher completion; fewer preventable contacts; cleaner analytics.</p>
                  </div>
                </div>
              </div>

              {/* Sainsbury's Case */}
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">Sainsbury's — Nectar Integration & Order Flows</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-muted-foreground mb-4">Loyalty and order management complexity causing friction.</p>
                    <h4 className="font-semibold text-blue-600 mb-2">Found:</h4>
                    <p className="text-muted-foreground">Competing rules across offers/fulfilment; uncertainty in amend/cancel.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Did:</h4>
                    <p className="text-muted-foreground mb-4">Simplified decisions; clarified loyalty interactions; designed guided amend/cancel; mapped dependencies.</p>
                    <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">Smoother journeys; fewer errors/hand-offs; stronger test signals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              The Result: <span className="text-primary">Measurable Impact</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">Trusted</div>
                <p className="text-muted-foreground">to optimise multi-billion-pound digital channels</p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">4-6 weeks</div>
                <p className="text-muted-foreground">DiscoveryStack® delivers clarity fast</p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">Measurable</div>
                <p className="text-muted-foreground">conversion and cost-to-serve gains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Remove Friction and Unlock Growth?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's start with a diagnostic conversation about your biggest CX challenges.
          </p>
          <Button size="lg" variant="secondary" className="group" onClick={() => setIsDialogOpen(true)}>
            Book Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <BookDiscoveryDialog 
        isOpen={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </div>
  );
};

export default Solutions;