
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

      {/* Experience and Value Sections */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Experience You Can Trust */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                🧠 Experience You Can Trust
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">20+ years in the London design industry, spanning UX, service design, and strategy.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">10+ years leading FlawlessCX, solving complex CX problems for major brands.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Deep expertise earned across high-impact projects worth over £5 billion.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Worked with industry leaders including John Lewis, Sainsbury's, Net-a-Porter, Virgin Media, Cinch Cars, and Legal & General.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Real lessons learned from every project — our clients benefit from decades of tested insight, not theory.</span>
                </div>
              </div>
            </div>

            {/* Speed Without Compromise */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                ⚡ Speed Without Compromise
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">We don't start from scratch — we apply proven thinking fast, because we've seen what works (and what doesn't).</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Able to cut through complexity and deliver clear, confident direction quickly.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Whether it's a scrappy MVP or enterprise-scale rollout, we adapt and move at pace.</span>
                </div>
              </div>
            </div>

            {/* Strategic, Measurable Value */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                🎯 Strategic, Measurable Value
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">No fluff. No guesswork. Just clarity.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">We get to the root cause fast, helping you invest in what really needs fixing.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Every recommendation is shaped by real-world results and deep commercial awareness.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">Our focus: designing experiences that move the needle — for your customers and your business.</span>
                </div>
              </div>
            </div>

            {/* A Partnership Built on Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                🤝 A Partnership Built on Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">You're not buying hours — you're buying two decades of learning, insight, and delivery success.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">We've handled problems like yours before, and know how to navigate them with precision.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-base leading-relaxed">We don't just design; we support, challenge, and guide your team to better outcomes.</span>
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
                <div className="text-3xl font-bold text-primary mb-2">25-40%</div>
                <p className="text-muted-foreground">Average improvement in conversion rates</p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">3-6 months</div>
                <p className="text-muted-foreground">Typical time to see significant results</p>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">ROI 300%+</div>
                <p className="text-muted-foreground">Return on investment for most clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
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
