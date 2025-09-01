
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WhyFlawlessCX = () => {
  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why <span className="text-primary">FlawlessCX</span>?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Because your customers deserve better than broken experiences, 
              and your business deserves better than guesswork.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/start-discovery">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Proven Results with Major Brands
            </h2>
            
            <div className="space-y-12">
              {/* John Lewis Case */}
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">John Lewis — Checkout & Service Journeys</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-muted-foreground">Drop-offs in basket → payment; avoidable service demand.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">What DiscoveryStack® found:</h4>
                    <p className="text-muted-foreground">Fragmented address/payment patterns; unclear error states; operational constraints creating rework.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">What we did:</h4>
                    <p className="text-muted-foreground">Redesigned checkout & self-serve; clarified copy/states; aligned CX with ops rules; prioritised release plan.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">Higher completion; fewer preventable contacts; cleaner analytics.</p>
                  </div>
                </div>
              </div>

              {/* Sainsbury's Case */}
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">Sainsbury's — Nectar Integration & Order Flows</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-muted-foreground">Loyalty and order management complexity causing friction.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Found:</h4>
                    <p className="text-muted-foreground">Competing rules across offers/fulfilment; uncertainty in amend/cancel.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Did:</h4>
                    <p className="text-muted-foreground">Simplified decisions; clarified loyalty interactions; designed guided amend/cancel; mapped dependencies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">Smoother journeys; fewer errors/hand-offs; stronger test signals.</p>
                  </div>
                </div>
              </div>

              {/* Net-a-Porter Case */}
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">Net-a-Porter — Operational Optimisation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                    <p className="text-muted-foreground">Manual steps delaying order management.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Found:</h4>
                    <p className="text-muted-foreground">Bottlenecks across PO workflows; inconsistent statuses.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Did:</h4>
                    <p className="text-muted-foreground">Redesigned workflows/UI; status clarity; service blueprints aligned to ops.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Outcome:</h4>
                    <p className="text-muted-foreground">Faster cycle times; reduced manual effort; foundations for automation.</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Friction and Unlock Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's start with a diagnostic conversation about your biggest CX challenges.
            </p>
          <Button size="lg" variant="secondary" className="group" asChild>
            <Link to="/start-discovery">
              Book Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default WhyFlawlessCX;
