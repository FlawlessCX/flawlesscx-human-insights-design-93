import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/value-proposition-hero.jpg";

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
    ],
    pitch: "\"We're a CX and service‑design consultancy that specialises in retail friction. Using our DiscoveryStack® diagnostic, we map customer journeys and the fulfilment engines behind them to surface the few fixes that move the numbers—conversion, delivery satisfaction, and cost‑to‑serve. In three to four weeks you get root‑cause clarity, a prioritised action plan, and pragmatic AI opportunities—so you can act now and scale confidently.\""
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
    ],
    pitch: "\"We specialise in removing friction from financial‑services journeys—where risk, regulation and customer expectation collide. Our DiscoveryStack® maps the customer experience and the processes behind it to expose root causes and prioritise fixes that lift conversion, reduce complaints and strengthen compliance. In a few weeks you'll have a focused, measurable plan and a safe path to leverage AI where it adds real value.\""
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
    ],
    pitch: "\"Telecoms is unforgiving—volumes spike, complexity multiplies, and one weak link creates churn. We use DiscoveryStack® to map customer journeys alongside provisioning, billing and support operations to find root causes and the smallest set of fixes with the biggest impact. In three to four weeks you'll have a ranked plan to cut avoidable contact, stabilise experience, and deploy AI where it makes a safe, provable difference.\""
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
    ],
    pitch: "\"Grocery CX lives or dies on promises kept—stock, substitutions and on‑time delivery. We use DiscoveryStack® to map the customer journey alongside picking, fulfilment and last‑mile operations, pinpointing root causes and a short, ranked list of fixes. In three to four weeks you get a measurable plan to cut WISMO, protect margin and loyalty, and identify where AI (proactive ETAs, smarter subs, agent assist) adds safe, provable value.\""
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
    ],
    pitch: "\"Automotive journeys break where OEM, finance and retailers meet. We use DiscoveryStack® to map customer experience and the networked operations behind it, exposing root causes and a focused, measurable set of fixes. In three to four weeks you'll have a ranked plan to speed up lead handling, make orders and handovers transparent, and strengthen aftersales—plus safe AI plays like advisor assist and proactive order communications.\""
  }
};

const ValueProposition = () => {
  const [selectedSector, setSelectedSector] = useState('retail');
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
                Sector Value Propositions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Tailored solutions for your
                <span className="text-primary"> industry</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how FlawlessCX transforms customer experiences across different sectors. 
                Each solution is crafted to address your industry's unique challenges and opportunities.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/start-discovery">
                    Book a DiscoveryStack® consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/discovery-stack">See how we prioritise change</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="FlawlessCX sector value propositions" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Buttons */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
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
      <section className="py-24">
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

            {/* What we solve */}
            <Card className="mb-12">
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
            <Card className="mb-12">
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
            <Card className="mb-12">
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
            <Card className="mb-12">
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

            {/* 30-second pitch */}
            <Card className="mb-16">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">30‑second intro pitch</h3>
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                  {currentSector.pitch}
                </blockquote>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/start-discovery">
                    Book a DiscoveryStack® consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/discovery-stack">See how we prioritise change</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueProposition;